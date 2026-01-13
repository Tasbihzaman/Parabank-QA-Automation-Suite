package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.CommonUtils;
import static org.testng.Assert.assertTrue;

public class RegisterPage {

    WebDriver driver;

    public RegisterPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    // ================== Locators ==================
    @FindBy(linkText ="Register")
    WebElement registerLink;
    // ===== Fields =====
    @FindBy(id = "customer.firstName")
    WebElement firstName;

    @FindBy(id = "customer.lastName")
    WebElement lastName;

    @FindBy(id = "customer.address.street")
    WebElement address;

    @FindBy(id = "customer.address.city")
    WebElement city;

    @FindBy(id = "customer.address.state")
    WebElement state;

    @FindBy(id = "customer.address.zipCode")
    WebElement zip;

    @FindBy(id = "customer.phoneNumber")
    WebElement phone;

    @FindBy(id = "customer.ssn")
    WebElement ssn;

    @FindBy(id = "customer.username")
    WebElement username;

    @FindBy(id = "customer.password")
    WebElement password;

    @FindBy(id = "repeatedPassword")
    WebElement confirmPassword;

    @FindBy(xpath = "//input[@value='Register']")
    WebElement registerButton;

    // ===== Messages =====
    @FindBy(xpath = "//h1[contains(text(),'Welcome')]")
    WebElement successMessage;

    @FindBy(xpath = "//span[@class='error']")
    WebElement errorMessage;

    // ============= Actions =============
    public void openRegistrationForm() {
       CommonUtils.smartClick(registerLink);
    }
    public void enterValidDetails() {
        firstName.sendKeys("Tasbih");
        lastName.sendKeys("Zaman");
        address.sendKeys("123 Main St");
        city.sendKeys("Dallas");
        state.sendKeys("TX");
        zip.sendKeys("75001");
        phone.sendKeys("1234567890");
        ssn.sendKeys("123-45-6789");
        username.sendKeys("john" + System.currentTimeMillis());
        password.sendKeys("Password123");
        confirmPassword.sendKeys("Password123");
    }
    public void enterDetailsWithMissingField(String field) {
        enterValidDetails();
        switch (field) {
            case "firstName":
                firstName.clear();
                break;
            case "lastName":
                lastName.clear();
                break;
            case "username":
                username.clear();
                break;
            case "password":
                password.clear();
                confirmPassword.clear();
                break;
        }
    }
    public void submitForm() {

        registerButton.click();
    }
    public void verifyRegistrationSuccess() {
        assertTrue(successMessage.isDisplayed(), "Registration success message not displayed");
    }
    public void verifyErrorMessageDisplayed() {
        assertTrue(errorMessage.isDisplayed(), "Error message not displayed");
    }
}

