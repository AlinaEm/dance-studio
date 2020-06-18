function readMore() {
    let shownText = document.getElementById("dots");
    let readMore= document.getElementById("read-more");
    let button = document.getElementById("button");

    if(shownText.style.display === "none") {
        shownText.style.display = "inline";
        button.innerHTML="Read more";
        readMore.style.display="none";
} else {
    shownText.style.display = "none";
    button.innerHTML="Close";
    readMore.style.display="inline";
    }
}

function readMore1() {
  let shownText1 = document.getElementById("dots1");
  let readMore1= document.getElementById("read-more1");
  let button1 = document.getElementById("button1");

  if(shownText1.style.display === "none") {
      shownText1.style.display = "inline";
      button1.innerHTML="Read more";
      readMore1.style.display="none";
} else {
  shownText1.style.display = "none";
  button1.innerHTML="Close";
  readMore1.style.display="inline";
  }
}

function readMore2() {
  let shownText2 = document.getElementById("dots2");
  let readMore2= document.getElementById("read-more2");
  let button2 = document.getElementById("button2");

  if(shownText2.style.display === "none") {
      shownText2.style.display = "inline";
      button2.innerHTML="Read more";
      readMore2.style.display="none";
} else {
  shownText2.style.display = "none";
  button2.innerHTML="Close";
  readMore2.style.display="inline";
  }
}

function readMore3() {
  let shownText3 = document.getElementById("dots3");
  let readMore3= document.getElementById("read-more3");
  let button3 = document.getElementById("button3");

  if(shownText3.style.display === "none") {
      shownText3.style.display = "inline";
      button3.innerHTML="Read more";
      readMore3.style.display="none";
} else {
  shownText3.style.display = "none";
  button3.innerHTML="Close";
  readMore3.style.display="inline";
  }
}

function readMore4() {
  let shownText4 = document.getElementById("dots4");
  let readMore4= document.getElementById("read-more4");
  let button4 = document.getElementById("button4");

  if(shownText4.style.display === "none") {
      shownText4.style.display = "inline";
      button4.innerHTML="Read more";
      readMore4.style.display="none";
} else {
  shownText4.style.display = "none";
  button4.innerHTML="Close";
  readMore4.style.display="inline";
  }
}

function readMore5() {
  let shownText5 = document.getElementById("dots5");
  let readMore5= document.getElementById("read-more5");
  let button5 = document.getElementById("button5");

  if(shownText5.style.display === "none") {
      shownText5.style.display = "inline";
      button5.innerHTML="Read more";
      readMore5.style.display="none";
} else {
  shownText5.style.display = "none";
  button5.innerHTML="Close";
  readMore5.style.display="inline";
  }
}


/*Carousel */

$(document).ready(function() {
 
  $("#slider-container").owlCarousel({
     navigation : true,
    navigationText: ["prev","next"],
    responsiveClass:true,
    responsive:{
      0:{
        items:2,
        nav:true
    },
    600:{
        items:4,
        nav:false
    },
}
  });
 
});

$(document).ready(function() {
 
    $("#slide").owlCarousel({
      navigation: true,
      navigationText: ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
      autoplay: false,
      pagination : true,
      scrollPerPage: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:2,
          nav:true
      },
      600:{
          items:4,
          nav:false
      },
  }
        
    });
    
  });

function text() {
  $("#make").hide(2000).show(2000);
  $("#your-dreams").hide().show(3000);
  $("#come-true").hide().show(4000);
}
  setInterval (text, 6000);