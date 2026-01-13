package stepDefinitions;

import io.cucumber.java.en.*;
import pageObjects.RegisterPage;
import utils.BaseClass;

public class RegisterSteps {

    RegisterPage registerPage;

    public RegisterSteps() {
        registerPage = new RegisterPage(BaseClass.getDriver());
    }
    @When("I open the client registration form")
    public void i_open_the_client_registration_form() {
        registerPage.openRegistrationForm();
    }
    @Then("User enters valid registration details")
    public void user_enters_valid_registration_details() {
        registerPage.enterValidDetails();
    }
    @When("User enters registration details with missing {string}")
    public void user_enters_registration_details_with_missing(String field) {
        registerPage.openRegistrationForm();
        registerPage.enterDetailsWithMissingField(field);
    }
    @When("User submits the registration form")
    public void user_submits_the_registration_form() {
        registerPage.submitForm();
    }
    @Then("Client should be registered successfully")
    public void client_should_be_registered_successfully() {
        registerPage.verifyRegistrationSuccess();
    }
    @Then("An error message should be displayed")
    public void an_error_message_should_be_displayed() {
        registerPage.verifyErrorMessageDisplayed();
    }
}
