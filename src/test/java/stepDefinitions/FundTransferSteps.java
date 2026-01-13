package stepDefinitions;

import io.cucumber.java.en.*;
import org.testng.Assert;
import pageObjects.FundTransferPage;
import pageObjects.OpenNewAccountPage;
import utils.BaseClass;

public class FundTransferSteps {

    FundTransferPage fundTransferPage;
    OpenNewAccountPage openNewAccountPage;

    public FundTransferSteps() {
        // Initialize pages with safety check
        if (BaseClass.getDriver() != null) {
            fundTransferPage = new FundTransferPage(BaseClass.getDriver());
            openNewAccountPage = new OpenNewAccountPage(BaseClass.getDriver());
        }
    }
    private boolean isBrowserOpen() {
        try {
            return BaseClass.getDriver() != null &&
                    !BaseClass.getDriver().getWindowHandles().isEmpty();
        } catch (Exception e) {
            return false;
        }
    }
    @When("User ensures at least two accounts exist")
    public void user_ensures_at_least_two_accounts_exist() {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }

        try {
            fundTransferPage.goToTransferFunds();
            fundTransferPage.selectValidFromAndToAccounts();
        } catch (RuntimeException e) {
            if (e.getMessage().contains("At least two accounts are required")) {
                System.out.println("Creating second account...");
                createSecondAccount();
            } else {
                throw e;
            }
        }
    }
    @When("User navigates to Fund Transfer page")
    public void user_navigates_to_fund_transfer_page() {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }
        try {
            // Navigate to homepage first to ensure we're on a stable page
            BaseClass.getDriver().get("https://parabank.parasoft.com/parabank/index.htm");
            Thread.sleep(1000); // Brief wait
            fundTransferPage.goToTransferFunds();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    @When("User selects valid From and To accounts")
    public void user_selects_valid_from_and_to_accounts() {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }
        fundTransferPage.selectValidFromAndToAccounts();
    }
    private void createSecondAccount() {
        try {
            // Navigate to open account page
            BaseClass.getDriver().get("https://parabank.parasoft.com/parabank/openaccount.htm");
            Thread.sleep(1000);
            // Select savings account
            openNewAccountPage.selectSavingAccount();
            // Select existing account if available
            try {
                openNewAccountPage.selectExistingAccount();
            } catch (Exception e) {
                System.out.println("No existing account to select from");
            }
            // Click open account button
            openNewAccountPage.clickOpenNewAccountBtn();
            // Wait for account creation
            Thread.sleep(2000);
            // Navigate back to transfer funds
            BaseClass.getDriver().get("https://parabank.parasoft.com/parabank/transfer.htm");
            Thread.sleep(1000);

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    @When("User enters transfer amount {string}")
    public void user_enters_transfer_amount(String amount) {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }

        fundTransferPage.enterAmount(amount);
    }
    @When("User clicks on Transfer button")
    public void user_clicks_on_transfer_button() {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }
        fundTransferPage.clickTransfer();
        // Wait for transfer to complete
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    @Then("A success message should be displayed")
    public void a_success_message_should_be_displayed() {
        if (!isBrowserOpen()) {
            throw new RuntimeException("Browser window is not open");
        }
        try {
            String message = fundTransferPage.getSuccessMessage();
            Assert.assertTrue(
                    message.contains("Transfer Complete") ||
                            message.contains("success") ||
                            message.contains("Congratulations"),
                    "Transfer success message not displayed. Actual message: " + message);
        } catch (Exception e) {
            // Check current page for any success indicators
            String pageSource = BaseClass.getDriver().getPageSource();
            if (pageSource.contains("Transfer Complete")) {
                System.out.println("Found success message in page source");
                return;
            }
            throw new RuntimeException("Could not find success message: " + e.getMessage());
        }
    }
}