package com._520it.takeout.web.controller;

import com._520it.takeout.domain.*;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.AutoreplyQuery;
import com._520it.takeout.query.KeywordsQuery;
import com._520it.takeout.service.*;
import com._520it.takeout.util.HttpUtil;
import com._520it.takeout.util.SecurityUtil;
import com._520it.takeout.util.WeixinUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import freemarker.template.SimpleDate;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Controller
public class WeixinController {
    @Autowired
    private IUserService service;
    @Autowired
    private IMessageService messageService;
    @Autowired
    private IKeywordsService keywordsService;
    @Autowired
    private IAutoreplyService autoreplyService;
    @Autowired
    private IFoodOrderBillService foodOrderBillService;

    // 验证消息的确来自微信服务器
    @RequestMapping(value = "/weixin", method = RequestMethod.GET)
    @ResponseBody
    public String validate(String signature, String timestamp, String nonce,
                           String echostr) {
        System.out.println(signature);
        System.out.println(timestamp);
        System.out.println(nonce);
        System.out.println(echostr);
        // 1）将token、timestamp、nonce三个参数进行字典序排序
        String[] arr = {WeixinUtil.TOKEN, timestamp, nonce};
        Arrays.sort(arr);
        String sign = "";
        // 2）将三个参数字符串拼接成一个字符串进行sha1加密
        for (String string : arr) {
            sign += string;
        }
        sign = SecurityUtil.SHA1(sign);
        // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        if (signature.equals(sign)) {
            return echostr;
        }
        return null;
    }

    // 接收普通消息
    @RequestMapping(value = "/weixin", method = RequestMethod.POST)
    @ResponseBody
    public XmlMessageEntity handlerMessage(@RequestBody XmlMessageEntity entity, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        System.out.println(entity);
        XmlMessageEntity newEntity = new XmlMessageEntity();
        // 设置发送方
        newEntity.setFromUserName(entity.getToUserName());
        // 设置接收方
        newEntity.setToUserName(entity.getFromUserName());
        // 设置时间
        newEntity.setCreateTime(new Date().getTime());

        // 如果第一次关注,回复"欢迎关注"
        if ("event".equals(entity.getMsgType())) {
            // 如果是关注事件
            if ("subscribe".equals(entity.getEvent())) {
                // 调用接口获取用户详细信息
                String result = HttpUtil.get(WeixinUtil.GET_USERINFO_URL
                        .replace("ACCESS_TOKEN", WeixinUtil.getAccessToken())
                        .replace("OPENID", entity.getFromUserName()));
                System.out.println(result);

                //通过数据查询,如果没有这个用户就添加进去
                if (service.select(newEntity.getToUserName()) == null) {
                    // 转成json对象
                    JSONObject json = JSON.parseObject(result);
                    User u = new User();
                    u.setOpenid((String) json.get("openid"));
                    u.setNickname((String) json.get("nickname"));
                    u.setGender((Integer) json.get("sex"));
                    u.setLanguager((String) json.get("language"));
                    u.setCity((String) json.get("city"));
                    u.setProvince((String) json.get("province"));
                    u.setCountry((String) json.get("country"));
                    u.setStatus((Integer) json.get("subscribe"));

                    Integer subscribe_time = json.getInteger("subscribe_time");
                    Date subscribe_time1 = new Date(subscribe_time.longValue() * 1000);
                    u.setConcerntime(subscribe_time1);

                    u.setRemark((String) json.get("remark"));
                    service.insert(u);

                    // 创建客户信息，保存到数据库
                    // .....
                    //首次关注回复内容
                    PageResult autoResult = autoreplyService.queryPageResult(new AutoreplyQuery());
                    Autoreply autoreply = (Autoreply) autoResult.getRows().get(0);
                    newEntity.setContent(autoreply.getReply());
                    System.out.println(newEntity);
                    //表示用户以前关注过,取消关注后状态变为0(未关注),更新状态为1(已关注)
                } else if (service.select(newEntity.getToUserName()).getStatus() == 0) {
                    User u = new User();
                    u.setOpenid(newEntity.getToUserName());
                    u.setStatus(1);
                    service.updateByPrimaryKey(u);
                    newEntity.setContent("既然走了为什么还要回来!");
                }
                //用户取消关注时触发该事件,改变状态为未关注
            } else if ("unsubscribe".equals(entity.getEvent())) {
                User u = new User();
                u.setOpenid(newEntity.getToUserName());
                u.setStatus(0);
                u.setCancelconcerntime(new Date());
                service.updateByPrimaryKey(u);
            }
        } else {
            //关键字回复(李海洋)
            String userMsg = entity.getContent();
            KeywordsQuery keywordsQuery = new KeywordsQuery(userMsg);
            PageResult pageResult = keywordsService.queryPageResult(keywordsQuery);
            if (pageResult.getTotal() != 0) {
                List<?> rows = pageResult.getRows();
                Keywords keywords = (Keywords) rows.get(0);
                newEntity.setContent(keywords.getReply());
            } else {
                //接入图灵机器人
                String INFO = URLEncoder.encode(entity.getContent(), "UTF-8");
                System.out.println(INFO);
                String requesturl = "http://www.tuling123.com/openapi/api?key=88a219f3644b4164829f05a8964a7fc0&info=" + INFO;
                HttpPost request = new HttpPost(requesturl);
                HttpResponse response = HttpClients.createDefault().execute(request);

                //200即正确的返回码
                if (response.getStatusLine().getStatusCode() == 200) {
                    String result = EntityUtils.toString(response.getEntity());
                    JSONObject jsonObject = JSON.parseObject(result);
                    String text = jsonObject.getString("text");
                    System.out.println(text);
                    newEntity.setContent(text);
                }
            }
        }
        //判断菜单点击事件(林泽锋)
        if ("event".equals(entity.getMsgType()) && "CLICK".equals(entity.getEvent())) {
           httpServletResponse.setContentType("text/xml;charset=UTF-8");
            List<Article> Articles = new ArrayList<>();
            //设置回复信息的类型
            newEntity.setMsgType("news");
            //图文回复的数量
            newEntity.setArticleCount(1L);
            //新建一个图文回复信息对象
            item item = new item();
            Integer eventKey = entity.getEventKey();
            switch (eventKey) {
                case 1:
                    //设置标题
                    item.setTitle("炒粉");
                    //设置描述
                    item.setDescription("炒粉算是海南最有特色的传统小吃了，无论街头小吃，排档，餐馆都可以看到...");
                    //设置点击后跳转的URL
                    item.setUrl("http://home.meishichina.com/recipe-82109.html");
                    //设置图片的URL
                    item.setPicUrl("http://kaka.nat300.top/static/pic/chaofen.jpg");
                    break;
                case 2:
                    //设置标题
                    item.setTitle("麻辣小龙虾");
                    //设置描述
                    item.setDescription(" 每年到六、七、八月是捕捞小龙虾的最好季节...");
                    //设置点击后跳转的URL
                    item.setUrl("http://www.3lian.com/gif/2016/04-16/123415.html");
                    //设置图片的URL
                    item.setPicUrl("http://kaka.nat300.top/static/pic/longxia.jpg");
                    break;
                case 3:
                    //设置标题
                    item.setTitle("酸甜排骨");
                    //设置描述
                    item.setDescription("酸甜排骨是一道色香味俱全的地方名菜，属于苏菜系。做法多样...");
                    //设置点击后跳转的URL
                    item.setUrl("https://www.haocai777.com/Article/chaocai/10188.html");
                    //设置图片的URL
                    item.setPicUrl("http://kaka.nat300.top/static/pic/paigu.jpg");
                    break;
                case 4:
                //我的订单点击(发送模板消息,朱占湖)
                //获取用户的OPENID
                String openid = entity.getFromUserName();
                //根据用户的OPENID来查询对应的订单
                FoodOrderBill fb = foodOrderBillService.selectByOpendId(openid);
                //获取用户所购商品的名称
                String foodName = fb.getFood().getName();
                //获取用户锁钩商品的价格
                String amount = fb.getAmount().toString();
                //获取用户的下单日期
                SimpleDateFormat sp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String orderTime = sp.format(fb.getOrderTime()).toString();
                //发送模板消息(注:template_id在合并的时候需要改变,现在是个人的数据)
                String result = HttpUtil.post(WeixinUtil.SEND_TEMPLATE.replace("ACCESS_TOKEN", WeixinUtil.getAccessToken()),
                        "{\"touser\":\""+openid+"\",\"template_id\":\"OaJ6TEMG9Zb8caSExdzsNzJgv1fPRnu7otW_DstDhQQ\",\"url\":\"http://weixin.qq.com/download\",\"data\":{\"first\":{\"value\":\"恭喜你购买成功！\",\"color\":\"#173177\"},\"keyword1\":{\"value\":\""+foodName+"\",\"color\":\"#173177\"},\"keyword3\":{\"value\":\""+amount+"元\",\"color\":\"#173177\"},\"keyword2\":{\"value\":\""+orderTime+"\",\"color\":\"#173177\"},\"remark\":{\"value\":\"欢迎再次购买！\",\"color\":\"#173177\"}}}");
                System.out.println(result);
                return null;
                default:
                    break;
            }
            Article article = new Article();
            article.setItem(item);
            Articles.add(article);
            //设置图文信息列
            newEntity.setArticles(Articles);
            System.out.println(newEntity);
            //返回消息
            return newEntity;
        }

        // 发送类型
        newEntity.setMsgType("text");
        //保存收发消息
        Message message = new Message();
        message.setInputtime(new Date());
        message.setOpenid(entity.getFromUserName());
        message.setReplycontent(entity.getContent());
        message.setSendcontent(newEntity.getContent());
        message.setType(entity.getMsgType());
        messageService.insert(message);
        return newEntity;
    }
}
