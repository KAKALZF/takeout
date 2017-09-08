package com._520it.takeout.util;

import java.io.InputStream;
import java.util.Properties;

/**
 * Created by liruifeng on 2017/9/4.
 */
public class URLUtil {
    private URLUtil(){}
    public static String getURLProperties(String url) {
        try {
            //读取资源文件
            ClassLoader loader = URLUtil.class.getClassLoader();
            InputStream in = loader.getResourceAsStream("wx.properties");
            Properties p = new Properties();
            p.load(in);
            url = (String)p.get(url);
            in.close();;
            return url;
        } catch (Exception e) {
            e.printStackTrace();
        }
    return "";
    }
}
