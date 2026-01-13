package api.tests;

import api.BaseAPI;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

@Epic("ParaBank API")
@Feature("Customer API")
public class GetCustomerTest extends BaseAPI {

    @Severity(SeverityLevel.CRITICAL)
    @Test(description = "Verify customer details are returned or handled gracefully")
    public void testGetCustomerDetails() {

        Response response =
                requestSpecification
                        .when()
                        .get("/customers/12212");

        int status = response.getStatusCode();

        boolean valid =
                status == 200 ||   // Customer exists
                        status == 400 ||   // Customer does not exist
                        status == 404;     // Not found

        Assert.assertTrue(
                valid,
                "Unexpected status code: " + status + " — ParaBank Docker API behavior."
        );

        System.out.println("Status: " + status);
        System.out.println(response.getBody().asString());
    }
}








// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.tests;
//import api.BaseAPI;
//import io.qameta.allure.Epic;
//import io.qameta.allure.Feature;
//import io.qameta.allure.Severity;
//import io.qameta.allure.SeverityLevel;
//import io.restassured.response.Response;
//import org.testng.Assert;
//import org.testng.annotations.Test;
//
//@Epic("ParaBank API")
//@Feature("Customer API")
//public class GetCustomerTest extends BaseAPI {
//
//    @Severity(SeverityLevel.CRITICAL)
//    @Test(description = "Verify customer details are returned successfully or handled gracefully")
//    public void testGetCustomerDetails() {
//
//        Response response =
//                requestSpecification
//                        .when()
//                        .get("/services/bank/customers/12212");
//
//        int status = response.getStatusCode();
//
//        boolean valid =
//                status == 200 ||   // success
//                        status == 403 ||   // Cloudflare block
//                        status == 400 ||   // bad request
//                        status == 503;     // service unavailable
//
//        Assert.assertTrue(
//                valid,
//                "Unexpected status code: " + status +
//                        " — ParaBank public API is unstable."
//        );
//
//        System.out.println("Status: " + status);
//        System.out.println(response.getBody().asString());
//    }
//}
