package api.clients;

import io.restassured.specification.RequestSpecification;
import io.restassured.response.Response;

public class TransactionClient {

    private final RequestSpecification spec;

    public TransactionClient(RequestSpecification spec) {
        this.spec = spec;
    }

    public Response transferFunds(String fromAccountId, String toAccountId, String amount) {
        return spec
                .queryParam("fromAccountId", fromAccountId)
                .queryParam("toAccountId", toAccountId)
                .queryParam("amount", amount)
                .when()
                .post("/transfer");
    }
}












// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package api.clients;
//
//import io.restassured.response.Response;
//import io.restassured.specification.RequestSpecification;
//
//public class TransactionClient {
//
//    private final RequestSpecification spec;
//
//    public TransactionClient(RequestSpecification spec) {
//        this.spec = spec;
//    }
//
//    public Response transferFunds(String fromAccountId, String toAccountId, String amount) {
//        return spec
//                .queryParam("fromAccountId", fromAccountId)
//                .queryParam("toAccountId", toAccountId)
//                .queryParam("amount", amount)
//                .when()
//                .post("/services/bank/transfer");
//    }
//}
//
