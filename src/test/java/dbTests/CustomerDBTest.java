package dbTests;

import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;
import utils.DBUtils;

import java.sql.ResultSet;

public class CustomerDBTest {

    @Test
    public void validateCustomerNameInDB() {

        try {
            String query = DBUtils.loadSQL("customer_details.sql");

            ResultSet rs = DBUtils.executeQuery(query);

            if (!rs.next()) {
                Assert.fail("Customer not found in DB");
            }

            Assert.assertEquals(rs.getString("firstName"), "John");

        } catch (Exception e) {
            throw new SkipException("Skipping: DB offline → " + e.getMessage());
        }
    }
}















// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package dbTests;
//
//import org.testng.Assert;
//import org.testng.SkipException;
//import org.testng.annotations.Test;
//import utils.DBUtils;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class CustomerDBTest {
//
//    @Test
//    public void validateCustomerNameInDB() {
//
//        String expectedName = "John Doe";
//
//        try {
//            ResultSet rs = DBUtils.executeQuery(
//                    "SELECT name FROM customers WHERE name = '" + expectedName + "'"
//            );
//
//            if (!rs.next()) {
//                Assert.fail("Customer not found in DB");
//            }
//
//            String dbName = rs.getString("name");
//            Assert.assertEquals(dbName, expectedName);
//
//        } catch (SQLException e) {
//            throw new SkipException("Skipping because DB is offline (SQL error): " + e.getMessage());
//        } catch (RuntimeException e) {
//            throw new SkipException("Skipping because DB is offline: " + e.getMessage());
//        }
//    }
//}
//
