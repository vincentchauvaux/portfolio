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
                tabps[i].classList.remove("sele")
                
              }
              event.target.classList.add("sele")
          
              for(let i=0; i < contenus.length; i++){
                contenus[i].classList.add ("hidden")
              }
              contenus[i].classList.remove ("hidden")
          
            })
        }




  //carouselle

  $(".owl-carousel").owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    
    autoplayTimeout:2000,
    autoplayHoverPause:true  
  });



// lightbox

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'maxWidth' : true
})
});

