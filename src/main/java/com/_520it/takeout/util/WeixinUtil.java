package com._520it.takeout.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.util.Date;

public class WeixinUtil {
	public static final String TOKEN = "fasfsaffsafas";
	public static final String APPID = "wxe24a942d43fdd820";
	public static final String APPSECRET = "fc249f84b4b9b89eb68f1759af4e2857";
	// 获取基础ACCESSTOKEN的URL
	public static final String GET_ACCESSTOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET";
	// 获取用户信息的URL(需要关注公众号)
	public static final String GET_USERINFO_URL = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN";
	// 创建菜单的URL
	public static final String CREATEMENU_URL = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN";
	// 发送模板的URL
	public static final String SEND_TEMPLATE = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=ACCESS_TOKEN";
	// 获取网页版的ACCESSTOKEN的URL
	public static final String GET_WEB_ACCESSTOKEN_URL = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code";
	// 通过网页获取用户信息的URL(不需要关注公众号)
	public static final String GET_WEB_USERINFO_URL = "https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN";
	// 获取jssdk使用的ticket
	public static final String GET_TICKET_URL = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi";

	public static String accessToken;
	// accessToken的失效时间
	public static Long expiresTime = 0L;

	/**
	 * 获取AccessToken
	 */
	public static String getAccessToken() {
		// 如果accessToken为null或者accessToken已经失效就去重新获取(提前10秒)
		if (accessToken == null || new Date().getTime() > expiresTime) {
			// 发送http请求
			String result = HttpUtil.get(GET_ACCESSTOKEN_URL.replace("APPID",
					APPID).replace("APPSECRET", APPSECRET));
			// 转成json对象
			JSONObject json = JSON.parseObject(result);
			accessToken = (String) json.get("access_token");
			Integer expires_in = (Integer) json.get("expires_in");
			// 失效时间=当前时间+7200
			expiresTime = new Date().getTime() + ((expires_in - 10) * 1000);
		}

		return accessToken;

	}

	/**
	 * 创建菜单
	 */
	public static void createMenu() {
		HttpUtil.post(
				CREATEMENU_URL.replace("ACCESS_TOKEN", getAccessToken()),
				"{\"button\":[{	\"type\":\"click\",\"name\":\"今日歌曲\",\"key\":\"V1001_TODAY_MUSIC\"},{\"name\":\"菜单\",\"sub_button\":[{	\"type\":\"view\",\"name\":\"小码哥官网\",\"url\":\"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cd3085e1b3695d9&redirect_uri=http://mtrtrs.natappfree.cc/others.jsp&response_type=code&scope=snsapi_userinfo#wechat_redirect\"},{\"type\":\"click\",\"name\":\"赞一下我们\",\"key\":\"V1001_GOOD\"}]}]}");
	}

	/**
	 * 发送模板
	 */
	public static void sendTemplate() {
		String result = HttpUtil
				.post(SEND_TEMPLATE.replace("ACCESS_TOKEN", getAccessToken()),
						"{\"touser\":\"ocoqK0rOIILtC8Ojzf372M582Saw\",\"template_id\":\"TaNqRMS31m75XVHGz_Wi3u7wog3-Lq9FlK54sJHlf-w\",\"url\":\"http://520it.com\",\"data\":{\"first\":{\"value\":\"恭喜你购买成功！\",\"color\":\"#173177\"},\"keyword1\":{\"value\":\"巧克力\",\"color\":\"#173177\"},\"keyword3\":{\"value\":\"39.8元\",\"color\":\"#173177\"},\"keyword2\":{\"value\":\"2014年9月22日\",\"color\":\"#173177\"},\"remark\":{\"value\":\"欢迎再次购买！\",\"color\":\"#173177\"}}}");
		System.out.println(result);
	}

	public static void main(String[] args) {
		sendTemplate();
	}
}
