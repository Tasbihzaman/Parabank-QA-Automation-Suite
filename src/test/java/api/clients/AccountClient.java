package api.clients;

import io.restassured.specification.RequestSpecification;
import io.restassured.response.Response;

public class AccountClient {

    private final RequestSpecification spec;

    public AccountClient(RequestSpecification spec) {
        this.spec = spec;
    }

    public Response getAccountsByCustomerId(String customerId) {
        return spec
                .when()
                .get("/customers/" + customerId + "/accounts");
    }
}












// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.clients;
//
//import io.restassured.response.Response;
//import io.restassured.specification.RequestSpecification;
//
//public class AccountClient {
//
//    private final RequestSpecification spec;
//
//    // Constructor receives the BaseAPI requestSpecification
//    public AccountClient(RequestSpecification spec) {
//        this.spec = spec;
//    }
//
//    public Response getAccountsByCustomerId(String customerId) {
//        return spec
//                .when()
//                .get("/services/bank/customers/" + customerId + "/accounts");
//    }
//
//    public Response getAccountDetails(String accountId) {
//        return spec
//                .when()
//                .get("/services/bank/accounts/" + accountId);
//    }
//}
