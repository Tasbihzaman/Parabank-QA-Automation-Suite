package stepDefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.LoginPage;
import utils.BaseClass;
import utils.CommonUtils;

import java.io.IOException;
import static org.testng.Assert.assertTrue;

public class LoginSteps {
    LoginPage login_page;

    public LoginSteps() {

        login_page = new LoginPage(BaseClass.getDriver());
    }
    // ================= Valid Login =================
    @When("User enters valid username")
    public void user_enters_valid_username() throws IOException {
        login_page.validUserName();
    }
    @When("User enters valid password")
    public void user_enters_valid_password() throws IOException {
        login_page.validPassword();
    }
    @When("User clicks on the login button")
    public void user_clicks_on_the_login_button() throws InterruptedException {
        login_page.clickLogin();
    }
    @Then("User should be successfully logged in")
    public void user_should_be_successfully_logged_in() {
        login_page.confirmationPage();
    }
    @Then("User should see the Accounts Overview page")
    public void user_should_see_the_accounts_overview_page() throws IOException {
        login_page.confirmationPage();
    }

    // ================= Empty Field Scenarios =================
    @When("User leaves username field empty")
    public void user_leaves_username_field_empty() {

        login_page.clearUsername();
    }
    @When("User leaves password field empty")
    public void user_leaves_password_field_empty() {

        login_page.clearPassword();
    }
    @Then("User should remain on the login page")
    public void user_should_remain_on_the_login_page()  {
        assertTrue(login_page.isLoginButtonDisplayed(), "User is not on the login page!");
    }
    @Then("The login form should remain empty")
    public void the_login_form_should_remain_empty() {

        login_page.loginFormEmpty();
    }
}
