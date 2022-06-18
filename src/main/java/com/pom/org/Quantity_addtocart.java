package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Quantity_addtocart {
	public static  WebDriver driver;
	@FindBy(id = "native_size_name_6")
	private static WebElement Tsirtqty;
	
	@FindBy(xpath ="(//input[@type='submit'])[8]")
	private static WebElement Addtocart;
	
	public Quantity_addtocart(WebDriver driver2) {

		this.driver =driver2;
		PageFactory.initElements(driver, this);
	}

	public static WebElement gettshirtqty() {
		return Tsirtqty;
		
	}
	
	public static WebElement getAddtocart() {
		return Addtocart;
		
	}
	
	
	
	
	
	
	
	
	
	
}
