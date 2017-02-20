function addFullscreenButton() {

    if ('jQuery' in window) {
        var $mapControls = jQuery('.map-controls').eq(0).has('.map-control-item');
        if ($mapControls.length) {
            var $mapContainer = jQuery('#activity-map-canvas'),
                mapContainer = $mapContainer[0];

            mapContainer.requestFullscreen = mapContainer.requestFullscreen ||
              mapContainer.mozRequestFullScreen ||
              mapContainer.webkitRequestFullscreen ||
              mapContainer.msRequestFullscreen;

            var $fullscreenButton = jQuery('<button class="map-control-item map-btn map-full-screen" title="Fullscreen"><i class="map-btn-icon icon-full-screen-2"></i></button>');
            $fullscreenButton.click(function() {
                mapContainer.requestFullscreen();
            });

            $(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange', function(event) {
                setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 1200);
            });

            $mapControls.append($fullscreenButton);
            $mapContainer.before('<style>#activity-map-canvas:-webkit-full-screen {width: 100% !important; height: 100% !important;}</style>');

            return;
        }
    }

    if (--addFullscreenButton.retries)
        setTimeout(addFullscreenButton, 1500);
}

addFullscreenButton.retries = 10;
addFullscreenButton();
