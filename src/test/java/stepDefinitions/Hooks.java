package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import utils.BaseClass;
import utils.CommonUtils;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;


public class Hooks {

    @Before
    public void driverInit() throws IOException {
        String env = CommonUtils.readPropertiesFile("env");
        String url = CommonUtils.readPropertiesFile(env + ".ui.url");

        // 🔹 Health Check BEFORE launching browser
        try { HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
            connection.setRequestMethod("GET");
            connection.setConnectTimeout(5000);
            connection.connect();
        } catch (Exception e) { throw new RuntimeException("ParaBank is NOT reachable at: " + url);
        }

        // 🔹 Initialize WebDriver AFTER confirming URL is reachable
         try { BaseClass.setDriver();
             BaseClass.getDriver().get(url);
         } catch (Exception e) {
             e.printStackTrace();
         }







        //        try {
//            // Initialize WebDriver
//            BaseClass.setDriver();
//            // Read environment (local, docker, qa, prod)
//            String env = CommonUtils.readPropertiesFile("env");
//            // Build dynamic key: docker.ui.url, local.ui.url, etc.
//            String url = CommonUtils.readPropertiesFile(env + ".ui.url");
//            // Navigate to environment-specific UI URL
//            BaseClass.getDriver().get(url);
//        } catch (Exception e) {
//            e.printStackTrace(); // better logging
//        }

    }
    @After
    public void tearDown(Scenario scenario) {
        WebDriver driver = BaseClass.getDriver();
        try {
            if (scenario.isFailed() && driver != null) {
                // Take screenshot ONCE
                byte[] screenshotBytes = CommonUtils.captureScreenshot(
                        scenario.getName().replaceAll(" ", "_"));
                // Attach to report
                scenario.attach(
                        screenshotBytes, "image/png", "Failure Screenshot");
            }
        } catch (Exception e) {
            System.out.println("Screenshot skipped: " + e.getMessage());
        } finally {
            // Quit WebDriver
            if (BaseClass.getDriver() != null) {
                BaseClass.getDriver().quit();
            }
        }
    }
}
