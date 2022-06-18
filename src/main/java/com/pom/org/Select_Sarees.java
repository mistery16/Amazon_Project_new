package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Sarees {
	
	public WebDriver driver;
	
	@FindBy(xpath = "(//div[@class='a-section a-spacing-base'])[5]")
	private WebElement jute_Silk_Saree;

	
	public Select_Sarees(WebDriver driver) {
        this.driver=driver;

        PageFactory.initElements(driver, this);
	}
	
	public WebElement getJute_Silk_Saree() {
		return jute_Silk_Saree;
	}

}
