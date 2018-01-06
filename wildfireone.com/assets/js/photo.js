


  _500px.init({
    sdk_key: '1432fae088a34f857132fd6697e562672c39f415'
  });
var userid = '2180129';




function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function getGallery(id, element,callback){
  _500px.api('/users/'+userid+'/galleries/'+id+'/items', {sort:'created_at' },function (response)
  {
    var count =0;
    var photos = response.data['photos'];
    photos.forEach(function(photo){
       getPhoto(photo.id,element,function(){
         //console.log(count +":"+photos.length);
         if(count == photos.length-1){

           callback();
         }
         else{
           count++;
         }
       });
    });
  });

}

function getPhoto(id,element,callback){
  _500px.api('/photos/'+id,{ image_size: 1080 }, function (response) {
    //console.log(response.data);


    var photo = response.data.photo;
    //console.log(photo);
    element.append(
      // '<a href="'+photo.image_url+'">'+
      '<img src="'+photo.image_url+'" alt="'+photo.name+'" />'
          // <figure>It's a dummy caption. He who searches for meaning here will be sorely disappointed.</figure>
      // '</a>'
    );
    callback();
  });
}
