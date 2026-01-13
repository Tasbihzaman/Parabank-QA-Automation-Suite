package api.tests;

import api.BaseAPI;
import api.clients.AccountClient;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

public class GetAccountsTest extends BaseAPI {

    @Test(description = "Verify accounts are returned or handled gracefully using client")
    public void testGetAccountsByCustomerId() {

        AccountClient client = new AccountClient(requestSpecification);

        Response response = client.getAccountsByCustomerId("12212");
        int status = response.getStatusCode();

        boolean valid =
                status == 200 ||
                        status == 400 ||
                        status == 404;

        Assert.assertTrue(
                valid,
                "Unexpected status code: " + status + " — ParaBank Docker API behavior."
        );

        System.out.println("Status: " + status);
        System.out.println(response.getBody().asString());
    }

    @Test(description = "Verify accounts endpoint directly using BaseAPI requestSpecification")
    public void testGetAccounts() {

        Response response =
                requestSpecification
                        .when()
                        .get("/customers/12212/accounts");

        int status = response.getStatusCode();

        boolean valid =
                status == 200 ||
                        status == 400 ||
                        status == 404;

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
//
//import api.BaseAPI;
//import api.clients.AccountClient;
//import io.restassured.response.Response;
//import org.testng.Assert;
//import org.testng.annotations.Test;
//
//public class GetAccountsTest extends BaseAPI {
//
//    @Test(description = "Verify accounts are returned or handled gracefully using client")
//    public void testGetAccountsByCustomerId() {
//
//        // Pass BaseAPI's requestSpecification into the client
//        AccountClient client = new AccountClient(requestSpecification);
//
//        Response response = client.getAccountsByCustomerId("12212");
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
//                "Unexpected status code: " + status + " — ParaBank public API is unstable."
//        );
//
//        System.out.println("Status: " + status);
//        System.out.println(response.getBody().asString());
//    }
//
//    @Test(description = "Verify accounts endpoint directly using BaseAPI requestSpecification")
//    public void testGetAccounts() {
//
//        Response response =
//                requestSpecification
//                        .when()
//                        .get("/services/bank/customers/12212/accounts");
//
//        int status = response.getStatusCode();
//
//        boolean valid =
//                status == 200 ||
//                        status == 403 ||
//                        status == 400 ||
//                        status == 503;
//
//        Assert.assertTrue(
//                valid,
//                "Unexpected status code: " + status + " — ParaBank public API is unstable."
//        );
//
//        System.out.println("Status: " + status);
//        System.out.println(response.getBody().asString());
//    }
//}
//
