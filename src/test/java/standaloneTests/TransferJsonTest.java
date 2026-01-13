
package standaloneTests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.json.JSONObject;
import org.testng.annotations.Test;

public class TransferJsonTest {

    @Test
    public void jsonWillNeverReturn200() {

        String jsonBody = "{ \"fromAccountId\": \"12345\", \"toAccountId\": \"67890\", \"amount\": 100 }";

        RestAssured.given()
                .baseUri("http://localhost:8080")
                .contentType(ContentType.JSON)
                .body(jsonBody)
                .post("/parabank/services/bank/transfer")
                .then()
                .statusCode(403); // or 404, depending on your server
    }


    //@Test
    //  Doesnot accept JSON
    public void transferUsingJson() {

        // Load or read JSON file
        String json = JsonUtils.readJson("testdata/transfer-request.json");
        JSONObject obj = new JSONObject(json);

        String from = obj.getString("fromAccountId");
        String to = obj.getString("toAccountId");
        String amount = String.valueOf(obj.getInt("amount"));

        System.out.println("Loaded JSON:");
        System.out.println(json);

        //Parabank only accepts URL‑encoded form parameters, not JSON bodies.
        // Parabank is an old-school SOAP/XML demo app.
        RestAssured.given()
                .baseUri("http://localhost:8080")
                .contentType(ContentType.URLENC)
                .formParam("fromAccountId", from)
                .formParam("toAccountId", to)
                .formParam("amount", amount)
                .post("/parabank/services/bank/transfer")
                .then()
                .statusCode(200);
    }
}
