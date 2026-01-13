package standaloneTests;

import java.io.InputStream;
import java.sql.*;

public class SqlUtils {

    private static final String URL = "jdbc:mysql://localhost:3306/parabank";
    private static final String USER = "root";
    private static final String PASS = "root";

    // Load SQL using Scanner (Java 8 compatible)
    public static String readSql(String path) {
        try {
            InputStream is = SqlUtils.class.getClassLoader().getResourceAsStream(path);
            if (is == null) {
                throw new RuntimeException("SQL file not found: " + path);
            }

            java.util.Scanner scanner = new java.util.Scanner(is, "UTF-8").useDelimiter("\\A");
            return scanner.hasNext() ? scanner.next() : "";

        } catch (Exception e) {
            throw new RuntimeException("Failed to read SQL: " + path, e);
        }
    }

    // Execute SQL and return balance
    public static double getBalance(int accountId) {

        String sql = readSql("sql/get_balance.sql");

        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, accountId);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getDouble("balance");
                }
            }

            throw new RuntimeException("No balance found for accountId: " + accountId);

        } catch (Exception e) {
            throw new RuntimeException("DB query failed", e);
        }
    }
}
