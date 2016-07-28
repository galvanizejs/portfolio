$(document).ready(function(){
    
    
// 1. The block text box under the header title "Web Developer: Available for Hire" should not be visible unless the user clicks it and it should hide when the user clicks it again. 
    
  $("#hireme").click(function() {
    $("#hireme-panel").slideToggle();
  })
  
  // Note: Update CSS appropriately, too! 
  
  
  
  
  
// 5. When hovering over the Twitter, Instagram, and LinkedIn buttons, the icon should turn white and the background behind the icons should turn the matching orange as the existing icon color).

//    This has not been loaded into a CSS class and must be done within the function. A rounded corner to the background will present the rollover effect better too. 

  $(".social-links a i").hover(function() {
    $(this).css("color", "#fff");
    $(this).css("background", "#c97b25");
    $(this).css("border-radius", "8px");
	}, function() {
    $(this).css("color", "#c97b25");
    $(this).css("background", "none");
});

  
  
  
  
  
// 3. When hovering over the skill's donuts (JavaScript, Bootstrap, etc..), the background color around the donut icon should turn to a darker background color and have the corners rounded slightly.
  
  $("canvas").hover(function(){
    $(this).css("background-color", "#1d161b");
    $(this).css("border-radius", "20px");
   }, function() {
    $(this).css("background", "none");
   });
  
  
  
    
    
    
// 3. When any of the portfolio images is clicked, .... ????
  $("#work > img").click(function() {
    $(this).css("width", "50px");
  });

    
    
    
// 4. When clicking the "Alternate Color Theme" button, it should toggle the "changeTextColors" class.
//    Additionally, the h4 tag hover that you created in #2 should turn white.
//    Also, the background should change to the dark_embroidery.png image located the images directory.
    
  $("#toggleCSS").click(function() {
	  
    $("body").toggleClass('toggleCSSColors');
    $("p").toggleClass('toggleCSSText');

});

    
    
    
    
    

  
//BONUS
//       The contact area contains a span that can be clicked to reveal the contact info.
//       The HTML and CSS have been written for you to enable this functionality with jQuery.
//       The user should click a button next to the person's name to reveal the phone number and email address.


  $("#emailLink").click(function() {
    $("#emailForm").toggle(1000);
  });



});
