package api;

import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.specification.RequestSpecification;
import org.testng.annotations.BeforeMethod;
import utils.CommonUtils;
import utils.ConfigReader;

import java.io.IOException;

import static io.restassured.RestAssured.given;

public class BaseAPI {

    protected RequestSpecification requestSpecification;

    @BeforeMethod
    public void setup() throws IOException {

        // Allure results folder for API
        System.setProperty("allure.results.directory", "reports/api/allure-results");

        // Allure filter
        AllureRestAssured allureFilter = new AllureRestAssured();

        // Read environment (local, docker, qa, prod)
        String env = CommonUtils.readPropertiesFile("env");
        // Build dynamic key: docker.api.url, local.api.url, etc.
        String baseUrl = CommonUtils.readPropertiesFile(env + ".api.url");
        // Set RestAssured base URI
        RestAssured.baseURI = baseUrl;

        // Build reusable request specification
        requestSpecification =
                given()
                        .header("Accept", "application/json")
                        .contentType("application/json")
                        .filter(allureFilter)
                        .filter(new RequestLoggingFilter(LogDetail.ALL))
                        .filter(new ResponseLoggingFilter(LogDetail.ALL));
    }
}











// This is before setup environment like local,docker, QA, prod

//package api;
//
//import io.qameta.allure.restassured.AllureRestAssured;
//import io.restassured.RestAssured;
//import io.restassured.filter.log.LogDetail;
//import io.restassured.filter.log.RequestLoggingFilter;
//import io.restassured.filter.log.ResponseLoggingFilter;
//import io.restassured.specification.RequestSpecification;
//import org.testng.annotations.BeforeMethod;
//
//import static io.restassured.RestAssured.given;
//
//public class BaseAPI {
//
//    protected RequestSpecification requestSpecification;
//
//    @BeforeMethod
//    public void setup() {
//
//        // Redirect Allure results to your custom folder
//        System.setProperty("allure.results.directory", "reports/api/allure-results");
//
//        // Allure filter for API reporting
//        AllureRestAssured allureFilter = new AllureRestAssured();
//
//        // Correct Base URL for Docker ParaBank API
//        RestAssured.baseURI = "http://localhost:9090/parabank/services/bank";
//
//        // Build reusable request specification
//        requestSpecification =
//                given()
//                        .header("Accept", "application/json")
//                        .contentType("application/json")
//                        .filter(allureFilter)
//                        .filter(new RequestLoggingFilter(LogDetail.ALL))
//                        .filter(new ResponseLoggingFilter(LogDetail.ALL));
//    }
//}
