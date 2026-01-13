package standaloneTests;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class JsonUtils {

    public static String readJson(String path) {
        try {
            InputStream is = JsonUtils.class.getClassLoader().getResourceAsStream(path);
            if (is == null) {
                throw new RuntimeException("File not found: " + path);
            }

            // Java 8 compatible way to read entire file
            java.util.Scanner scanner = new java.util.Scanner(is, "UTF-8").useDelimiter("\\A");
            return scanner.hasNext() ? scanner.next() : "";

        } catch (Exception e) {
            throw new RuntimeException("Failed to read JSON: " + path, e);
        }
    }

}
