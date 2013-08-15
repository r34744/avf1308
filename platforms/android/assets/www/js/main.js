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
	});
}); // end instagram pageinit



$('#weather').on('pageinit', function() {
      $.ajax({
         url: "http://api.aerisapi.com/observations/detroit,mi?client_id=HmXQEuv3ZDpbeRZFPUndB&client_secret=uvWYhEp1fK0XVaGPGQfkfAmq5ajx4OMcGVhMz7Vo",
         dataType: "jsonp",
         success: function(json) {
            if (json.success == true) {
               var ob = json.response.ob;
               $('#weatheroutput').html('<h2>The current weather in Detroit is </h2><br><h1>' + ob.weather.toLowerCase() + '</h1><br> <h2>with a temperature of </h2><br><h1>' + ob.tempF + '°</h1>');
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });
   });// end weather pageinit



//}; // end onDeviceReady