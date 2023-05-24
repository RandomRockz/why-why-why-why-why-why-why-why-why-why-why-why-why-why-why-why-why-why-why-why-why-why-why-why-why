AFRAME.registerComponent("fish",{
    init: function(){
        for(var i=1;i<=20; i++){
            var id = `fish${i}`
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))
            var position={x:posX, y:posY, z:posZ}
            this.createfishs(id,position)
        }
    },
    createfishs: function(id,position){
    
        var seaEl=document.querySelector("#sea")
        var fishEl= document.createElement("a-entity")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("scale", {x:500,y:500,z:500})
        seaEl.appendChild(fishEl)
    }
    })