package utils;

import java.io.FileNotFoundException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.*;
import java.util.*;

public class DBUtils {

    // 1. DB connection method
    private static Connection getConnection() throws Exception {
        String url = CommonUtils.readPropertiesFile("db.url");
        String username = CommonUtils.readPropertiesFile("db.username");
        String password = CommonUtils.readPropertiesFile("db.password");

        return DriverManager.getConnection(url, username, password);
    }

    // 2. SQL file loader (FIXED)
    public static String loadSQL(String fileName) throws Exception {
        String path = "sql/" + fileName;
        InputStream is = DBUtils.class.getClassLoader().getResourceAsStream(path);

        if (is == null) {
            throw new FileNotFoundException("SQL file not found: " + path);
        }

        java.util.Scanner scanner = new java.util.Scanner(is, "UTF-8").useDelimiter("\\A");
        return scanner.hasNext() ? scanner.next() : "";
    }


    // 3. executeQuery (RESTORED)
    public static ResultSet executeQuery(String query) {
        try {
            Connection conn = getConnection();
            Statement stmt = conn.createStatement();
            return stmt.executeQuery(query);
        } catch (Exception e) {
            throw new RuntimeException("DB Query Failed: " + e.getMessage());
        }
    }

    // 4. Return a single value
    public static String getSingleValue(String query) throws Exception {
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            if (rs.next()) {
                return rs.getString(1);
            }
            return null;
        }
    }

    // 5. Return a full row as a map
    public static Map<String, String> getRow(String query) throws Exception {
        Map<String, String> row = new HashMap<>();

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            ResultSetMetaData meta = rs.getMetaData();

            if (rs.next()) {
                for (int i = 1; i <= meta.getColumnCount(); i++) {
                    row.put(meta.getColumnName(i), rs.getString(i));
                }
            }
        }
        return row;
    }

    // 6. Return a list of rows
    public static List<Map<String, String>> getList(String query) throws Exception {
        List<Map<String, String>> list = new ArrayList<>();

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            ResultSetMetaData meta = rs.getMetaData();

            while (rs.next()) {
                Map<String, String> row = new HashMap<>();
                for (int i = 1; i <= meta.getColumnCount(); i++) {
                    row.put(meta.getColumnName(i), rs.getString(i));
                }
                list.add(row);
            }
        }
        return list;
    }
}











// This written for the PUBLIC ParaBank server, not for Docker ParaBank instance.

//package utils;
//
//import java.sql.*;
//
//public class DBUtils {
//
//    private static final String URL = "jdbc:mysql://localhost:3306/parabank";
//    private static final String USER = "root";
//    private static final String PASSWORD = "admin123";
//
//    public static Connection getConnection() throws SQLException {
//        return DriverManager.getConnection(URL, USER, PASSWORD);
//    }
//
//    public static ResultSet executeQuery(String query) {
//        try {
//            Connection conn = getConnection();
//            Statement stmt = conn.createStatement();
//            return stmt.executeQuery(query);
//        } catch (Exception e) {
//            throw new RuntimeException("DB Query Failed: " + e.getMessage());
//        }
//    }
//
//    public static int executeUpdate(String query) {
//        try {
//            Connection conn = getConnection();
//            Statement stmt = conn.createStatement();
//            return stmt.executeUpdate(query);
//        } catch (Exception e) {
//            throw new RuntimeException("DB Update Failed: " + e.getMessage());
//        }
//    }
//}
