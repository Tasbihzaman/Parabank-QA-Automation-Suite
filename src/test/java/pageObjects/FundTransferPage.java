package pageObjects;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.CommonUtils;
import java.util.List;

public class FundTransferPage {

    WebDriver driver;

    public FundTransferPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    // ================== Locators ==================
    @FindBy(linkText = "Transfer Funds")
    WebElement transferFundsLink;

    @FindBy(id = "fromAccountId")
    WebElement fromAccountDropdown;

    @FindBy(id = "toAccountId")
    WebElement toAccountDropdown;

    @FindBy(id = "amount")
    WebElement amountInput;

    @FindBy(xpath = "//input[@value='Transfer']")
    WebElement transferButton;

    @FindBy(css = "#rightPanel p, .title, h1.title")
    WebElement successMessage;

    // ================== Actions ==================
    public void goToTransferFunds() {
        try {
            CommonUtils.waitForClickable(transferFundsLink, 10).click();
        } catch (Exception e) {
            // Try direct navigation if link click fails
            driver.get("https://parabank.parasoft.com/parabank/transfer.htm");
        }
    }
    public void selectValidFromAndToAccounts() {
        try {
            // Wait for page to load
            Thread.sleep(1000);

            Select fromSelect = new Select(CommonUtils.waitForVisible(fromAccountDropdown, 10));
            Select toSelect = new Select(CommonUtils.waitForVisible(toAccountDropdown, 10));

            List<WebElement> fromOptions = fromSelect.getOptions();
            List<WebElement> toOptions = toSelect.getOptions();

            System.out.println("Debug - From accounts: " + fromOptions.size());
            System.out.println("Debug - To accounts: " + toOptions.size());

            if (fromOptions.size() < 2 || toOptions.size() < 2) {
                throw new RuntimeException("At least two accounts are required for fund transfer");
            }
            // Select first from account
            fromSelect.selectByIndex(0);
            // Try to select a different to account
            boolean selectedDifferent = false;
            for (int i = 0; i < toOptions.size(); i++) {
                String fromValue = fromOptions.get(0).getAttribute("value");
                String toValue = toOptions.get(i).getAttribute("value");
                if (!fromValue.equals(toValue)) {
                    toSelect.selectByIndex(i);
                    selectedDifferent = true;
                    break;
                }
            }
            // If all accounts are same, still select second one
            if (!selectedDifferent && toOptions.size() > 1) {
                toSelect.selectByIndex(1);
            }

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    public void enterAmount(String amount) {
        WebElement amountField = CommonUtils.waitForVisible(amountInput, 10);
        amountField.clear();
        amountField.sendKeys(amount);
    }
    public void clickTransfer() {
        CommonUtils.waitForClickable(transferButton, 10).click();
    }
    public String getSuccessMessage() {
        try {
            return CommonUtils.waitForVisible(successMessage, 10).getText();
        } catch (Exception e) {
            // Try to find any success message on the page
            try {
                List<WebElement> messages = driver.findElements(By.cssSelector("p, .title, h1"));
                for (WebElement msg : messages) {
                    if (msg.getText().contains("Transfer") || msg.getText().contains("success")) {
                        return msg.getText();
                    }
                }
            } catch (Exception ex) {
                // Ignore and throw original error
            }
            throw new RuntimeException("No success message found: " + e.getMessage());
        }
    }
}