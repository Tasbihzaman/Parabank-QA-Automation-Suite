package microservice;

import io.restassured.RestAssured;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class ProductServiceTests {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "http://localhost:4000";
    }

    @Test
    public void testCreateProduct() {
        given()
                .contentType("application/json")
                .body("{\"name\":\"Laptop\",\"price\":999}")
                .when()
                .post("/products")
                .then()
                .statusCode(201)
                .body("message", equalTo("Product created"))
                .body("product.name", equalTo("Laptop"));
    }

    @Test
    public void testGetAllProducts() {
        given()
                .when()
                .get("/products")
                .then()
                .statusCode(200)
                .body("size()", greaterThan(0));
    }

    @Test
    public void testGetProductById() {
        given()
                .when()
                .get("/products/1")
                .then()
                .statusCode(200)
                .body("id", equalTo(1));
    }
}
