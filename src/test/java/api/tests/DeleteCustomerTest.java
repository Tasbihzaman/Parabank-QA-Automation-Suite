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
public class DeleteCustomerTest extends BaseAPI {

    @Severity(SeverityLevel.CRITICAL)
    @Test(description = "Verify DELETE customer returns correct negative behavior on Docker ParaBank")
    public void testDeleteCustomer() {

        Response response =
                requestSpecification
                        .when()
                        .delete("/customers/12212");

        int status = response.getStatusCode();

        boolean valid =
                status == 404 ||   // Customer does not exist
                        status == 405 ||   // DELETE not supported
                        status == 400;     // Bad request

        Assert.assertTrue(
                valid,
                "Unexpected status code: " + status + " — ParaBank Docker API does not support DELETE customer."
        );

        System.out.println("Status: " + status);
        System.out.println(response.getBody().asString());
    }
}












// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.tests;
//
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
//public class DeleteCustomerTest extends BaseAPI {
//
//    @Severity(SeverityLevel.CRITICAL)
//    @Test(description = "Verify delete customer returns correct negative behavior on public ParaBank")
//    public void testDeleteCustomer() {
//
//        Response response =
//                requestSpecification
//                        .when()
//                        .delete("/services/bank/customers/12212");
//
//        int status = response.getStatusCode();
//
//        boolean valid =
//                status == 404 ||
//                        status == 405 ||
//                        status == 400 ||
//                        status == 301;
//
//        Assert.assertTrue(
//                valid,
//                "Unexpected status code: " + status +
//                        " — ParaBank public API does not support DELETE customer."
//        );
//
//        System.out.println("Status: " + status);
//        System.out.println(response.getBody().asString());
//    }
//}


