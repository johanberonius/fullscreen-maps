(function($) {
    var $root = jQuery('#iFrameWidget-0').contents().add(document),
        $details = $root.find('#detailsLapsBox'),
        $splits = $root.find('#splitsTableContainer');

    $details.find('> .splitTools').remove();
    var $splitTools = $('<div>').addClass('splitTools').appendTo($details);

    $('<a href="#">Select all</a>').appendTo($splitTools).after(' &nbsp;').click(function(event) {
        $splits.find('.splitsRow, .splitsRowAlternate').addClass('splitsRowSelected');
        event.preventDefault();
    });

    $('<a href="#">Select none</a>').appendTo($splitTools).after(' &nbsp;').click(function(event) {
        $splits.find('.splitsRowSelected').removeClass('splitsRowSelected');
        event.preventDefault();
    });

    $('<a href="#">Summarize selected splits</a>').appendTo($splitTools).click(function(event) {

        var $table = $('<table class="rich-table">').appendTo($splitTools),
            s = $splits.find('.splitsRowSelected'),
            altRow = true,
            row = function(title, text) {
                $table.append('<tr class="splitsRow'+ (altRow = !altRow ? 'Alternate' : '') +'">'+
                                  '<td class="rich-table-cell">'+ title +
                                  '<td class="rich-table-cell" style="text-align:right;">'+ text);
            };

        row('Number of splits selected:', s.size());

        var d = 0;
        s.find('td:nth-child(3)').each(function(i, e) {
            d += parseFloat(jQuery(e).text().replace(',','.'))
        });
        row('Total distance:', d.toFixed(2));
        row('Average distance:', (d/s.size()).toFixed(2));

        var st = function(i, e) {
            var tx=jQuery(e).text().split(':');
            t += parseInt(tx[0] || 0) * 60 + parseFloat(tx[1]);
        };

        var ft = function(t) {
            var s = (t % 60).toFixed(2);
            return Math.floor(t / 60) +':'+ (s < 10 ? '0' + s : s)
        };

        var t = 0;
        s.find('td:nth-child(2)').each(st);

        row('Total time:', ft(t));
        row('Average time:', ft(t/s.size()));
        row('Average pace:', ft(t/d));

        var t = 0;
        s.find('td:nth-child(4)').each(st);

        row('Average lap:', ft(t / s.size()));

        event.preventDefault();
    });

})(jQuery);
