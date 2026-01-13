Feature: Fund Transfer

  Background:
    Given User is on the ParaBank Home Page
    When User enters valid username
    And User enters valid password
    And User clicks on the login button
    And User ensures at least two accounts exist

  @smoke @regression
  Scenario: Verify user can successfully transfer funds between accounts
    When User navigates to Fund Transfer page
    And User selects valid From and To accounts
    And User enters transfer amount "500"
    And User clicks on Transfer button
    Then A success message should be displayed