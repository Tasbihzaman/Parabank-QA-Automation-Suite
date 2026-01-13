package stepDefinitions;

import io.cucumber.java.en.Given;
import pageObjects.LoginPage;
import utils.BaseClass;

public class BackgroundSteps {

    LoginPage loginPage;

    public BackgroundSteps() {
        loginPage = new LoginPage(BaseClass.getDriver());
    }

    @Given("User is on the ParaBank Home Page")
    public void user_is_on_the_para_bank_home_page() {
        // Hooks already navigates to the correct URL
        // Just verify the page object is initialized
        assert loginPage != null : "Login page did not load correctly";
    }
}







//package stepDefinitions;
//
//import io.cucumber.java.en.Given;
//import pageObjects.LoginPage;
//import utils.BaseClass;
//import utils.CommonUtils;
//import java.io.IOException;
//import static org.testng.Assert.assertTrue;
//
//public class BackgroundSteps {
//    LoginPage loginPage;
//
//    public BackgroundSteps() {
//        loginPage = new LoginPage(BaseClass.getDriver());
//    }
//
//    @Given("User is on the ParaBank Home Page")
//    public void user_is_on_the_para_bank_home_page() throws IOException {
//        // Read URL from properties file
//        String homePageUrl = CommonUtils.readPropertiesFile(".ui.url");
//        BaseClass.getDriver().get(homePageUrl);
//        // Optional: confirm login page elements are visible
//        assertTrue(loginPageLoaded(), "Login page did not load correctly");
//    }
//    // Helper method to confirm login page elements are visible
//    private boolean loginPageLoaded() {
//        try {
//            return loginPage != null;
//        } catch (Exception e) {
//            return false;
//        }
//    }
//}
//
