package api.clients;

import io.restassured.specification.RequestSpecification;
import io.restassured.response.Response;

public class CustomerClient {

    private final RequestSpecification spec;

    public CustomerClient(RequestSpecification spec) {
        this.spec = spec;
    }

    public Response getCustomer(String customerId) {
        return spec
                .when()
                .get("/customers/" + customerId);
    }
}










// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.clients;
//
//import io.restassured.response.Response;
//import io.restassured.specification.RequestSpecification;
//
//public class CustomerClient {
//
//    private final RequestSpecification spec;
//
//    public CustomerClient(RequestSpecification spec) {
//        this.spec = spec;
//    }
//
//    public Response getCustomerById(String customerId) {
//        return spec
//                .when()
//                .get("/services/bank/customers/" + customerId);
//    }
//
//    public Response deleteCustomer(String customerId) {
//        return spec
//                .when()
//                .delete("/services/bank/customers/" + customerId);
//    }
//}
