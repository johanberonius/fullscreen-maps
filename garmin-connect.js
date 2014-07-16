jQuery('<a class="map-control-item map-btn map-full-screen" href="#" title="Fullscreen"><span class="map-btn-icon">Fullscreen</span></a>').appendTo('.map-controls').click(function(event){
    var m = document.getElementById('map_container');
    m.parentElement.style.height = m.scrollHeight+'px';
    m.style.width=m.style.height = '100%';
    m.requestFullscreen = m.requestFullscreen ||
                          m.mozRequestFullScreen ||
                          m.webkitRequestFullscreen ||
                          m.msRequestFullscreen;
    m.requestFullscreen();
    event.preventDefault();
});
