package utils;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.Properties;

public class CommonUtils {

    private static final String EXTENT_CONFIG = "extent.properties";
    private static final String ENV_CONFIG = "src/test/resources/env.properties";
    private static final int DEFAULT_TIMEOUT = 55;

    //---------Generic helper to read any properties file------------
    private static String readProperty(String filePath, String key) throws IOException {
        try (FileInputStream fis = new FileInputStream(filePath)) {
            Properties props = new Properties();
            props.load(fis);
            return props.getProperty(key);
        }
    }
    //---------Read from env.properties (used by LoginPage)--------
    public static String readPropertiesFile(String key) throws IOException {
        return readProperty(ENV_CONFIG, key);
    }
    //------Read from extent.properties (used by Hooks)-----
    public static String readExtentProperty(String key) throws IOException {
        Properties props = new Properties();
        try (InputStream input = CommonUtils.class.getClassLoader()
                .getResourceAsStream(EXTENT_CONFIG)) {
            if (input == null) {
                throw new IOException("extent.properties not found in classpath");
            }
            props.load(input);
        }
        return props.getProperty(key);
    }

    // ====================Capture Screenshot, Create sub folder and save====================
    public static byte[] captureScreenshot(String fileName) throws IOException {

        WebDriver driver = BaseClass.getDriver();
        if (driver == null) return null;

        //---------Keep baseDir as defined (src/test/screenshot)-------
        String baseDir = readExtentProperty("screenshot.dir");
        String runTimestamp = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss").format(new Date());
        // --------Create subfolder inside baseDir-------
        File runFolder = new File(baseDir, runTimestamp);
        if (!runFolder.exists()) {
            runFolder.mkdirs();
        }
        //------------Screenshot filename---------
        String screenshotName = fileName.replaceAll(" ", "_") + "_" + runTimestamp + ".png";
        File screenshotFile = new File(runFolder, screenshotName);
        TakesScreenshot ts = (TakesScreenshot) driver;
        //----------Take screenshot and save----------
        byte[] screenshotBytes = ts.getScreenshotAs(OutputType.BYTES);
        FileUtils.writeByteArrayToFile(screenshotFile, screenshotBytes);

        System.out.println("Screenshot saved at: " + screenshotFile.getAbsolutePath());
        return screenshotBytes;
    }

    // =============================Reuseable explicit wait methods WebElement Version=================================
    //----------Wait for visibility--------------
    public static WebElement waitForVisible(WebElement element) {

        return waitForVisible(element, DEFAULT_TIMEOUT);
    }
    public static WebElement waitForVisible(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(BaseClass.getDriver(), Duration.ofSeconds(timeout));
        return wait.until(ExpectedConditions.visibilityOf(element));
    }
    // -----------Wait for clickable----------
    public static WebElement waitForClickable(WebElement element) {

        return waitForClickable(element, DEFAULT_TIMEOUT);
    }
    public static WebElement waitForClickable(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(BaseClass.getDriver(), Duration.ofSeconds(timeout));
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }
    //---------Wait for Dropdown
    public static void selectDropdownByValue(WebElement element, String value) {
        Select select = new Select(element);
        select.selectByValue(value);
    }
    //-------Wait for text------
    public static boolean waitForText(WebElement element, String text) {
        return waitForText(element, text, DEFAULT_TIMEOUT);
    }
    public static boolean waitForText(WebElement element, String text, int timeout) {
        WebDriverWait wait = new WebDriverWait(BaseClass.getDriver(), Duration.ofSeconds(timeout));
        return wait.until(ExpectedConditions.textToBePresentInElement(element, text));
    }
    //---------Wait for pageLoad------
    public static void waitForPageLoad() {
        waitForPageLoad(DEFAULT_TIMEOUT);
    }
    public static void waitForPageLoad(int timeout) {
        WebDriverWait wait = new WebDriverWait(BaseClass.getDriver(), Duration.ofSeconds(timeout));
        wait.until(driver -> ((JavascriptExecutor) driver)
                .executeScript("return document.readyState").equals("complete"));
    }
    //--------Wait for getText--------
    public static String getText(WebElement element) {
        waitForVisible(element);
        return element.getText().trim();
    }
    //-----Wait for selectByVisibleText------
    public static void selectByVisibleText(WebElement element, String text) {
        new Select(element).selectByVisibleText(text);
    }
    //----------Retry logic-----------
    public static void smartClick(WebElement element) {
        int attempts = 0;

        while (attempts < 3) {
            try {
                waitForClickable(element);
                element.click();
                return;
            } catch (Exception e) {
                attempts++;
                System.out.println("⚠️ Click failed, retrying... Attempt: " + attempts);
                shortPause(300);
            }
        }
        throw new RuntimeException("Failed to click element after retries: " + element);
    }
    public static void shortPause(int millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}


