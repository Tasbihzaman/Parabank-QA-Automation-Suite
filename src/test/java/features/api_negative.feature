Feature: ParaBank API Negative Scenarios and Validations
  As a QA engineer
  I want to validate error handling and invalid operations
  So that the API behaves correctly under negative conditions

  Background:
    Given ParaBank API base URL is configured

  @api @negative
  Scenario: API should reject invalid requests and unauthorized access
    # POST – Invalid payload
    When User creates a customer with missing required fields
    Then API response status should be 400
    And Error message should indicate validation failure
    And Response content type should be "application/json"

    # POST – Invalid login
    When User logs in with invalid credentials
    Then API response status should be 401
    And Error message should indicate authentication failure

    # GET – Unauthorized access
    When User requests account details without authentication
    Then API response status should be 401
    And Access should be denied
    And Response should not contain sensitive data

    # PUT – Invalid update
    When User updates customer information with invalid data
    Then API response status should be 400
    And Error message should be returned
    And Response time should be less than 2000 ms

    # DELETE – Non-existing resource
    When User deletes a non-existing customer ID
    Then API response status should be 404
    And Error message should indicate resource not found
    And Response body should not be empty
