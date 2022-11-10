
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 600 ){
    $(".rid").delay(100).animate({opacity:1},500)
    $(".road1").animate({opacity:0},300)
    $(".road2").delay(300).animate({opacity:1},500)
  }
  if($("body,html").scrollTop() >= 1000){
    $(".about").css({opacity:1}).animate({left:-248},300)
    $(".about11").addClass("about1")
    $("#about h2").delay(500).animate({opacity:1},1000)
    $("#about p").delay(500).animate({opacity:1},1000)
    $(".about1").delay(500).animate({opacity:1},1000)
    $(".about1").delay(300).removeClass("about11")
  }
  if($("body,html").scrollTop() >= 2000){
    $(".cha1").css({opacity:1}).animate({left:-248},300)
    $(".cha111").addClass("cha11")
    $(".cha11").delay(500).animate({opacity:1},1000)
    $(".cha11").delay(300).removeClass("cha111")
    $(".modesel").delay(500).animate({opacity:1},1000)
    $(".modesel1").delay(500).animate({opacity:1},1000)
  }
  if($("body,html").scrollTop() >= 2800){
    $(".dlct").css({opacity:1}).animate({left:-248},300)
    $(".dlct1").delay(1000).animate({opacity:1},1000)
  }
})


$("#header").on("mouseenter",function(){
  $(".headul1").css({display:"block"})
  $("#header").css({height:280})
  $(".headul").css({height:280})
  $("#header").addClass("headull")

})
$("#header").on("mouseleave",function(){
  $(".headul1").css({display:"none"})
  $("#header").css({height:70})
  $(".headul").css({height:70})
  $("#header").removeClass("headull")
})

$(".online a").on("click",function(e){
  e.preventDefault();
  $(".free").removeClass("onl")
  $(".air").removeClass("onl")
  $(".miss").removeClass("onl")
  $(".rank").removeClass("onl")
  $(".coll").removeClass("onl")
  $(".online").addClass("onl")

  $(".free1").removeClass("ont")
  $(".air1").removeClass("ont")
  $(".miss1").removeClass("ont")
  $(".rank1").removeClass("ont")
  $(".coll1").removeClass("ont")
  $(".online1").addClass("ont")
})
$(".free a").on("click",function(e){
  e.preventDefault();
  $(".online").removeClass("onl")
  $(".air").removeClass("onl")
  $(".miss").removeClass("onl")
  $(".rank").removeClass("onl")
  $(".coll").removeClass("onl")
  $(".free").addClass("onl")

  $(".online1").removeClass("ont")
  $(".air1").removeClass("ont")
  $(".miss1").removeClass("ont")
  $(".rank1").removeClass("ont")
  $(".coll1").removeClass("ont")
  $(".free1").addClass("ont")
})
$(".air a").on("click",function(e){
  e.preventDefault();
  $(".online").removeClass("onl")
  $(".free").removeClass("onl")
  $(".miss").removeClass("onl")
  $(".rank").removeClass("onl")
  $(".coll").removeClass("onl")
  $(".air").addClass("onl")

  $(".online1").removeClass("ont")
  $(".free1").removeClass("ont")
  $(".miss1").removeClass("ont")
  $(".rank1").removeClass("ont")
  $(".coll1").removeClass("ont")
  $(".air1").addClass("ont")
})
$(".miss a").on("click",function(e){
  e.preventDefault();
  $(".online").removeClass("onl")
  $(".air").removeClass("onl")
  $(".free").removeClass("onl")
  $(".rank").removeClass("onl")
  $(".coll").removeClass("onl")
  $(".miss").addClass("onl")

  $(".free1").removeClass("ont")
  $(".air1").removeClass("ont")
  $(".online1").removeClass("ont")
  $(".rank1").removeClass("ont")
  $(".coll1").removeClass("ont")
  $(".miss1").addClass("ont")
})
$(".rank a").on("click",function(e){
  e.preventDefault();
  $(".online").removeClass("onl")
  $(".air").removeClass("onl")
  $(".miss").removeClass("onl")
  $(".free").removeClass("onl")
  $(".coll").removeClass("onl")
  $(".rank").addClass("onl")

  $(".rank1").removeClass("ont")
  $(".air1").removeClass("ont")
  $(".miss1").removeClass("ont")
  $(".free1").removeClass("ont")
  $(".coll1").removeClass("ont")
  $(".rank1").addClass("ont")
})
$(".coll a").on("click",function(e){
  e.preventDefault();
  $(".online").removeClass("onl")
  $(".air").removeClass("onl")
  $(".miss").removeClass("onl")
  $(".rank").removeClass("onl")
  $(".free").removeClass("onl")
  $(".coll").addClass("onl")

  $(".coll1").removeClass("ont")
  $(".air1").removeClass("ont")
  $(".miss1").removeClass("ont")
  $(".rank1").removeClass("ont")
  $(".free1").removeClass("ont")
  $(".coll1").addClass("ont")
})

