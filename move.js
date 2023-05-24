AFRAME.registerComponent("scuba-movement",{
    schema:{
      speedOfRotation:{type:"number", defualt:0},
      speedOfAscent:{type:"number", defualt:0}
    },
  init: function() {
    window.addEventListeners("keydown", (e)=>{
  
  
      this.data.speedOfRotation=this.el.getAttribute("rotation")
      this.data.speedOfAscent=this.el.getAttribute("position")
      var scubaRotation=this.data.speedOfRotation
      var scubaPosition=this.data.speedOfAscent
      if (e.key==="ArrowRight"){
    
     scubaRotation.x+=0.5
     this.el.setAttribute("rotation",scubaRotation)     
   
      }
      if (e.key==="ArrowLeft"){
    
     scubaRotation.x-=0.5
     this.el.setAttribute("rotation",scubaRotation)     
  
      }
  
  
      if (e.key==="ArrowUp"){
            scubaRotation.z+=0.5
     this.el.setAttribute("rotation",scubaRotation)     
  
          scubaPosition.y+=0.01
          this.el.setAttribute("position",scubaPosition)     

      }
  
  
      if (e.key==="ArrowDown"){
   
     scubaRotation.z-=0.5
     this.el.setAttribute("rotation",scubaRotation)     
          scubaPosition.y-=0.01
          this.el.setAttribute("position",scubaPosition)        
      }
    })
  }
  })
  
  
  