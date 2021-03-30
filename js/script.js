$(document).ready(function() {

// selecteurs

    var tabs = document.getElementsByClassName("tab")
    var pages = document.getElementsByClassName("page")
    var tabps = document.getElementsByClassName("tabp")
    var tabcs = document.getElementsByClassName("tabc")
    var demos = document.getElementsByClassName("demo")
    var demo1 = document.getElementById("demo1")
    var demo2 = document.getElementById("demo2")
    var portfolio =  document.getElementById("portfolio")
    var contenus = document.getElementsByClassName("contenu")

    var versapropo = document.getElementsByClassName("versapropo")
    var versportfolio = document.getElementsByClassName("versportfolio")

// evenements

  //scroll



  //onglets

    // naviagtion

      for (let i=0; i < tabs.length; i++){

        tabs[i].addEventListener("click", function(event){
          event.preventDefault()
        
          for(let i=0; i < tabs.length; i++){
            
            tabs[i].classList.remove("active")
          }
          
          event.target.classList.add("active")

          if (event.currentTarget == portfolio){
            event.currentTarget.classList.add("active")

          }
      
          for(let i=0; i < pages.length; i++){
            pages[i].classList.add ("hidden")
          }
          pages[i].classList.remove ("hidden")
      
        })
      }

        //portfolio acceuil demo

          
            demo1.addEventListener("click", function(event){
              demo1.classList.add ("hidden")
              demo2.classList.remove ("hidden")
            })

            portfolio.addEventListener("click", function(event){
              demo1.classList.remove ("hidden")
              demo2.classList.add ("hidden")
            }) 
    

        //portfolio tabcs contenu

            for (let i=0; i < tabcs.length; i++){

              tabcs[i].addEventListener("click", function(event){
                event.preventDefault()

                for(let i=0; i < tabcs.length; i++){
                  tabcs[i].classList.remove("active")
                }
                event.target.classList.add("active")
                
        

                  
                for(let i=0; i < contenus.length; i++){
                  contenus[i].classList.add ("hidden")
                }
                contenus[i].classList.remove ("hidden")
              })
            
            } 
          //portfolio tabps contenu

          for (let i=0; i < tabps.length; i++){

            tabps[i].addEventListener("click", function(event){
              event.preventDefault()
            
              for(let i=0; i < tabps.length; i++){
                if (event.target.classList == "sele" ){
                  demo1.classList.remove ("hidden")
                  demo2.classList.add ("hidden")
                }
                tabps[i].classList.remove("sele")
                               
              }
              event.target.classList.add("sele")
              
              
          
              for(let i=0; i < contenus.length; i++){
                contenus[i].classList.add ("hidden")
                
              }
              contenus[i].classList.remove ("hidden")
          
            })
          }

          //retour

          // portfolio.addEventListener("click", function(event){
          //   event.preventDefault()
          
          //   for(let i=0; i < tabps.length; i++){
          //     tabps[i].classList.remove("sele")
              
          //   }
          //   event.target.classList.add("sele")
        
          //   for(let i=0; i < contenus.length; i++){
          //     contenus[i].classList.add ("hidden")
          //   }
          //   contenus[i].classList.remove ("hidden")
        
          // })


          // vers portfolio / a propos 

          // versportfolio.addEventListener("click", function(event){
          //   demo1.classList.add ("hidden")
          //   demo2.classList.remove ("hidden")
          // })

          // versapropo.addEventListener("click", function(event){
          //   demo1.classList.add ("hidden")
          //   demo2.classList.remove ("hidden")
          // })



// lightbox

  lightbox.option({
    'resizeDuration': 200,
    'alwaysShowNavOnTouchDevices' : true,
    'fitImagesInViewport' : true
  })



  //carouselle

  $(".owl-carousel").owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        640:{
            items:2,
            nav:false,
            dots:false
        },
        860:{
          items:3,
          nav:false,
          dots:false
      },
        1080:{
            items:4,
            nav:false,
            dots:false
        },
        1920:{
            items:5,
            nav:false,
            loop:false
        }
    }
  })




// fade photo 

  $("#btnFadeIn").click(function(){
    $("#photo").stop().fadeIn(4000);
  })

});