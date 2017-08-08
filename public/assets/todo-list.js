$(document).ready(function(){

  $('form').on('submit', function(){
// kanazvanetsa !!! var item = $('form input');
      var item = $('form textarea');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});

// $('li').on('click', function(){
//     var item = $(this).text().Update(/ /g, "-");
//     $.ajax({
//       type: 'UPDATE',
//       url: '/todo/' + item,
//       success: function(data){
//         //do something with the data via front-end framework
//         location.reload();
//       }
//     });
// });
//
// });
