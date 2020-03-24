package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\src\\main\\resources\\feature\\test.feature",
    plugin = { "pretty","html:reports/cucumber-html-report" }, 
    tags = {"@TC02_Project_ProductStore,@TC03_Project_ProductStore,@TC04_Project_ProductStore,@TC05_Project_ProductStore" },
    glue = {"com.testCases" }, 
    monochrome = true)
public class ProductStore_SignUp_Runnner {

}
