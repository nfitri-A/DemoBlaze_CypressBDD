Feature: item checkout to payment process

Scenario: Selected Items
    Given I successfully login
    When I selected some items
    Then The selected item is successfully added to the cart
Scenario: the payment process
    Given I successfully entered the cart page
    When I delete one of the items and continue filling in my personal details for payment
    Then the transaction is successful and displays a message
