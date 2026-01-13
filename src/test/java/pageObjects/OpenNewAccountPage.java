package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.CommonUtils;

public class OpenNewAccountPage {

    WebDriver driver;

    public OpenNewAccountPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    // ================== Locators ==================
    @FindBy(linkText = "Open New Account")
    WebElement openNewAccountLink;

    @FindBy(id = "type")
    WebElement accountTypeDropdown;

    @FindBy(id = "fromAccountId")
    WebElement fromAccountDropdown;

    @FindBy(xpath = "//input[@value='Open New Account']")
    WebElement openNewAccountButton;

    @FindBy(id = "newAccountId")
    WebElement newAccountId;

    @FindBy(css = "#rightPanel .title, .ng-scope h1.title")
    WebElement successMessage;

    @FindBy(css = ".error")
    WebElement errorMessage;

    // ================== Actions ==================
    // Method to click Open New Account link
    public void clickOpenNewAccountLink() {
        CommonUtils.waitForClickable(openNewAccountLink).click();
    }
    // Method to select savings account
    public void selectSavingAccount() {
        CommonUtils.waitForVisible(accountTypeDropdown);
        Select select = new Select(accountTypeDropdown);
        select.selectByValue("1"); // 1 = Savings account
    }
    // Method to select checking account
    public void selectCheckingAccount() {
        CommonUtils.waitForVisible(accountTypeDropdown);
        Select select = new Select(accountTypeDropdown);
        select.selectByValue("0"); // 0 = Checking account
    }
    // Method to select existing account
    public void selectExistingAccount() {
        CommonUtils.waitForVisible(fromAccountDropdown);
        Select select = new Select(fromAccountDropdown);
        if (select.getOptions().size() > 0) {
            select.selectByIndex(0); // Select first available account
        }
    }
    // Method to click Open New Account button
    public void clickOpenNewAccountBtn() {
        CommonUtils.waitForClickable(openNewAccountButton).click();
    }
    // Method to get new account number
    public String getGeneratedAccountNumber() {
        return CommonUtils.waitForVisible(newAccountId).getText().trim();
    }
    // Method to get success message
    public String getSuccessMessage() {
        try {
            return CommonUtils.waitForVisible(successMessage).getText().trim();
        } catch (Exception e) {
            // Try to get any message from the page
            try {
                if (errorMessage.isDisplayed()) {
                    return errorMessage.getText().trim();
                }
            } catch (Exception ex) {
                return "No message found on page";
            }
            return "No success message found";
        }
    }
    // Method to ensure at least one account exists
    public void ensureAtLeastOneAccountExists() {
        // If no accounts exist, this will be handled by the application
        // Usually ParaBank creates a default account on registration
        System.out.println("Checking for existing accounts...");

        // Navigate to accounts overview to check
        driver.get("https://parabank.parasoft.com/parabank/overview.htm");

        try {
            Thread.sleep(1000);
            // Check if account table exists
            String pageSource = driver.getPageSource();
            if (pageSource.contains("No accounts found") || pageSource.contains("0 accounts")) {
                System.out.println("No existing accounts found. User may need to create first account.");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}





