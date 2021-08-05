var outer = $(".circle");
var middle = $(".inner-circle");
var inner = $(".inner-inner-circle");
var container = $(".circle-container");
var image = $(".servicesimage");
var text = $(".servicebox");
var bg = $(".service-background-animation");
var outcircle = $(".out-circle");
var midcircle = $(".mid-circle");
var incircle = $(".in-circle");
var heading=$(".service-inner-heading");
var sh1=$(".sh1");
var sh2=$(".sh2");
var sh3=$(".sh3");

var counta = 0,
  countb = 0,
  countc = 0;

outer.mouseover(function(e) {

  countb=0;
  countc=0;
  middle.removeClass("active");
  inner.removeClass("active");
  outer.addClass("active");

midcircle.removeClass("active");
incircle.removeClass("active");

  if (counta > 0) {
    outcircle.removeClass("active");
    return 1;
  }
  counta++;
  outcircle.addClass("active");
});

middle.mouseover(function(e) {
  counta=0;
  countc=0;
  outer.removeClass("active");
  inner.removeClass("active");
  middle.addClass("active");

  incircle.removeClass("active");
  outcircle.removeClass("active");


  if (countb > 0) {
    midcircle.removeClass("active");
    return 1;
  }
  countb++;
  midcircle.addClass("active");
});
inner.mouseover(function(e) {
  countb=0;
  counta=0;
  outer.removeClass("active");
  middle.removeClass("active");
  inner.addClass("active");

  outcircle.removeClass("active");
  midcircle.removeClass("active");

  if (countc > 0) {
    incircle.removeClass("active");
    return 1;
  }
  countc++;
  incircle.addClass("active");
});


function outercircle(a) {

  removeServiceActive();
  text.eq(a).addClass("active");

  image.css("background-image", "url('images/" + a + ".jpg')");
}



function removeServiceActive() {
  text.removeClass("active");
}



// $(".sh1").arctext({radius: 900, rotate: false})
