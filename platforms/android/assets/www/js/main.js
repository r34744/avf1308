// Gregory Koenig
// AVF 1308

//document.addEventListener("deviceready", onDeviceReady, false);

//function onDeviceReady(){

$('#instagram').on('pageinit', function(){
	
	var screenOutput = function(info){
		//alert('screenOutput');
		//console.log(info);
		$('#data-msg').html('<h2> LookThruMyEyes Tags</h2>');
			$.each(info.data, function(index, photo){
			var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "' /><h4>" + photo.user.username + "</h4></li>";
			
			$("#data-output").append(pic);
			}); //end each
	}; //end screenOutput
	
	
    $(function(){
		var tag = "lookthrumyeyes";
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=ceb5afc4977048d6a656adbaf27faf0f";
		$.getJSON(url, screenOutput);
		console.log(url);
	});
	
}); // end instagram pageinit



$('#weather').on('pageinit', function() {
      $.ajax({
         url: "http://api.aerisapi.com/observations/detroit,mi?client_id=HmXQEuv3ZDpbeRZFPUndB&client_secret=uvWYhEp1fK0XVaGPGQfkfAmq5ajx4OMcGVhMz7Vo",
         dataType: "jsonp",
         success: function(json) {
            if (json.success == true) {
               var ob = json.response.ob;
               $('#weatheroutput').html('<h2>The current weather in Detroit is </h2><br><h1>' + ob.weather.toLowerCase() +
										'</h1><br> <h2>with a temperature of </h2><br><h1>' + ob.tempF + '°</h1>');
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });
});// end weather pageinit


$('#location').on('pageinit', function() {
	document.addEventListener("deviceready", onDeviceReady, false);
	
	var onDeviceReady = function (){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
	}
	
	var geolocationSuccess=function (position){
		$('geolocationdata').html('<h2>Your current latitude is:</h2><br><h1>' + position.coords.latitude +
								  '</h1><br><h2>with a longitude of:</h2><br><h1>'+position.coords.longitude +'</h1>');
	}
	
	var geolocationError = function(){
		alert(error.code + '/n' + error.message);
	}

}); // end location pageinit


$('#photo').on('pageinit', function() {
	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
	
	
	
}); // end picture pageinit






//}; // end onDeviceReady