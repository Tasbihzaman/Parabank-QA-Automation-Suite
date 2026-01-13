package api.tests;

import api.BaseAPI;
import api.clients.TransactionClient;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TransferFundsTest extends BaseAPI {

    @Test(description = "Verify transfer funds returns correct negative behavior on Docker ParaBank")
    public void testTransferFunds() {

        TransactionClient client = new TransactionClient(requestSpecification);

        Response response = client.transferFunds("12345", "67890", "100");

        int status = response.getStatusCode();

        boolean valid =
                status == 400 ||   // Bad request
                        status == 404 ||   // Not found
                        status == 405;     // Method not allowed

        Assert.assertTrue(
                valid,
                "Unexpected status code: " + status + " — ParaBank Docker API does not support fund transfers."
        );

        System.out.println("Status: " + status);
        System.out.println(response.getBody().asString());
    }
}















// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.tests;
//
//import api.BaseAPI;
//import api.clients.TransactionClient;
//import io.qameta.allure.Epic;
//import io.qameta.allure.Feature;
//import io.qameta.allure.Severity;
//import io.qameta.allure.SeverityLevel;
//import io.restassured.response.Response;
//import org.testng.Assert;
//import org.testng.annotations.Test;
//
//public class TransferFundsTest extends BaseAPI {
//
//    @Test(description = "Verify transfer funds returns correct negative behavior on public ParaBank")
//    public void testTransferFunds() {
//
//        TransactionClient client = new TransactionClient(requestSpecification);
//
//        Response response = client.transferFunds("12345", "67890", "100");
//
//        int status = response.getStatusCode();
//
//        boolean valid =
//                status == 301 ||
//                        status == 400 ||
//                        status == 403 ||
//                        status == 404 ||
//                        status == 405 ||
//                        status == 503;
//
//        Assert.assertTrue(
//                valid,
//                "Unexpected status code: " + status +
//                        " — ParaBank public API does not support fund transfers and is unstable."
//        );
//
//        System.out.println("Status: " + status);
//        System.out.println(response.getBody().asString());
//    }
//}
