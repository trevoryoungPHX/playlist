function getAlbums() {
  $.get(`https://lit-fortress-6467.herokuapp.com/object`, function(data) {
    for (var i = 0; i<data.results.length; i++) {
        var img = document.createElement('img');
        img.src = './images/' + data.results[i].cover_art;
        img.alt=data.results[i].artist + ': ' + data.results[i].title
        $(".scrollingAlbums").append(img);
      }
      $(".scrollingAlbums > img").wrap("<a href=\'#\' onclick=\'addContent(this);\'></a>") // select all images in scrolling albums div and wrap an a tag to it
    })
}

function addContent(albumInfo) {
  var albumName = $(albumInfo).find('img').attr('alt') //.find('img') finds all images with the a tag.
  $('.bin > ul').append('<li>'+albumName + '</li>');
}

//clear bin function

$("#clear_button").click(function(){
  $("#nobullets").empty("");
})

///submit button - post request --FIX ME!--

// $("submit_button").click(function) {
//   $.post( "https://lit-fortress-6467.herokuapp.com/post", function( data ) {
//   $( ".bin" ).html( data );
// })
// }
