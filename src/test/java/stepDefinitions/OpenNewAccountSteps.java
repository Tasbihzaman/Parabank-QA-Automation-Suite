package stepDefinitions;

import io.cucumber.java.en.*;
import org.testng.Assert;
import pageObjects.OpenNewAccountPage;
import utils.BaseClass;

public class OpenNewAccountSteps {

    private OpenNewAccountPage openAccountPage;

    public OpenNewAccountSteps() {
        openAccountPage = new OpenNewAccountPage(BaseClass.getDriver());
    }

    @Given("User has at least one existing account")
    public void user_has_at_least_one_existing_account() {
        try {
            openAccountPage.ensureAtLeastOneAccountExists();
            System.out.println("User has at least one existing account.");
        } catch (Exception e) {
            System.out.println("Warning: Could not verify existing accounts. Proceeding anyway...");
        }
    }
    @When("User Click on Open New Account")
    public void user_click_on_open_new_account() {
        try {
            openAccountPage.clickOpenNewAccountLink();
            System.out.println("Clicked on Open New Account link.");

            // Wait for page to load
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } catch (Exception e) {
            System.err.println("Error clicking Open New Account: " + e.getMessage());
            throw e;
        }
    }
    @Then("User Select Saving Account")
    public void user_select_saving_account() {
        try {
            openAccountPage.selectSavingAccount();
            System.out.println("Selected Savings Account.");
        } catch (Exception e) {
            System.err.println("Error selecting Savings Account: " + e.getMessage());
            throw e;
        }
    }
    @Then("User Select Existing Account")
    public void user_select_existing_account() {
        try {
            openAccountPage.selectExistingAccount();
            System.out.println("Selected Existing Account.");
        } catch (Exception e) {
            System.err.println("Error selecting Existing Account: " + e.getMessage());
            throw e;
        }
    }
    @Then("User Click Open New Account")
    public void user_click_open_new_account() {
        try {
            openAccountPage.clickOpenNewAccountBtn();
            System.out.println("Clicked Open New Account button.");
            // Wait for account creation
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } catch (Exception e) {
            System.err.println("Error clicking Open New Account button: " + e.getMessage());
            throw e;
        }
    }
    @Then("a new account number should be generated")
    public void a_new_account_number_should_be_generated() {
        try {
            // First check if browser is still open
            if (BaseClass.getDriver().getWindowHandles().isEmpty()) {
                Assert.fail("Browser window was closed unexpectedly");
            }
            String acc = openAccountPage.getGeneratedAccountNumber();
            Assert.assertNotNull(acc, "Account number should not be null");
            Assert.assertFalse(acc.isEmpty(), "Account number was NOT generated!");
            Assert.assertTrue(acc.matches("\\d+"), "Account number should contain only digits");

            System.out.println("✅ New Account Number: " + acc);
        } catch (Exception e) {
            System.err.println("Error getting account number: " + e.getMessage());
            // Take screenshot or debug info
            System.out.println("Current URL: " + BaseClass.getDriver().getCurrentUrl());
            System.out.println("Page Title: " + BaseClass.getDriver().getTitle());
            throw e;
        }
    }
    @Then("a success message should be displayed")
    public void a_success_message_should_be_displayed() {
        try {
            String msg = openAccountPage.getSuccessMessage();
            Assert.assertNotNull(msg, "Success message should not be null");
            Assert.assertFalse(msg.isEmpty(), "Success message is empty!");
            // Check for any success indicator (could be different messages)
            boolean isSuccess = msg.contains("Congratulations") ||
                    msg.contains("success") ||
                    msg.contains("Account Opened") ||
                    msg.contains("is now open");

            Assert.assertTrue(isSuccess, "Success message not found. Actual message: " + msg);
            System.out.println("Success Message: " + msg);
        } catch (Exception e) {
            System.err.println("Error verifying success message: " + e.getMessage());
            // Check for error messages instead
            try {
                String pageSource = BaseClass.getDriver().getPageSource();
                if (pageSource.contains("error") || pageSource.contains("Error")) {
                    System.err.println("Page contains error text. Check application.");
                }
            } catch (Exception ex) {
                // Ignore this secondary check
            }
            throw e;
        }
    }
}
