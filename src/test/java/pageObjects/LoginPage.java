package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;
import utils.CommonUtils;
import java.io.IOException;
import static org.testng.Assert.assertTrue;

public class LoginPage {

    private WebDriver driver;
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    // ================== Locators ==================
    @FindBy(name = "username")
    WebElement userNameField;

    @FindBy(name = "password")
    WebElement passwordField;

    @FindBy(xpath = "//*[@id='loginPanel']/form/div[3]/input")
    WebElement loginButton;

    @FindBy(xpath = "//*[@id='showOverview']/h1")
    WebElement confirmationField;

    // ================== Actions ==================
    public void validUserName() throws IOException {
        String userName = CommonUtils.readPropertiesFile("username");
        CommonUtils.waitForVisible(userNameField).sendKeys(userName);
    }
    public void validPassword() throws IOException {
        String password = CommonUtils.readPropertiesFile("password");
        CommonUtils.waitForVisible(passwordField).sendKeys(password);
    }
    public void clickLogin() {

        CommonUtils.waitForClickable(loginButton).click();
    }
    public void confirmationPage() {
        String welcomeText = CommonUtils.waitForVisible(confirmationField).getText();
        assertTrue(
                welcomeText.contains("Accounts Overview"), "Accounts Overview page not displayed!");
    }
    public void clearUsername() {

        CommonUtils.waitForVisible(userNameField).clear();
    }
    public void clearPassword() {

        CommonUtils.waitForVisible(passwordField).clear();
    }
    public void loginFormEmpty() {
        String userNameValue = userNameField.getAttribute("value");
        String passwordValue = passwordField.getAttribute("value");
        assertTrue(
                userNameValue.isEmpty() && passwordValue.isEmpty(), "Login form is not empty!");
    }
    public boolean isLoginButtonDisplayed() {

        return CommonUtils.waitForVisible(loginButton).isDisplayed();
    }

}
