package com.testCases;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;

import com.pages.Login_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_TestCase extends WrapperClass {
	Login_Page login_Page;

	@Given("^the user launch the chrome application$")
	public void beforeEach() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}
	///////// valid
	///////// login//////////////////////////////////////////////////////////////////////////////////////////////////

	@When("^the user open the ProductStore Home page$")
	public void login() {
		login_Page.click_LogIn();
	}

	@Then("^the user login using (.+) and (.+)$")
	public void enter_Details(String username, String password) throws IOException, InterruptedException {

		login_Page.userid(username);

		login_Page.pass(password);

	}

	@Then("^click on the login button user nagivate to the next page$")
	public void click_LogIn() throws InterruptedException {
		login_Page.log_in();
		Thread.sleep(2000);
		login_Page.verify_Account("Welcome triveni reddy");
		Thread.sleep(2000);
		click_logOut();
		quit();

	}

//////// Invalid login////////////////////////////////////////////////////////////////////////////////////////////////

	@Given("^if user launch the chrome application and$")
	public void beforeEach1() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user open the ProductStore Home page and$")
	public void login1() {
		login_Page.click_LogIn();
	}

	@Then("^if user login using  Invalid (.+) and (.+) and$")
	public void enter_Details1(String username, String password) throws IOException, InterruptedException {

		login_Page.userid(username);

		login_Page.pass(password);

	}

	@Then("^click on the login button, user  should not nagivate to the next page$")
	public void click_LogIn1() throws InterruptedException {
		login_Page.log_in();
		Thread.sleep(2000);
		login_Page.invalid_verify("User does not exist.");
		quit();

	}

	///// login without
	///// details//////////////////////////////////////////////////////////////////////////////////////////////

	@Given("^when user launches the chrome application and$")
	public void beforeEach2() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^when user opens the ProductStore Home page and$")
	public void login2() throws InterruptedException {
		login_Page.click_LogIn();
		Thread.sleep(1000);
		login_Page.log_in();
		Thread.sleep(1000);
	}

	@Then("^by clicking on the login button user  should not nagivate to the next page$")
	public void click_LogIn2() throws InterruptedException {

		Thread.sleep(2000);
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();

	}

}
