Feature: Search functionality
  As User I want to Search car in carsguide website

  @smoke
  Scenario Outline: : I Should Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make in results
    Examples:
      | make    | model   | location     | price   |
      | Audi    | A1      | NT - North   | $80,000 |
      | Jeep    | Compass | Any Location | $40,000 |
      | Honda   | CR-V    | NT - All     | $90,000 |
      | Kia     | Niro    | SA - Murray  | $60,000 |
      | Renault | Clio    | Any Location | $80,000 |
      | Suzuki  | Swift   | NT - All     | $70,000 |
#
  @sanity @regression
  Scenario Outline: I should Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Used’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make in results
    Examples:
      | make          | model           | location        | price   |
      | Ford          | Focus           | Any Location    | $30,000 |
      | LandRover     | Discovery Sport | Any Location    | $50,000 |
      | Mitsubishi    | Magna           | QLD - All       | $40,000 |
      | Mercedes-Benz | E220            | Any Location    | $50,000 |
      | Hyundai       | i30             | NSW - Newcastle | $30,000 |
      | Toyota        | Prius           | TAS - All       | $40,000 |