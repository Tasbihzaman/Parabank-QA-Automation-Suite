package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {

    private static Properties properties;

    static {
        try {
            properties = new Properties();
            FileInputStream fis = new FileInputStream("src/test/resources/env.properties");
            properties.load(fis);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load env.properties file");
        }
    }

    public static String get(String key) {
        return properties.getProperty(key);
    }
}








//package utils;
//
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.util.Properties;
//
//public class ConfigReader {
//
//    private static Properties properties;
//
//    static {
//        try {
//            properties = new Properties();
//            FileInputStream fis = new FileInputStream("src/test/resources/config.properties");
//            properties.load(fis);
//        } catch (IOException e) {
//            throw new RuntimeException("Failed to load config.properties file");
//        }
//    }
//
//    public static String get(String key) {
//        return properties.getProperty(key);
//    }
//}
