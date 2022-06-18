$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Dress Booking In Amazon",
  "description": "",
  "id": "dress-booking-in-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user click the fashion button",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-fashion-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click the fashion button it navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_launch_the_application()"
});
formatter.result({
  "duration": 8002413700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_the_fashion_button_it_navigate_to_next_page()"
});
formatter.result({
  "duration": 17230578200,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "user click the shirt",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user move the curser  to men and click the shirt then it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_move_the_curser_to_men_and_click_the_shirt_then_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 12566189400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user select checked shirt",
  "description": "",
  "id": "dress-booking-in-amazon;user-select-checked-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user click the dennis shirt it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_click_the_dennis_shirt_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 21311581300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user click Add To Cart",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user select the size",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user to click the Add To Cart Button it navigate to next page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefination.user_to_click_the_Add_To_Cart_Button_it_navigate_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "user click the fashion2 button",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-fashion2-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user click the fashion2ss button it navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "stepdefination.user_click_the_fashion_ss_button_it_navigate_to_next_page(int)"
});
formatter.result({
  "duration": 7699028900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user click the saree",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-saree",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user move the curser  to women and click the saree button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_move_the_curser_to_women_and_click_the_saree_button_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 9389820600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user select checked saree",
  "description": "",
  "id": "dress-booking-in-amazon;user-select-checked-saree",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user click the jute silk saree it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_click_the_jute_silk_saree_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 3732647600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user click Add To Cart",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user select wine color",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user to click the Add To Cart Button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_select_wine_color()"
});
formatter.result({
  "duration": 44276040800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//span[@class\u003d\u0027s-color-swatch-inner-circle-border\u0027])[15]\"}\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IG74U7P\u0027, ip: \u0027192.168.29.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Kannan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:61897}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ed9ba5be2e02cabb6a0f9dad2f1e7521\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027s-color-swatch-inner-circle-border\u0027])[15]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.Amazon_baseclass.Base_Class.clickonElement(Base_Class.java:68)\r\n\tat com.amazon.stepdefination.stepdefination.user_select_wine_color(stepdefination.java:74)\r\n\tat ✽.Given user select wine color(amazon.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefination.user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "user click the fashion3 button",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-fashion3-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user click the fashion3 button it navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "stepdefination.user_click_the_fashion_button_it_navigate_to_next_page(int)"
});
formatter.result({
  "duration": 45807800,
  "error_message": "java.lang.NullPointerException\r\n\tat com.Amazon_baseclass.Base_Class.clickonElement(Base_Class.java:68)\r\n\tat com.amazon.stepdefination.stepdefination.user_click_the_fashion_button_it_navigate_to_next_page(stepdefination.java:85)\r\n\tat ✽.Then user click the fashion3 button it navigate to next page(amazon.feature:32)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "user click the t-shirt",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-t-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user move the curser  to kids and click the t-shirt button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_move_the_curser_to_kids_and_click_the_t_shirt_button_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 4517200,
  "error_message": "java.lang.IllegalArgumentException: Must provide a location for a move action.\r\n\tat org.openqa.selenium.interactions.MoveMouseAction.\u003cinit\u003e(MoveMouseAction.java:37)\r\n\tat org.openqa.selenium.interactions.Actions.moveToElement(Actions.java:386)\r\n\tat com.Amazon_baseclass.Base_Class.actions(Base_Class.java:156)\r\n\tat com.amazon.stepdefination.stepdefination.user_move_the_curser_to_kids_and_click_the_t_shirt_button_it_will_navigate_to_next_page(stepdefination.java:90)\r\n\tat ✽.Then user move the curser  to kids and click the t-shirt button it will navigate to next page(amazon.feature:35)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "user select checked t-shirt",
  "description": "",
  "id": "dress-booking-in-amazon;user-select-checked-t-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "user click the marvel it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_click_the_marvel_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 691900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.Amazon_baseclass.Base_Class.clickonElement(Base_Class.java:68)\r\n\tat com.amazon.stepdefination.stepdefination.user_click_the_marvel_it_will_navigate_to_next_page(stepdefination.java:95)\r\n\tat ✽.Then user click the marvel it will navigate to next page(amazon.feature:38)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 40,
  "name": "user click Add To Cart",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user select size",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user select qty 4 button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user to click the Add To Cart Button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_select_size()"
});
formatter.result({
  "duration": 2646900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.Amazon_baseclass.Base_Class.clickonElement(Base_Class.java:68)\r\n\tat com.amazon.stepdefination.stepdefination.user_select_size(stepdefination.java:100)\r\n\tat ✽.Given user select size(amazon.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "stepdefination.user_select_qty_button(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "user click the Go To Cart",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-go-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "user delete all item in cart",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user click the home button  it will navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_delete_all_item_in_cart()"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_the_home_button_it_will_navigate_to_home_page()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
});