function HOME(){

}
function SETTINGS(){

}
function FOOD(){

}
function ACTIVITIES(){

}
function survey(){
   //document.getElementById("content").innerHTML='<object type="text/html" data="survey.html" ></object>'
   window.open("survey.html");
}
function getdata(){
  /*
    'name:'
    'email:'
    */
    var fears = []
    if(document.getElementById("spiders").checked == true){
        fears.push("spiders")
      }
    if(document.getElementById("snakes").checked == true){
        fears.push("snakes")
      }
    if(document.getElementById("Small_Spaces").checked == true){
        fears.push("Small_Spaces")
      }
    if(document.getElementById("open_spaces").checked == true){
      fears.push("open_spaces")
    }
    if(document.getElementById("Heights").checked == true){
        fears.push("heights")
      }
    if(document.getElementById("Planes").checked == true){
        fears.push("planes")
      }



    var overcome =[]
    if(document.getElementById("YES").checked == true){
        overcome.push("YES")
    }
      if(document.getElementById("nope").checked == true){
        overcome.push("nope")
      }
        if(document.getElementById("maybe??").checked == true){
          overcome.push("maybe??")
        }

    var travel =[]
    if(document.getElementById("15_miles").checked == true){
        travel.push('15 miles')
      }
    if(document.getElementById("10_miles").checked == true){
      travel.push('10 miles')
    }
    if(document.getElementById("5_miles").checked == true){
      travel.push('5_miles')
    }
var fun = []
if(document.getElementById("swimming").checked == true){fun.push("swimming")}
if(document.getElementById("biking").checked == true){fun.push("biking")}
if(document.getElementById("running").checked == true){fun.push("running")}
if(document.getElementById("kayaking").checked == true){fun.push("kayaking")}
if(document.getElementById("yoga").checked == true){fun.push("yoga")}
if(document.getElementById("hiking").checked == true){fun.push("hiking")}
if(document.getElementById("meditate").checked == true){fun.push("meditate")}
if(document.getElementById("read").checked == true){fun.push("read")}
if(document.getElementById("photogtraphy").checked == true){fun.push("photogtraphy")}
if(document.getElementById("movies and TV").checked == true){fun.push("movies and TV")}
if(document.getElementById("people watching").checked == true){fun.push("people watching")}
if(document.getElementById("collection").checked == true){fun.push("collection")}
if(document.getElementById("baking").checked == true){fun.push("baking")}
if(document.getElementById("knitting").checked == true){fun.push("knitting")} 
if(document.getElementById("Gardining").checked == true){fun.push("Gardining")}

var allergies = []

if(document.getElementById("Tree nut allergy").checked == true){allergies.push("Tree nut allergy")}
if(document.getElementById("Peanut allergy").checked == true){allergies.push("Peanut allergy")}
if(document.getElementById("milk allergy").checked == true){allergies.push("milk allergy")}
if(document.getElementById("egg allergy").checked == true){allergies.push("egg allergy")}
if(document.getElementById("soy allergy").checked == true){allergies.push("soy allergy")}
if(document.getElementById("wheat allergy").checked == true){allergies.push("wheat allergy")}
if(document.getElementById("corn allergy").checked == true){allergies.push("corn allergy")}
if(document.getElementById("alpha-gal allergy").checked == true){allergies.push("alpha-gal allergy")}
