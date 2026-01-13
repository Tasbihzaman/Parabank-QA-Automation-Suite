package standaloneTests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.testng.Assert;
import org.testng.annotations.Test;

public class GetBalanceTest {

    /*But ParaBank cannot execute SQL
ParaBank is not a database engine.
It does not accept SQL over HTTP.
It does not have an endpoint that understands SQL.
    * */
   // @Test
    public void validateBalance() {

        int accountId = 12345;

        double apiBalance =
                RestAssured.given()
                        .baseUri("http://localhost:8080")
                        .get("/parabank/services/bank/balance/" + accountId)
                        .then()
                        .statusCode(200)
                        .extract()
                        .as(Double.class);

        double dbBalance = SqlUtils.getBalance(accountId);

        Assert.assertEquals(apiBalance, dbBalance);
    }

    // Simple Example That Shows the Principle (PASSING TEST)
    @Test
    public void cannotUseSqlAgainstParabank() {

        String sql = "SELECT balance FROM accounts WHERE id = 12345";

        RestAssured.given()
                .baseUri("http://localhost:8080")
                .contentType(ContentType.TEXT)
                .body(sql)
                .post("/parabank/services/bank/getBalance")
                .then()
                .statusCode(403);   // or 404, or 405 – but NOT 200
    }

}
