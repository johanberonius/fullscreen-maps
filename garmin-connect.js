jQuery('<a class="map-control-item map-btn map-full-screen" href="#" title="Fullscreen"><span class="map-btn-icon">Fullscreen</span></a>')
    .appendTo(
        jQuery('#iFrameWidget-0').attr('allowfullscreen', 'true').contents().find('.map-controls').add('.map-controls')
    )
    .click(function(event) {
    var m = this.ownerDocument.getElementById('map_container');
    m.parentElement.style.height = m.scrollHeight+'px';
    m.style.width = m.style.height = '100%';
    m.requestFullscreen = m.requestFullscreen ||
                          m.mozRequestFullScreen ||
                          m.webkitRequestFullscreen ||
                          m.msRequestFullscreen;
    m.requestFullscreen();
    event.preventDefault();
});
