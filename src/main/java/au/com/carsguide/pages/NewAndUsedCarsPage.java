package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCarsPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewAndUsedCarsPage.class.getName());

    public NewAndUsedCarsPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/label[1]")
    WebElement AllNewAndUsedCars;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement make;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement Model;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement Locations;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement Pricemax;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement FindMyNextCar;
    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement FindMyNextCar1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='uhf-make']")
    WebElement Make;

    public void clickOnAllNewAndUserCars(){
        clickOnElement(AllNewAndUsedCars);
    }
    public void selectmake(String cars){
       selectByVisibleTextFromDropDown(make,cars);
    }
    public void selectModel(String model){
        selectByVisibleTextFromDropDown(Model,model);
    }
    public void selectLocations(String locations){
        selectByVisibleTextFromDropDown(Locations,locations);
    }
    public void selectPricemax(String pricemax){
        selectByVisibleTextFromDropDown(Pricemax,pricemax);
    }
    public void clickOnFindMyNextCar(){
        clickOnElement(FindMyNextCar);
    }
    public void clickOnFindMyNextCar1(){ clickOnElement(FindMyNextCar1);
    }
    public void clickOnmake(){
        clickOnElement(Make);
    }
}
