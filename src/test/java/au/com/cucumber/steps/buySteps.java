package au.com.cucumber.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class buySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().clickOnBuySell();
    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCars();
    }

    @And("^I click ‘Used’ link$")
    public void iClickUsedLink() { new HomePage().clickOnUsed();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String cars) {
        new NewAndUsedCarsPage().selectmake(cars);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new NewAndUsedCarsPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String locations) {
        new NewAndUsedCarsPage().selectLocations(locations);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new NewAndUsedCarsPage().selectPricemax(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarsPage().clickOnFindMyNextCar();
    }

    @Then("^I should see the make in results$")
    public void iShouldSeeTheMakeInResults() {
        new NewAndUsedCarsPage().clickOnmake();
    }



}
