Feature: ParaBank API Positive End-to-End Flow
  As a QA engineer
  I want to validate the full customer lifecycle using ParaBank APIs
  So that I can ensure all CRUD operations work correctly

  Background:
    Given ParaBank API base URL is configured

  @api @positive
  Scenario: Successful customer lifecycle using ParaBank APIs
    # POST – Create customer
    When User creates a new customer with valid details
    Then API response status should be 201
    And Response time should be less than 2000 ms
    And Customer ID should be returned
    And The returned customer ID should be stored for future requests

    # POST – Login
    When User logs in using valid credentials
    Then API response status should be 200
    And Authentication token should be returned
    And Token should be stored for authenticated requests

    # GET – Retrieve account details
    When User retrieves account details using the stored customer ID
    Then API response status should be 200
    And Response body should contain valid account information
    And Response content type should be "application/json"

    # PUT – Update customer info
    When User updates customer contact information with valid data
    Then API response status should be 200
    And Updated customer details should be reflected in the response

    # DELETE – Delete customer
    When User deletes the customer account using the stored customer ID
    Then API response status should be 200
    And Customer should no longer exist

    # GET – Verify deletion
    When User retrieves the deleted customer by ID
    Then API response status should be 404
    And Error message should indicate "Customer not found"
