// Gregory Koenig
// AVF 1308

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){

$('#instagram').on('pageinit', function(){
	
    var tag = "lookthrumyeyes";
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=ceb5afc4977048d6a656adbaf27faf0f";
	$.getJSON(url, screenOutput);
	console.log(url);
	var screenOutput = function(info){
		alert("screenOutput");
		console.log(info);
		$("#data-msg").html("<h2> LookThruMyEyes Results</h2>");
			$.each(info.data, function(index, photo){
			var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
			
			$("#data-output").append(pic);
			}); //end each
	}; //end screenOutput

}); // end instagram pageinit



}; // end onDeviceReady