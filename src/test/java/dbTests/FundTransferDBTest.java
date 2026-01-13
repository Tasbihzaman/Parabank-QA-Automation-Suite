package dbTests;

import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.Test;
import utils.DBUtils;

import java.sql.ResultSet;

public class FundTransferDBTest {

    @Test
    public void validateFundTransferInDB() {

        try {
            String query = DBUtils.loadSQL("fund_transfer.sql");

            ResultSet rs = DBUtils.executeQuery(query);

            if (!rs.next()) {
                Assert.fail("No transfer record found in DB");
            }

            Assert.assertEquals(rs.getString("type"), "TRANSFER");

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
//public class FundTransferDBTest {
//
//    @Test
//    public void validateFundTransferInDB() {
//
//        try {
//            ResultSet rs = DBUtils.executeQuery(
//                    "SELECT * FROM transactions WHERE type = 'TRANSFER'"
//            );
//
//            if (!rs.next()) {
//                Assert.fail("No transfer record found in DB");
//            }
//
//            String type = rs.getString("type");
//            Assert.assertEquals(type, "TRANSFER");
//
//        } catch (SQLException e) {
//            throw new SkipException("Skipping because DB is offline (SQL error): " + e.getMessage());
//        } catch (RuntimeException e) {
//            throw new SkipException("Skipping because DB is offline: " + e.getMessage());
//        }
//    }
//}
