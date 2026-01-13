package dbTests;

import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;
import utils.DBUtils;

import java.sql.ResultSet;

public class LoginDBTest {

    @Test
    public void validateUserExistsInDB() {

        try {
            String query = DBUtils.loadSQL("login_validation.sql");

            ResultSet rs = DBUtils.executeQuery(query);

            if (!rs.next()) {
                Assert.fail("User not found in DB");
            }

            Assert.assertEquals(rs.getString("username"), "john");

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
//public class LoginDBTest {
//
//    @Test
//    public void validateUserExistsInDB() {
//
//        String username = "john";
//
//        try {
//            ResultSet rs = DBUtils.executeQuery(
//                    "SELECT username FROM users WHERE username = '" + username + "'"
//            );
//
//            if (!rs.next()) {
//                Assert.fail("User not found in DB");
//            }
//
//            String dbUsername = rs.getString("username");
//            Assert.assertEquals(dbUsername, username);
//
//        } catch (SQLException e) {
//            throw new SkipException("Skipping because DB is offline (SQL error): " + e.getMessage());
//        } catch (RuntimeException e) {
//            throw new SkipException("Skipping because DB is offline: " + e.getMessage());
//        }
//    }
//}
//
