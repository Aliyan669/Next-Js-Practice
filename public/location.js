console.log("Location File loaded")
///////////// Geo Location ye current location get karna ke kam ata hai //////////////
function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "Geo Location is not supported by this browser."
    }
}

function showPosition(position){
    console.log(position)
}
getLocation()