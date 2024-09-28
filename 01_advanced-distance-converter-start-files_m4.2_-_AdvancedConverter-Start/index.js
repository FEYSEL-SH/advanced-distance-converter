var convertType = "miles"
var heading = document.querySelector("h1")
var intro = document.querySelector("p")
var answer = document.getElementById("answer")
var form = document.getElementById("convert")

document.addEventListener("keydown", function(e){
    var key = Event.code;
    if(key === 'KeyK'){
        convertType = "kilometers";
        heading.innerHTML = "Kilometers to Miles Converter"
        intro.innerHTML =
          "Type in a number of kilometers  and click the button to convert the distance to miles.";
    }
    else if(key === "KeyM"){
  convertType = "miles";
  heading.innerHTML = " Miles to Kilometers   Converter";
  intro.innerHTML =
    "Type in a number of Miles  and click the button to convert the distance to Kilometers.";
    }
})

form.addEventListener("submit", function(e){
e.preventDefault()
var distance = parseFloat(document.getElementById("distance").value)
if(distance){
    //convert
    if(convertType == "miles"){
        var converted = (distance * 1.609344).toFixed(3)
         answer.innerHTML = 
           `${distance} miles converts to ${converted} kilometers`
         ;
    }
    else{
        var converted = (distance * 0.621371192).toFixed(3)
        answer.innerHTML = 
          `${distance} kilometers converts to ${converted} miles`
        ;
       
    }
}
else{
    answer.innerHTML = "<h2>please provide a number</h2>"

}

})