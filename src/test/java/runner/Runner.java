package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = "src/test/java/features/login.feature",
       // features = "src/test/java/features",
        glue = {"stepDefinitions"},
        plugin = {"pretty", "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
        monochrome = true,
        publish = true
)
public class Runner extends AbstractTestNGCucumberTests {

    @Override
    @DataProvider(parallel = false)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}

//
//package runner;
//
//import io.cucumber.junit.Cucumber;
//import io.cucumber.junit.CucumberOptions;
//import io.cucumber.testng.AbstractTestNGCucumberTests;
//import org.junit.runner.RunWith;
//import org.testng.annotations.DataProvider;
//
//
////@RunWith(Cucumber.class)
//@CucumberOptions(
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features",
//        features = "src/test/java/features/login.feature",
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features/login.feature",
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features/register.feature",
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features/billPay.feature",
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features/fundTransfer.feature",
//        //features = "/Users/mdaktaruzzaman/Desktop/Parabank-QA-Automation-Suite/src/test/java/features/openNewAccount.feature",
//        glue = {"stepDefinitions"},
//        plugin = {"pretty", "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
//        monochrome = true,
//        publish = true
//)
//public class Runner extends AbstractTestNGCucumberTests {
//    @Override
//    @DataProvider(parallel = false)
//    public Object[][] scenarios(){
//        return super.scenarios();
//    }
//}
