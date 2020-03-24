
package com.testCases;


import com.pages.Login_Page;
import com.pages.OrderItem_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderItem_TestCase extends WrapperClass {

	OrderItem_Page orderItem_Page;
///// adding items and verifying the purchase/////////////////////////////////////////////////////////////////////////////////
	@Given("^if the user launch the website and login with (.+) , (.+) and$")
	public void beforeEach(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		orderItem_Page = new OrderItem_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		Thread.sleep(2000);
		login_Page.pass(password);
		login_Page.log_in();
		Thread.sleep(2000);
	}

	@When("^the user clicks on cart and  count no of items and$")
	public void checkItem() throws InterruptedException {
		
		click_Cart();
		orderItem_Page.count_Item();
	}
	@Then("^click on place order and verify the purchase$")
		 public void order() throws InterruptedException {
		orderItem_Page.purchase("venkateswara reddy", "India", "Chennai", "123456789", "jan", "2025");
		orderItem_Page.verify("venkateswara reddy");
		click_logOut();
        quit();
	}
	
//////trying to purchase without  any items//////////////////////////////////////////////////////////////////////////////////////
	
	@Given("^if the user launches the website and clicks login with (.+) , (.+)and$")
	public void beforeEach1(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		orderItem_Page = new OrderItem_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		Thread.sleep(2000);
		login_Page.pass(password);
		login_Page.log_in();
		Thread.sleep(2000);
	}

	@When("^the user click on cart and  count number of items and$")
	public void checkItem1() throws InterruptedException {
		
		click_Cart();
		orderItem_Page.count_Item();
	}
	@Then("^click on place order and then  verify the purchase$")
		 public void order1() throws InterruptedException {
		orderItem_Page.purchase("venkateswara reddy", "India", "Chennai", "123456789", "jan", "2025");
		orderItem_Page.verify("0 USD");
		click_logOut();
		quit();

	}
	
	
		 
}
		 

	