$("#top1 li a:eq(0)").on("click",function(){
  $("#top1 li:eq(0)").addClass("top1")
  $("#top1 li:eq(0)").removeClass("btn")
  $("#top1 li:eq(1)").removeClass("top2")
  $("#top1 li:eq(1)").addClass("btn")
  $("#top1 li:eq(2)").removeClass("top3")
  $("#top1 li:eq(2)").addClass("btn")
  $("#top1 li:eq(3)").removeClass("top4")
  $("#top1 li:eq(3)").addClass("btn")
  $("#top1 li:eq(1)").removeClass("top1")
  $(".slider1").animate({opacity:1},500)
  $(".slider2").animate({opacity:0},500)
  $(".slider3").animate({opacity:0},500)
  $(".slider4").animate({opacity:0},500)
})
$("#top1 li a:eq(1)").on("click",function(){
  $("#top1 li:eq(1)").addClass("top2")
  $("#top1 li:eq(1)").removeClass("btn")
  $("#top1 li:eq(0)").removeClass("top1")
  $("#top1 li:eq(0)").addClass("btn")
  $("#top1 li:eq(2)").removeClass("top3")
  $("#top1 li:eq(2)").addClass("btn")
  $("#top1 li:eq(3)").removeClass("top4")
  $("#top1 li:eq(3)").addClass("btn")
  $(".slider1").animate({opacity:0},500)
  $(".slider2").animate({opacity:1},500)
  $(".slider3").animate({opacity:0},500)
  $(".slider4").animate({opacity:0},500)
})
$("#top1 li a:eq(2)").on("click",function(){
  $("#top1 li:eq(2)").addClass("top3")
  $("#top1 li:eq(2)").removeClass("btn")
  $("#top1 li:eq(1)").removeClass("top2")
  $("#top1 li:eq(1)").addClass("btn")
  $("#top1 li:eq(0)").removeClass("top1")
  $("#top1 li:eq(0)").addClass("btn")
  $("#top1 li:eq(3)").removeClass("top4")
  $("#top1 li:eq(3)").addClass("btn")
  $(".slider1").animate({opacity:0},500)
  $(".slider2").animate({opacity:0},500)
  $(".slider3").animate({opacity:1},500)
  $(".slider4").animate({opacity:0},500)
})
$("#top1 li a:eq(3)").on("click",function(){
  $("#top1 li:eq(3)").addClass("top4")
  $("#top1 li:eq(3)").removeClass("btn")
  $("#top1 li:eq(1)").removeClass("top2")
  $("#top1 li:eq(1)").addClass("btn")
  $("#top1 li:eq(2)").removeClass("top3")
  $("#top1 li:eq(2)").addClass("btn")
  $("#top1 li:eq(0)").removeClass("top1")
  $("#top1 li:eq(0)").addClass("btn")
  $(".slider1").animate({opacity:0},500)
  $(".slider2").animate({opacity:0},500)
  $(".slider3").animate({opacity:0},500)
  $(".slider4").animate({opacity:1},500)
})

$(".dlcc11 a").on("click",function(e){
  e.preventDefault();
  $(".dlcc1").addClass("dlcc11")
  $(".dlcc1").removeClass("dlcc12")
  $(".dlcc2").addClass("dlcc21")
  $(".dlcc2").removeClass("dlcc22")
  $(".dlc2").css({opacity:0,zIndex:0})
  $(".dlc1").css({opacity:1,zIndex:1})
})
$(".dlcc12 a").on("click",function(e){
  e.preventDefault();
  $(".dlcc1").addClass("dlcc11")
  $(".dlcc1").removeClass("dlcc12")
  $(".dlcc2").addClass("dlcc21")
  $(".dlcc2").removeClass("dlcc22")
  $(".dlc2").css({opacity:0,zIndex:0})
  $(".dlc1").css({opacity:1,zIndex:1})
})
$(".dlcc21 a").on("click",function(e){
  e.preventDefault();
  $(".dlcc2").addClass("dlcc22")
  $(".dlcc2").removeClass("dlcc21")
  $(".dlcc1").addClass("dlcc12")
  $(".dlcc1").removeClass("dlcc11")
  $(".dlc1").css({opacity:0,zIndex:0})
  $(".dlc2").css({opacity:1,zIndex:1})
})
$(".dlcc22 a").on("click",function(e){
  e.preventDefault();
  $(".dlcc2").addClass("dlcc21")
  $(".dlcc2").removeClass("dlcc22")
  $(".dlcc1").addClass("dlcc12")
  $(".dlcc1").removeClass("dlcc11")
  $(".dlc2").css({opacity:0,zIndex:0})
  $(".dlc1").css({opacity:1,zIndex:1})
})
