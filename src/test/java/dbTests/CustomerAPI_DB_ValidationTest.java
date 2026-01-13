
package dbTests;

import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;
import utils.DBUtils;

import java.sql.ResultSet;

import static io.restassured.RestAssured.given;

public class CustomerAPI_DB_ValidationTest {

    @Test
    public void validateAPIResponseWithDB() {

        String apiName;

        // ============================
        // API CALL
        // ============================
        try {
            Response response = given()
                    .contentType("application/json")
                    .get("/customers/12212")
                    .then()
                    .extract().response();

            apiName = response.jsonPath().getString("firstName");

        } catch (Exception e) {
            throw new SkipException("Skipping: API mock server issue → " + e.getMessage());
        }

        // ============================
        // DB VALIDATION
        // ============================
        try {
            String query = DBUtils.loadSQL("customer_details.sql");

            ResultSet rs = DBUtils.executeQuery(query);

            if (!rs.next()) {
                Assert.fail("Customer not found in DB");
            }

            String dbName = rs.getString("firstName");

            Assert.assertEquals(apiName, dbName, "API and DB values mismatch");

        } catch (Exception e) {
            throw new SkipException("Skipping: DB offline → " + e.getMessage());
        }
    }
}











// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package dbTests;
//
//import io.restassured.response.Response;
//import org.testng.Assert;
//import org.testng.SkipException;
//import org.testng.annotations.Test;
//import utils.DBUtils;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//import static io.restassured.RestAssured.given;
//
//public class CustomerAPI_DB_ValidationTest {
//
//    @Test
//    public void validateAPIResponseWithDB() {
//
//        String apiName;
//
//        // API call with skip protection
//        try {
//            Response response = given()
//                    .when()
//                    .contentType("application/json")
//                    .get("/customers/12212")
//                    .then()
//                    .extract().response();
//
//            apiName = response.jsonPath().getString("name");
//
//        } catch (Exception e) {
//            throw new SkipException("Skipping because API mock server is not returning valid JSON: " + e.getMessage());
//        }
//
//        // DB call with skip protection
//        try {
//            ResultSet rs = DBUtils.executeQuery(
//                    "SELECT name FROM customers WHERE id = 12212;"
//            );
//
//            if (!rs.next()) {
//                Assert.fail("Customer not found in DB");
//            }
//
//            String dbName = rs.getString("name");
//
//            Assert.assertEquals(apiName, dbName, "API and DB values do not match");
//
//        } catch (SQLException e) {
//            throw new SkipException("Skipping because DB is offline (SQL error): " + e.getMessage());
//        } catch (RuntimeException e) {
//            throw new SkipException("Skipping because DB is offline: " + e.getMessage());
//        }
//    }
//}
//
//
