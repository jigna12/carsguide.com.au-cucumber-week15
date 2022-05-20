$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As User I want to Search car in carsguide website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  @smoke"
    },
    {
      "line": 5,
      "value": "#  Scenario Outline: : I Should Search the buy car with model"
    },
    {
      "line": 6,
      "value": "#    Given I am on homepage"
    },
    {
      "line": 7,
      "value": "#    When I mouse hover on “buy+sell” tab"
    },
    {
      "line": 8,
      "value": "#    And I click ‘Search Cars’ link"
    },
    {
      "line": 9,
      "value": "#    Then I navigate to ‘new and used car search’ page"
    },
    {
      "line": 10,
      "value": "#    And I select make \"\u003cmake\u003e\""
    },
    {
      "line": 11,
      "value": "#    And I select model \"\u003cmodel\u003e\""
    },
    {
      "line": 12,
      "value": "#    And I select location \"\u003clocation\u003e\""
    },
    {
      "line": 13,
      "value": "#    And I select price \"\u003cprice\u003e\""
    },
    {
      "line": 14,
      "value": "#    And I click on Find My Next Car tab"
    },
    {
      "line": 15,
      "value": "#    Then I should see the make in results"
    },
    {
      "line": 16,
      "value": "#    Examples:"
    },
    {
      "line": 17,
      "value": "#      | make    | model   | location     | price   |"
    },
    {
      "line": 18,
      "value": "#      | Audi    | A1      | NT - North   | $80,000 |"
    },
    {
      "line": 19,
      "value": "##      | Jeep    | Compass | Any Location | $40,000 |"
    },
    {
      "line": 20,
      "value": "##      | Honda   | CR-V    | NT - All     | $90,000 |"
    },
    {
      "line": 21,
      "value": "##      | Kia     | Niro    | SA - Murray  | $60,000 |"
    },
    {
      "line": 22,
      "value": "##      | Renault | Clio    | Any Location | $80,000 |"
    },
    {
      "line": 23,
      "value": "##      | Suzuki  | Swift   | NT - All     | $70,000 |"
    },
    {
      "line": 24,
      "value": "##"
    }
  ],
  "line": 26,
  "name": "I should Search the used car with model",
  "description": "",
  "id": "search-functionality;i-should-search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@sanity"
    },
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;i-should-search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality;i-should-search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "Any Location",
        "$30,000"
      ],
      "line": 39,
      "id": "search-functionality;i-should-search-the-used-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7250158100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should Search the used car with model",
  "description": "",
  "id": "search-functionality;i-should-search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    },
    {
      "line": 25,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55632500,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 167361700,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 167255200,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2090706000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 118941900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 50954800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 92399600,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 7518178400,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iShouldSeeTheMakeInResults()"
});
formatter.result({
  "duration": 402553400,
  "status": "passed"
});
formatter.after({
  "duration": 917042300,
  "status": "passed"
});
});