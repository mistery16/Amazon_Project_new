package com.amazon.stepdefination;

import java.util.Set;

import org.openqa.selenium.WebDriver;

import com.Amazon_baseclass.Base_Class;
import com.amazon.properties.File_Reader_Manager;
import com.amazon_runner_class.org.Runner_project;
import com.page_object_manager.org.Object_Manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefination extends Base_Class {
	public static WebDriver driver = Runner_project.driver;
	public static Object_Manager pom = new Object_Manager(driver); 
	   
	
	    @Given("^user launch the application$")
	    public void user_launch_the_application() throws Throwable {
	    	   getUrl("https://www.amazon.in/");
	    }
	   

	    @Then("^user click the fashion button it navigate to next page$")
	    public void user_click_the_fashion_button_it_navigate_to_next_page() throws Throwable {
	    	clickonElement(pom.getClk_fashion().getFashion());
	    
	    }

	    @Then("^user move the curser  to men and click the shirt then it will navigate to next page$")
	    public void user_move_the_curser_to_men_and_click_the_shirt_then_it_will_navigate_to_next_page() throws Throwable {
	       actions("moveelement",pom.getClk_shirt().getMen(), pom.getClk_shirt().getShirt());
	    }

	    @Then("^user click the dennis shirt it will navigate to next page$")
	    public void user_click_the_dennis_shirt_it_will_navigate_to_next_page() throws Throwable {
	      clickonElement(pom.getSlc_shirt().getSelectshirt());
	    }

//	    @Given("^user select the size$")
//	    public void user_select_the_size() throws Throwable {
//	       dropdown(pom.getAd2C().getSelectSize(),"byindex", "2");
//	    }

	    @Then("^user to click the Add To Cart Button it navigate to next page$")
	    public void user_to_click_the_Add_To_Cart_Button_it_navigate_to_next_page() throws Throwable {
	    clickonElement(pom.getAd2C().getAdd2cart());
	    }
	    @Then("^user click the fashion(\\d+)ss button it navigate to next page$")
	    public void user_click_the_fashion_ss_button_it_navigate_to_next_page(int arg1) throws Throwable {
	      clickonElement(pom.getFb().getFashion());
	    }

	    @Then("^user move the curser  to women and click the saree button it will navigate to next page$")
	    public void user_move_the_curser_to_women_and_click_the_saree_button_it_will_navigate_to_next_page() throws Throwable {
	     actions("moveelement", pom.getSaree().getWomen(), pom.getSaree().getSarees());
	    }

	    @Then("^user click the jute silk saree it will navigate to next page$")
	    public void user_click_the_jute_silk_saree_it_will_navigate_to_next_page() throws Throwable {
	       clickonElement(pom.getSs().getJute_Silk_Saree());
	       String parrentwindow = driver.getWindowHandle();
			Set<String> multiwindow = driver.getWindowHandles();
			for (String firstwindow : multiwindow) {
				driver.switchTo().window(firstwindow);
			}	       
	    }

	    @Given("^user select wine color$")
	    public void user_select_wine_color() throws Throwable {
	      clickonElement(pom.getAc().getWinecolour());
	    }

	    @Then("^user to click the Add To Cart Button it will navigate to next page$")
	    public void user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page() throws Throwable {
	       clickonElement(pom.getAc().getAdd_To_Cart());
	    }

	    
	    @Then("^user click the fashion(\\d+) button it navigate to next page$")
	    public void user_click_the_fashion_button_it_navigate_to_next_page(int arg1) throws Throwable {
	      clickonElement(pom.getfc3().getfashion());
	    }
	    
	    @Then("^user move the curser  to kids and click the t-shirt button it will navigate to next page$")
	    public void user_move_the_curser_to_kids_and_click_the_t_shirt_button_it_will_navigate_to_next_page() throws Throwable {
	        actions("moveelement", pom.getkids().getKids(), pom.getkids().gettshirt());
	    }

	    @Then("^user click the marvel it will navigate to next page$")
	    public void user_click_the_marvel_it_will_navigate_to_next_page() throws Throwable {
	      clickonElement(pom.getkids().getKids());
	    }

	    @Given("^user select size$")
	    public void user_select_size() throws Throwable {
	   clickonElement(pom.gettshirt().getmarveltshirt());
	    }

	    @Given("^user select qty (\\d+) button$")
	    public void user_select_qty_button(int arg1) throws Throwable {
	  dropdown(pom.getaddct3().gettshirtqty(), "byindex", "5");
	    }

	    @Given("^user delete all item in cart$")
	    public void user_delete_all_item_in_cart() throws Throwable {
	      
	    }

	    @Then("^user click the home button  it will navigate to home page$")
	    public void user_click_the_home_button_it_will_navigate_to_home_page() throws Throwable {
	  
	    }


	    
	    
}
