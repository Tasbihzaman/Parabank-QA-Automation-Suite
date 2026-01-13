Feature: ParaBank Online Banking Login
  As a existing ParaBank customer
  I want to login my account successfully

  Background:
    Given User is on the ParaBank Home Page

  Scenario: TC-101 User should be able to login with valid credentials
    When User enters valid username
    And User enters valid password
    And User clicks on the login button
    Then User should be successfully logged in
    And User should see the Accounts Overview page



#  Scenario: TC-102 User should not be able to login with empty username and password
#    When User leaves username field empty
#    And User leaves password field empty
#    And User clicks on the login button
#    Then User should remain on the login page
#    And The login form should remain empty
#
#  Scenario: TC-103 User should not be able to login with empty username
#    When User leaves username field empty
#    And User enters valid password
#    And User clicks on the login button
#    Then User should remain on the login page
#
#  Scenario: TC-104 User should not be able to login with empty password
#    When User enters valid username
#    And User leaves password field empty
#    And User clicks on the login button
#    Then User should remain on the login page


#
#  “For ParaBank, invalid credentials do not always trigger an error message.
#  So I validated login failure by confirming the user remains on the login page and cannot access Accounts Overview.”