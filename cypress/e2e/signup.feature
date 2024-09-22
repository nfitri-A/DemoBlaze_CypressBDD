Feature: Sign Up Before login in the demoblaze website

Scenario: did not input username and password
    When I dont not input username and password
    Then I can not create an account when the username and password is blank
Scenario: I did not input the username
    When I just input the password
    Then I can not create an account when the username is blank

Scenario: I did not input password
    When I just input the username
    Then I can not create an account when the password is blank

Scenario: I input username and password
    When I input username and password
    Then I successfully created a demoblaze account