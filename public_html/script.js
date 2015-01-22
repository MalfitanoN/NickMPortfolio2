$("document").ready(function(){
    $(".Main").css("background-color", "blue");
    
    $("div:nth-child(1)").css("border-style", "solid");
    
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    
    $("h1").bind("click", mouseClick);
    
    $("#replaceWText").bind("click", replaceWText);
    
    $("#randPara").bind("click", addAPara);
    
    $("#removePara").bind("click", removeAPara);
    
    $("#tabs").tabs();
    
    $("#accordion").draggable();
    
    $("#tabs").draggable();
    
    $("#show").css("visibility", "hidden");
    
    $("#hide").bind("click", hideThePage);
    
    $("#show").bind("click", showThePage);
    
    $( "#accordion" ).accordion({
      event: "click hoverintent"
    });
    
 });
 
 function removeAPara(){
      $("#replaceWText p:last").remove();
 } 
 
 function addAPara(){
      $("#replaceWText").append("<p>GET LEDLED</p>");
 } 
 
 function replaceWText(){
      $("#replaceWText").text("Wrecked");
 } 
 
 function mouseOverMe(){
     $("h1").html("LEDL");
     $(".Main").css("background-color", "aqua");
 } 
 
 function mouseOutMe(){
     $("h1").html("WOW");
     $(".Main").css("background-color", "blue");
 }
 
 function mouseClick(){
     $("p").html("YEA");
 }
 
 function hideThePage(){
     $("#show").css("visibility", "visible");
     $("div").hide("fade", {}, 2500);
     $("#show").show("fade", {}, 2500);
 }
 
 function showThePage(){
     $("div").show("fade", {}, 2500);
     $("#show").hide("fade", {}, 2500);
 }