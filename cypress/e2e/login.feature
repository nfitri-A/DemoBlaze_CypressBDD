Feature: :login to website demoblaze

    Scenario: empty username and password 
        When I did not input username and password
        Then failed to log in and displays the message Please fill out Username and Password

    Scenario: empety the password field
        When I just input the username field
        Then I failed to enter the demoblaze website

    Scenario: empety the username field
        When I just input the password field
        Then I can not log in when username empety

    Scenario: invalid login
        When I input username and password incorrectly
        Then failed to log in and displays the message Wrong password

    Scenario: valid login
        When I input username and password correctly
        Then I should successfully entered the product page

    