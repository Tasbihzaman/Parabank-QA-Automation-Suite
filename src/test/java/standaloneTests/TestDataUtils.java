package standaloneTests;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class TestDataUtils {

    public static List<String[]> readCsv(String filePath) {
        List<String[]> data = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(
                        TestDataUtils.class.getClassLoader().getResourceAsStream(filePath)))) {

            String line;
            boolean isHeader = true;
            while ((line = br.readLine()) != null) {
                if (isHeader) {
                    isHeader = false;
                    continue;
                }
                data.add(line.split(","));
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to read CSV: " + filePath, e);
        }
        return data;
    }
}
