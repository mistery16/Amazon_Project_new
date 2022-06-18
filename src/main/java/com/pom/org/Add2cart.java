package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Add2cart {
	
	public static WebDriver driver;
	
//	@FindBy(xpath = "(//select[@class='a-native-dropdown a-declarative'])[1]")
//	private WebElement selectSize;
	
	
	@FindBy(xpath = "//input[@id='add-to-cart-button']")
	private WebElement Add2cart;

	public Add2cart(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

//
//	public WebElement getSelectSize() {
//		return selectSize;
//	}


	public WebElement getAdd2cart() {
		return Add2cart;
	}


}
