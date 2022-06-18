package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_shirt {
	
	public static WebDriver driver;
	
	@FindBy(xpath = "(//div[@class='a-section octopus-pc-item-hue-shield octopus-pc-item-image-background-v3'])[2]")
	private WebElement selectshirt;
	
	public Select_shirt(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getSelectshirt() {
		return selectshirt;
	}

}
