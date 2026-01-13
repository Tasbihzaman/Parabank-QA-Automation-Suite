Feature: Bill Payment

  Background:
    Given User is on the ParaBank Home Page
    When User enters valid username
    And User enters valid password
    And User clicks on the login button

  @regression
  Scenario: Verify user can successfully pay a bill
    When User navigates to Bill Pay page
    And User enters valid bill pay details
    And User submits the bill payment
    Then Bill payment should be successful
