package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement BuySell;
    @CacheLookup
    @FindBy(linkText = "Search Cars")
    WebElement SearchCars;
    @CacheLookup
    @FindBy(linkText = "Used")
    WebElement Used;




    public void clickOnBuySell(){
        mouseHoverToElement(BuySell);
        log.info("click On BuySell : " + BuySell.toString());
    }
    public void clickOnSearchCars(){
        clickOnElement(SearchCars);
        log.info("click On SearchCars : " + SearchCars.toString());
    }
    public void clickOnUsed(){
        clickOnElement(Used);
        log.info("click On Used : " + Used.toString());
    }

}
