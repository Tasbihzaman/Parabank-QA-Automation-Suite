package db;

import org.testng.annotations.BeforeClass;

public class BaseDB {

    @BeforeClass
    public void setup() {
        System.out.println("DB test executed for Extent + Allure validation");
    }
}
