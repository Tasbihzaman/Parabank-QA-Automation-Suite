package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class BaseClass {

    protected static WebDriver driver;

    public static void initializeDriver() {
        String executionMode = System.getProperty("execution.mode", "local"); // default to local
        String gridUrl = System.getProperty("grid.url", "http://localhost:4444/wd/hub");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--no-sandbox");
        options.addArguments("--remote-allow-origins=*");
        if (executionMode.equalsIgnoreCase("grid")) {
            try {
                driver = new RemoteWebDriver(new URL(gridUrl), options);
            } catch (MalformedURLException e) {
                throw new RuntimeException("Invalid Grid URL: " + gridUrl, e);
            }
        } else {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver(options);
        }
        driver.manage().window().maximize();
    }
    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver() {
        initializeDriver();
    }
}
















//
//package utils;
//
//import io.github.bonigarcia.wdm.WebDriverManager;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.chrome.ChromeOptions;
//
//public class BaseClass {
//
//    protected static WebDriver driver;
//
//    public static void initializeDriver() {
//        WebDriverManager.chromedriver().setup();
//        ChromeOptions options = new ChromeOptions();
//        options.addArguments("--remote-allow-origins=*");
//        driver = new ChromeDriver(options);
//        driver.manage().window().maximize();
//    }
//    public static WebDriver getDriver() {
//
//        return driver;
//    }
//    // Initialize WebDriver (used by Cucumber Hooks)
//    public static void setDriver() {
//
//        initializeDriver();
//    }
//
//}
