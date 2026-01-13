package standaloneTests;

import lombok.var;
import org.testng.annotations.DataProvider;

public class LoginDataProvider {

    @DataProvider(name = "loginData")
    public Object[][] loginData() {
        var rows = TestDataUtils.readCsv("testdata/login-data.csv");
        Object[][] data = new Object[rows.size()][2];
        for (int i = 0; i < rows.size(); i++) {
            data[i][0] = rows.get(i)[0]; // username
            data[i][1] = rows.get(i)[1]; // password
        }
        return data;
    }
}
