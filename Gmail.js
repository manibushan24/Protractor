describe('Gmail Event Details', function(){

	describe('Gmail page', function(){
		it('should navigate to gmail page', function(){
			browser.ignoreSynchronization = true;
			browser.manage().timeouts().pageLoadTimeout(3000000);
			browser.get('https://www.google.com/gmail/');
	
			var currentUrl = browser.driver.getCurrentUrl();

      		var userNameField = browser.driver.findElement(By.css('input#identifierId'));
      		browser.driver.sleep(5000).then(function() {
		   	    console.log('waited 5 seconds 1');
			});
			
			userNameField.sendKeys('manibushan.qa@gmail.com');

			browser.driver.sleep(5000).then(function() {
				console.log('waited 5 seconds 2');
		 	});

			var nextBtn1  = browser.driver.findElement(By.css('div#identifierNext > content > span'));

			nextBtn1.click();

			browser.driver.sleep(5000).then(function() {
				console.log('waited 5 seconds 3 ');
		 	});

			var userPassField = browser.driver.findElement(By.css('div#password > div > div > div > input'));
			
			browser.driver.sleep(5000).then(function() {
		        console.log(' waited 5 seconds 4');
		    });

			userPassField.sendKeys('Qualityassurance');

			browser.driver.sleep(5000).then(function() {
				console.log('waited 5 seconds 5');
			 });
			
			var nextBtn2  = browser.driver.findElement(By.css('div#passwordNext > content > span'));

			nextBtn2.click();

			browser.driver.sleep(10000).then(function() {
			      console.log('waited 5 seconds 6');
			 });

			var composeBtn  = browser.driver.findElement(By.xpath("//div/div[text()='COMPOSE']"));

			composeBtn.click();
	  
			browser.driver.sleep(10000).then(function() {
				console.log('waited 5 seconds 7');
		   });

		   
		   browser.driver.findElement(By.xpath(".//textarea[contains(@aria-label, 'To')]"));
		   browser.driver.findElement(By.xpath(".//textarea[contains(@aria-label, 'To')]")).click();
		   browser.driver.sleep(1000).then(function() {
				console.log('waited 5 seconds 8');
		   });

		   browser.driver.findElement(By.xpath(".//textarea[contains(@aria-label, 'To')]")).sendKeys("manibushan@gmail.com");

		   browser.driver.sleep(10000).then(function() {
				console.log('waited 5 seconds 9');
		   });
		   
		   browser.driver.findElement(By.css(".Am.Al.editable.LW-avf"));
		   
		   browser.driver.findElement(By.css(".Am.Al.editable.LW-avf")).click();
		   browser.driver.sleep(1000).then(function() {
				console.log('waited 5 seconds 8');
		   });
		   
		   browser.driver.findElement(By.css(".Am.Al.editable.LW-avf")).sendKeys("This is an e-mail");


		   browser.driver.sleep(50000).then(function() {
				console.log('waited 5 seconds 9');
		   });
	
		})

	})

});
