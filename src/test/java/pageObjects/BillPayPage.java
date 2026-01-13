package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class BillPayPage {

    WebDriver driver;
    WebDriverWait wait;

    public BillPayPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }
    // Navigation
    private By billPayLink = By.linkText("Bill Pay");

    // Form fields
    private By payeeName = By.name("payee.name");
    private By address = By.name("payee.address.street");
    private By city = By.name("payee.address.city");
    private By state = By.name("payee.address.state");
    private By zipCode = By.name("payee.address.zipCode");
    private By phone = By.name("payee.phoneNumber");
    private By account = By.name("payee.accountNumber");
    private By verifyAccount = By.name("verifyAccount");
    private By amount = By.name("amount");
    private By sendPaymentBtn = By.xpath("//input[@value='Send Payment']");

    // SUCCESS MESSAGE (THIS IS THE KEY FIX)
    private By successMessage =
            By.xpath("//h1[contains(text(),'Bill Payment Complete')]");

    public void goToBillPay() {
        driver.findElement(billPayLink).click();
    }
    public void enterBillPayDetails() {
        driver.findElement(payeeName).sendKeys("Electric Company");
        driver.findElement(address).sendKeys("123 Main St");
        driver.findElement(city).sendKeys("New York");
        driver.findElement(state).sendKeys("NY");
        driver.findElement(zipCode).sendKeys("10001");
        driver.findElement(phone).sendKeys("1234567890");
        driver.findElement(account).sendKeys("12345");
        driver.findElement(verifyAccount).sendKeys("12345");
        driver.findElement(amount).sendKeys("100");
    }
    public void submitPayment() {
        driver.findElement(sendPaymentBtn).click();
    }
    // CORRECT VERIFICATION
    public boolean verifyBillPaymentSuccess() {
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(successMessage));
            return driver.findElement(successMessage).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
}
