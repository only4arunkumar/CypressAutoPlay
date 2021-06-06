describe("Check the Autoplay video are played without any action",()=>{

    it("Should load the url with autoplay flag and start playing the video",()=>{

        cy.visit("https://tester-test.vudoo.io/watch/61209085922?autoplay=1")
                
        //Ideally the video should autoplay and the  test should be able to find the  element with text click
        //As the video is not autoplaying  the test is uanble to find the elemnent to be clicked
        cy.enter("#vudoo-iframe-61209085922").then((iFrameBody)=>{
          iFrameBody().findByText(/click/i).should("exist")
        })
        
    })
})
