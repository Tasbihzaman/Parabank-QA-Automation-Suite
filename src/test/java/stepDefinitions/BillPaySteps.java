package stepDefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;
import pageObjects.BillPayPage;
import utils.BaseClass;

public class BillPaySteps {

    BillPayPage billPayPage;

    public BillPaySteps() {
        billPayPage = new BillPayPage(BaseClass.getDriver());
    }

    @When("User navigates to Bill Pay page")
    public void user_navigates_to_bill_pay_page() {
        billPayPage.goToBillPay();
    }

    @When("User enters valid bill pay details")
    public void user_enters_valid_bill_pay_details() {
        billPayPage.enterBillPayDetails();
    }

    @When("User submits the bill payment")
    public void user_submits_the_bill_payment() {
        billPayPage.submitPayment();
    }

    @Then("Bill payment should be successful")
    public void bill_payment_should_be_successful() {
        Assert.assertTrue(
                billPayPage.verifyBillPaymentSuccess(),
                "Bill Payment was not successful"
        );
    }
}
