Feature: contack and about us feature

Scenario: I sent a message via the contact menu
    When I input an email address and type a message
    Then the message is successfully sent and displays a notification Thanks for the message!!

Scenario: I want to know about demoblaze on the about us menu
    When I click the about us menu
    Then I can see the demoblaze introduction video