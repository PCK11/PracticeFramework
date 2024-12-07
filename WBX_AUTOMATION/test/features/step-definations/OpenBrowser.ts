import { Given ,When ,Then } from "@wdio/cucumber-framework";


Given( "Google.com page should open",async function (){

    //await browser.url("http://www.google.com")
    //await browser.url("https://www.demo.guru99.com/test/newtours/")
     await browser.url("https://demo.guru99.com/test/newtours/register.php")
    

    await browser.pause(3000);
    await browser.maximizeWindow()

    //await $("#APjFqb").setValue("Testing")
    await $("//input[@name='firstName']").setValue("RIYA")
    await $("//input[@name='lastName']").setValue("K")
    await $("//input[@name='phone']").setValue("9567044433")
    
    await $("//input[@name='userName']").setValue("philomena_ck@yahoo.co.in")
    await $("//input[@name='address1']").setValue(" 37")
    
    await $("//input[@name='city']").setValue("Bangalore")
    await $("//input[@name='state']").setValue("Karnakata")
    await $("//input[@name='postalCode']").setValue(" 560012")
    await $("//input[@name='email']").setValue(" riya")
    await $("//input[@name='password']").setValue(" riya")
    await $("//input[@name='confirmPassword']").setValue(" riya")

    await $("//input[@name='submit']").click()




    await browser.pause(2000);
}) 

Given(/^Open ebay Website$/,async function(){

    await browser.url("https://www.ebay.com/")
    
    await browser.maximizeWindow()
        
    })
    
    
    Then(/^mouse should move to Electronics$/,async function(){
    
        let Electronics = await $("(//a[text()='Electronics'])[2]");
        await Electronics.moveTo()
    
        await browser.pause(3000)
    
        
    })
    
    
    Then(/^Click on the link Computers and tablets$/,async function(){
    
        await $("//a[text()='Computers and tablets']").click()
      
        await browser.pause(3000)
        
    })

// Flipkart website hovering
    Given(/^Open flipkart Website$/,async function(){

        await browser.url("https://www.flipkart.com/")
        
        await browser.maximizeWindow()
            
        })
        
        
        Then(/^mouse should move to Fashion$/,async function(){
            let Fashion = await $("//span[text()='Fashion']");
            await Fashion.moveTo()
            await browser.pause(3000)
            
        })
        
        
        Then(/^Click on the link Women Ethnic$/,async function(){
        

            let WomenEthnic = await $("//a[text()='Women Ethnic']")
            await WomenEthnic.moveTo()
            await browser.pause(3000)
            
        })
        

        Then(/^Click on the link Women Sarees$/,async function(){
            let WomenSarees = await $("//a[text()='Women Sarees']")
            await WomenSarees.moveTo()
            await WomenSarees.click()
             await browser.pause(3000)
            
        })


        
    // Checkbox and radio buton. double click, drag and drop
    // Scenario: working on Double click Check Box RADIO BUTTON

        Given(/^open TestautomationPrctice website$/,async function(){

            await browser.url("https://testautomationpractice.blogspot.com/")
            
            await browser.maximizeWindow()
            await browser.pause(3000)
                
            })
        Then(/^click and check the checkbox$/,async function(){
            let checkboxvalue = await $("//input[@type='checkbox']")
            await checkboxvalue.click()
            checkboxvalue = await $("#wednesday")
            await checkboxvalue.click()
            checkboxvalue = await $("#tuesday")
            await checkboxvalue.click()

            await browser.pause(5000)

            let radiomale = await $("#male")
            radiomale.click()
            await browser.pause(3000)
            let radiofemale = await $("#female")
            radiofemale.click()
            await browser.pause(3000)


        })
        
        Then(/^click on copy text button$/,async function(){

        let copytextbutton = await $("//button[text()='Copy Text']")
        await copytextbutton.doubleClick()
            await browser.pause(3000)
        })

        Then(/^Select country from dropdown$/,async function(){

            let Countryname = await $("#country");
        
            await Countryname.selectByAttribute('value','germany');
        
            await browser.pause(2000)
        
        
            await Countryname.selectByVisibleText('Japan');
        
            await browser.pause(4000);
        
        
            await Countryname.selectByIndex(2)
        
            await browser.pause(4000);

            let countrycount = await $$("#country option")
            console.log(countrycount.length)
        
         })
        


        //DRAG AND DROP
        Then(/^Drop into the target position$/, async function (){
            let SP = await $("#draggable")
            let target = await $("#droppable")

            await SP.dragAndDrop(target)
            await browser.pause(3000)

        })

    //Drag and drop practise
   // Scenario: Drag and Drop function in Demo Guru site
    Given(/^Open demoguru site$/,async function(){

        await browser.url("https://demo.guru99.com/test/drag_drop.html")
        await browser.pause(3000)
        
        await browser.maximizeWindow()
            
        })

        Then(/^Drag and Drop data$/, async function (){
            let SP = await $("//a[text()=' BANK ']")
            let target = await $("#bank")
            await SP.dragAndDrop(target)

             SP = await $("//a[text()=' 5000 ']")
             target = await $("#amt7")
            await SP.dragAndDrop(target)

            SP = await $("//a[text()=' SALES ']")
            target = await $("#loan")
            await SP.dragAndDrop(target)

            SP = await $("//a[text()=' 5000']")
            target = await $("#amt8")
            await SP.dragAndDrop(target)

            await  browser.pause(3000)

            

        })

        //Scenario: Practise on Amazonsite

        Given(/^open amazon website$/,async function(){

            await browser.url("/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice")
            await browser.pause(3000)
            await browser.maximizeWindow()

            console.log(`Prime button locator : ${process.env.PrimeButton}`)

           let ActualResult = await $(process.env.PrimeButton).isDisplayed();

           expect(ActualResult).toEqual(true)
           await $(process.env.PrimeButton).click()
           
           
            await browser.pause(3000)
            
        
             })

        Then (/^Select menu$/,async function(){
                let Department = await $("#searchDropdownBox");

                await Department.selectByAttribute('value','search-alias=electronics-intl-ship')

                await browser.pause(3000)


                Department.selectByVisibleText('Baby');

                await browser.pause(4000);


              await Department.selectByIndex(5)
              await browser.pause(4000);
              let Departmentcount = await $$("#searchDropdownBox option")

              console.log("department count is : "+Departmentcount.length)

                 for(let i = 0 ; i<Departmentcount.length ;i++)
                    {
                        console.log(Departmentcount[i].getText())
                    }
}  )


// Scenario Outline: select multiple country from the dropdown|  
        Then (/^Select Country with (.*)$/,async function(CountryName){

            let name = await $("#country")
            await name.selectByVisibleText(CountryName);
            await browser.pause(4000)

        })   


        Then (/^Upload file from the FileUpload Folder$/,async function ()
         {
            await $("#singleFileInput").addValue(`${process.cwd()}/Data/FileUpload/demo.txt`)
            
            await browser.pause(6000);

            await $("//button[text()='Upload Single File']").click()

            await browser.pause(6000);

         })
    

            