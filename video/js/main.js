// Set the date we're counting down to
var countDownDate = new Date("mar 24, 2018 23:55:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = " <i>Haan abhi bhi khatam nahi hua</i> 😂😆";
        document.getElementById("text").innerHTML = " <i><b>CLICK ON THE GIF</b></i> 😂";
          var m = document.getElementsByClassName("image");
          m[0].src = "https://media.giphy.com/media/MB5clWybINg4o8QFcT/giphy.gif";
      }
    }, 1000); 