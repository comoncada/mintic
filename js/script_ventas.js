$('.mv-save').on('click', function() {
    $('.saved').fadeIn().delay(3000).fadeOut();
  });
  
  function mobileViewUpdate() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 600) {
        $('td:not([property=""])').each(function(event) {
          header = $(this).attr('property')
          
          if(! $(this).parent().find('#' + header).length) {
            $('#' + header).clone().insertBefore(this);
          }
        });
      }
  }
   
  $(window).on('load resize', mobileViewUpdate);




/*

var search_input = document.getElementById("#search_input");
search_input.addEventListener("keyup", function(e){
  var search_item = e.target.value.toLowerCase();
  var span_items = document.querySelectorAll("table");
  span_items.forEach(function(item){
    if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("th").style.display = "block";
    }else{
      item.closest("th").style.display = "none";
    }
  })
})
*/
