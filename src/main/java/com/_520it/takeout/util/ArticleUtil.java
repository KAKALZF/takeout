package com._520it.takeout.util;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.List;


public class ArticleUtil {



    public static String makeTextCustomMessage(String openId,String content){
        content.replace("\"", "\\\"");
        String jsonMsg="{\"touser\":\"%s\",\"msgtype\":\"text\",\"text\":{\"content\":\"%s\"}}";
        return String.format(jsonMsg, openId,content);

    }

    /**
     * 组装图片客服消息
     *
     * @param openId 消息发送对象
     * @param mediaId 媒体文件id
     * @return
     */
    public static String makeImageCustomMessage(String openId, String mediaId) {
        String jsonMsg = "{\"touser\":\"%s\",\"msgtype\":\"image\",\"image\":{\"media_id\":\"%s\"}}";
        return String.format(jsonMsg, openId, mediaId);
    }

    /**
     * 组装语音客服消息
     *
     * @param openId 消息发送对象
     * @param mediaId 媒体文件id
     * @return
     */
    public static String makeVoiceCustomMessage(String openId, String mediaId) {
        String jsonMsg = "{\"touser\":\"%s\",\"msgtype\":\"voice\",\"voice\":{\"media_id\":\"%s\"}}";
        return String.format(jsonMsg, openId, mediaId);
    }

    /**
     * 组装视频客服消息
     *
     * @param openId 消息发送对象
     * @param mediaId 媒体文件id
     * @param thumbMediaId 视频消息缩略图的媒体id
     * @return
     */
    public static String makeVideoCustomMessage(String openId, String mediaId, String thumbMediaId) {
        String jsonMsg = "{\"touser\":\"%s\",\"msgtype\":\"video\",\"video\":{\"media_id\":\"%s\",\"thumb_media_id\":\"%s\"}}";
        return String.format(jsonMsg, openId, mediaId, thumbMediaId);
    }

    /**
     * 组装音乐客服消息
     *
     * @param openId 消息发送对象
     * @param music 音乐对象
     * @return
     */
   /* public static String makeMusicCustomMessage(String openId, Music music) {
        String jsonMsg = "{\"touser\":\"%s\",\"msgtype\":\"music\",\"music\":%s}";
        jsonMsg = String.format(jsonMsg, openId, JSONObject.fromObject(music).toString());
        // 参数名称替换 @20140125
        jsonMsg = jsonMsg.replace("musicUrl", "musicurl");
        jsonMsg = jsonMsg.replace("HQMusicUrl", "hqmusicurl");
        jsonMsg = jsonMsg.replace("thumbMediaId", "thumb_media_id");
        return jsonMsg;
    }*/

    /**
     * 组装图文客服消息
     *
     * @param openId 消息发送对象
     * @param articleList 图文消息列表
     * @return
     */
   /* public static String makeNewsCustomMessage(String openId, List<Customer> articleList) {
        String jsonMsg = "{\"touser\":\"%s\",\"msgtype\":\"news\",\"news\":{\"articles\":%s}}";
        jsonMsg = String.format(jsonMsg, openId, JSONArray.toJSON(articleList).toString().replaceAll("\"", "\\\""));
        // 将jsonMsg中的picUrl替换为picurl
        jsonMsg = jsonMsg.replace("picUrl", "picurl");
        return jsonMsg;
    }

*/


//    发送客服消息
    public static boolean sendCustomMessage(String token,String jsonMsg){
        boolean flag=false;

        String requestUrl="https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=ACCESS_TOKEN";
        System.out.println(jsonMsg);
        requestUrl=requestUrl.replace("ACCESS_TOKEN", token);
        String post = HttpUtil.post(requestUrl, jsonMsg);
        if(post!=null){
            JSONObject jsonObject = JSON.parseObject(post);
            Object errcode = jsonObject.get("errcode");
            Object errmsg = jsonObject.get("errmsg");
           if(errcode==0){
                flag=true;
            }else{
               System.out.println("客服消息发送失败"+errcode+errmsg);
               flag=false;
           }
        }
        System.out.println(post);
        return flag;
    }

}
