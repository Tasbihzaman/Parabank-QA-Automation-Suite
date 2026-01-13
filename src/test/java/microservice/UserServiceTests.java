package microservice;

import io.restassured.RestAssured;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class UserServiceTests {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "http://localhost:3000";
    }

    @Test
    public void testRegisterUser() {
        //user-service stores users in memory so Use a random username
        String randomUser = "md" + System.currentTimeMillis();
        given()
                .contentType("application/json")
                .body("{\"username\":\"" + randomUser + "\", \"password\":\"demo\"}")
                .when()
                .post("/register")
                .then()
                .statusCode(201);

//        given()
//                .contentType("application/json")
//                .body("{\"username\":\"md\",\"password\":\"demo\"}")
//                .when()
//                .post("/register")
//                .then()
//                .statusCode(201)
//                .body("message", equalTo("User registered successfully"));
    }

    @Test
    public void testLoginUser() {
        given()
                .contentType("application/json")
                .body("{\"username\":\"md\",\"password\":\"demo\"}")
                .when()
                .post("/login")
                .then()
                .statusCode(200)
                .body("message", equalTo("Login successful"));
    }

    @Test
    public void testGetUser() {
        given()
                .when()
                .get("/users/md")
                .then()
                .statusCode(200)
                .body("username", equalTo("md"));
    }
}
