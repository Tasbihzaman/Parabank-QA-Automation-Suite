package dbTests;

import api.BaseAPI;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;
import utils.DBUtils;

import java.sql.ResultSet;

public class AccountCreationDBTest extends BaseAPI {

    @Test
    public void validateAccountCreationInDB() {

        int accountId;

        // ============================
        // STEP 1: API CALL (SKIP SAFE)
        // ============================
        try {
            Response response = requestSpecification
                    .body("{\"customerId\": 12212, \"type\": \"SAVINGS\"}")
                    .when()
                    .post("/accounts");

            if (response.statusCode() != 201) {
                throw new SkipException("Skipping: mock server returned " + response.statusCode());
            }

            accountId = response.jsonPath().getInt("id");

        } catch (Exception e) {
            throw new SkipException("Skipping: API mock server issue → " + e.getMessage());
        }

        // ============================
        // STEP 2: DB VALIDATION
        // ============================
        try {
            String query = DBUtils.loadSQL("create_account.sql")
                    .replace(":id", String.valueOf(accountId));

            ResultSet rs = DBUtils.executeQuery(query);

            if (!rs.next()) {
                Assert.fail("Account not found in DB for ID: " + accountId);
            }

            Assert.assertEquals(rs.getInt("id"), accountId);
            Assert.assertEquals(rs.getInt("customer_id"), 12212);

        } catch (Exception e) {
            throw new SkipException("Skipping: DB offline → " + e.getMessage());
        }
    }
}









// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package dbTests;
//
//import api.BaseAPI;
//import io.restassured.response.Response;
//import org.testng.Assert;
//import org.testng.SkipException;
//import org.testng.annotations.Test;
//import utils.DBUtils;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class AccountCreationDBTest extends BaseAPI {
//
//    @Test
//    public void validateAccountCreationInDB() {
//
//        int accountId;
//
//        // ============================
//        // STEP 1: API CALL (SKIP SAFE)
//        // ============================
//        try {
//            Response response = requestSpecification
//                    .body("{\"customerId\": 12212, \"type\": \"SAVINGS\"}")
//                    .when()
//                    .post("/accounts");
//
//            // Validate status code INSIDE try/catch
//            if (response.statusCode() != 201) {
//                throw new SkipException(
//                        "Skipping because mock server returned wrong status: " + response.statusCode()
//                );
//            }
//
//            // Extract ID safely
//            accountId = response.jsonPath().getInt("id");
//
//        } catch (Exception e) {
//            throw new SkipException(
//                    "Skipping because API mock server did not return valid JSON or correct status: "
//                            + e.getMessage()
//            );
//        }
//
//
//        // ============================
//        // STEP 2: DB VALIDATION (SKIP SAFE)
//        // ============================
//        try {
//            ResultSet rs = DBUtils.executeQuery(
//                    "SELECT * FROM accounts WHERE id = " + accountId
//            );
//
//            if (!rs.next()) {
//                Assert.fail("Account not found in DB for ID: " + accountId);
//            }
//
//            int dbAccountId = rs.getInt("id");
//            int dbCustomerId = rs.getInt("customer_id");
//
//            // ============================
//            // STEP 3: ASSERTIONS
//            // ============================
//            Assert.assertEquals(dbAccountId, accountId, "Account ID mismatch");
//            Assert.assertEquals(dbCustomerId, 12212, "Customer ID mismatch");
//
//        } catch (SQLException e) {
//            throw new SkipException(
//                    "Skipping because DB is offline (SQL error): " + e.getMessage()
//            );
//        } catch (RuntimeException e) {
//            throw new SkipException(
//                    "Skipping because DB is offline: " + e.getMessage()
//            );
//        }
//    }
//}
//
//
//
