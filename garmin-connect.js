function addFullscreenButton() {

    if ('jQuery' in window) {
        var mapControls = jQuery('.map-controls').eq(0).has('.map-control-item');
        if (mapControls.length) {
            var mapContainer = jQuery('#map_container, #activity-map-canvas')[0];
            mapContainer.parentElement.style.height = mapContainer.scrollHeight+'px';
            mapContainer.style.width = mapContainer.style.height = '100%';
            mapContainer.requestFullscreen = mapContainer.requestFullscreen ||
              mapContainer.mozRequestFullScreen ||
              mapContainer.webkitRequestFullscreen ||
              mapContainer.msRequestFullscreen;

            var fullscreenButton = jQuery('<button class="map-control-item map-btn map-full-screen" title="Fullscreen"><i class="map-btn-icon icon-full-screen-2"></i></button>');
            fullscreenButton.click(function() { mapContainer.requestFullscreen() });
            mapControls.append(fullscreenButton);

            return;
        }
    }

    if (--addFullscreenButton.retries)
        setTimeout(addFullscreenButton, 1500);
}

addFullscreenButton.retries = 10;
addFullscreenButton();
