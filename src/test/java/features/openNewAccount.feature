Feature: ParaBank Open New Account and Transaction Validation

  Background:
    Given User is on the ParaBank Home Page
    When User enters valid username
    And User enters valid password
    And User clicks on the login button
    And User has at least one existing account

  @smoke @regression
  Scenario: Verify a new account number is generated after opening a savings account
    When User Click on Open New Account
    And User Select Saving Account
    And User Select Existing Account
    And User Click Open New Account
    Then a new account number should be generated
    And a success message should be displayed