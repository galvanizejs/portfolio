$(document).ready(function(){
    
    
// 1. The block text box under the header title "Web Developer: Available for Hire" should not be visible unless the user clicks it and it should hide when the user clicks it again. 
    
  $("#hireme").click(function() {
    $("#hireme-panel").slideToggle();
  })
  
  // Note: Update CSS appropriately, too! 
  
  
  
// 2. When hovering over the skill's donuts (JavaScript, Bootstrap, etc..), the background color around the donut icon should turn to a darker background color and have the corners rounded slightly.
  
  $("h4").hover(function(){
    $(this).css("background-color", "#6bd2db");
  });

  $("canvas").hover(function(){
    $(this).css("background-color", "#1d161b");
    $(this).css("border-radius", "20px");
  });
  
  
  
    
    
    
// 3. When any of the portfolio images is clicked, expand the container to 9 columns and hide the text that is associated with it.

  $("#work > img").click(function() {
    $(this).css("width", "50px");
  });

    
    
    
// 4. When clicking the "Alternate Color Theme" button, it should toggle the "changeTextColors" class.
//    Additionally, the h4 tag hover that you created in #2 should turn white.
//    Also, the background should change to the dark_embroidery.png image located the images directory.
    
  $("#low-vision").click(function() {
    $("body").toggleClass('changeTextColors');
      $("h4").hover(function(){
        $(this).css("background-color", "white");
      });
      $("body").css("background", "url('images/dark_embroidery.png')")
  });
    
    
    
    
    

// 5. When hovering over the Twitter, Instagram, and LinkedIn buttons, the background behind the buttons should turn #6bd2db.
//    This has not been loaded into a CSS class and must be done within the function.
//    Make sure you get those corners rounded so the color doesn't pop out in the corners!
  $("#social-links a img").hover(function() {
    $(this).css("background", "#6bd2db")
    $(this).css("border-radius", "8px")
  });
//BONUS
//       The contact area contains a span that can be clicked to reveal the contact info.
//       The HTML and CSS have been written for you to enable this functionality with jQuery.
//       The user should click a button next to the person's name to reveal the phone number and email address.
  var revealPlaceHolder = $('<span class="revealPlaceHolder">Click for Contact Info<span>');

  $(".reference-contact").addClass("hidden");
  $(".reference-contact").before(revealPlaceHolder);

  $(".revealPlaceHolder").click(function(){
    $(this).hide();
    $(this).next(".reference-contact").removeClass("hidden")
  });

});
