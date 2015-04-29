function addFullscreenButton() {

    if ('jQuery' in window) {
        var $mapControl = $('.e-full-map');
        if ($mapControl.length) {
            var $fullscreenButton = $('<div title="Fullskärm" class="e-toggle-button" style="position: absolute; right: 304px; bottom: 26px;"><button class="e-icon">Full</button></div>')

            $fullscreenButton.insertAfter($mapControl).click(function(event){
                var m = document.getElementById('page');
                m.requestFullscreen = m.requestFullscreen ||
                                      m.mozRequestFullScreen ||
                                      m.webkitRequestFullscreen ||
                                      m.msRequestFullscreen;
                m.requestFullscreen();
                event.preventDefault();
            });

            $(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange', function(event) {
                $fullscreenButton.toggle(!(document.mozFullScreen || document.webkitIsFullScreen));
            });

            return;
        }
    }

    if (--addFullscreenButton.retries)
        setTimeout(addFullscreenButton, 1500);
}

addFullscreenButton.retries = 10;
addFullscreenButton();
