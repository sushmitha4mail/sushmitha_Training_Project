package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\src\\main\\resources\\feature\\test.feature", 
plugin = { "pretty","html:reports/cucumber-html-report" },
tags = { "@TC13_Project_ProductStore,@TC14_Project_ProductStore,@TC15_Project_ProductStore" },

		glue = { "com.testCases" }, monochrome = true)
public class ProductStore_Contact_Runner {

}
