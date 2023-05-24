AFRAME.registerComponent("treasure",{
    init: function(){
        for(var i=1;i<=20; i++){
            var id = `treasure${i}`
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))
            var position={x:posX, y:posY, z:posZ}
            this.createtreasures(id,position)
        }
    },
    createtreasures: function(id,position){
    
        var seaEl=document.querySelector("#sea")
        var treasureEl= document.createElement("a-entity")
        treasureEl.setAttribute("id",id)
        treasureEl.setAttribute("position",position)
        treasureEl.setAttribute("material", "color", "orange")
        treasureEl.setAttribute("geometry",{primitive:"torus", radius:8})
        seaEl.appendChild(treasureEl)
    }
    })