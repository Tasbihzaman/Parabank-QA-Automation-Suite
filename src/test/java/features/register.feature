Feature: ParaBank New Client Registration

  Background:
    Given User is on the ParaBank Home Page

  Scenario: Verify successful client registration with valid details
    When I open the client registration form
    Then User enters valid registration details
    And User submits the registration form
    Then Client should be registered successfully

  Scenario Outline: Verify registration fails with missing required fields
    When User enters registration details with missing "<field>"
    And User submits the registration form
    Then An error message should be displayed

    Examples:
      | field     |
      | firstName |
      | lastName  |
      | username  |
      | password  |
