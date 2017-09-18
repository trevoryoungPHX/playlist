

function getAlbums() {
  $.get(`https://lit-fortress-6467.herokuapp.com/object`, function(data) {
    // albums we have already selected
    var chosenNums = [];
    //keep looking for albums until  find 3 albums
    for (var i = 0; chosenNums.length<3; i++) {
      var randomNum = Math.floor(Math.random() * 5)
      //assume the image doesn't exist
      var exist = true;
      //check the if the random number has been chosen
      for(var j = 0; j<chosenNums.length; j++){
        if(chosenNums[j]==randomNum){
          exist=false;
        }
      }
      //if the album hasn't been selected add the album image
      if(exist){
        var img = document.createElement('img');
        img.src = './images/' + data.results[randomNum].cover_art;
        img.class ='albumImgs';
        $(".rightHalf").append(img);
        //add the random number to chosenNums
        chosenNums.push(randomNum);
      }
    }
  })
}
