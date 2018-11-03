
$('#findLocation').on('click', function () {
  findLocation();
  changeColors();
})


function findLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        var elLocation = document.getElementById('lat');
        elLocation.textContent = lat;

        var elLocation = document.getElementById('lon');
        elLocation.textContent = lon;
    })
  }

function changeColors() {
  $('div').addClass('darkgrey');
}
