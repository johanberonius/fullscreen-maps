function addSplitTools() {
    'use strict';

    if ('jQuery' in window) {
        var $ = jQuery,
            $details = $('#intervals-table');

        if ($details.length) {

            var $splits = $details.find('> table.splits-table');

            $details.find('> .splitTools').remove();
            var $splitTools = $('<div>').css('margin-bottom', '20px').addClass('splitTools').appendTo($details);

            $('<a href="#">Select all</a>').appendTo($splitTools).after(' &nbsp;').click(function(event) {
                $splits.find('> tbody > tr').addClass('active');
                event.preventDefault();
            });

            $('<a href="#">Select none</a>').appendTo($splitTools).after(' &nbsp;').click(function(event) {
                $splits.find('> tbody > tr.active').removeClass('active');
                event.preventDefault();
            });

            $('<a href="#">Summarize selected splits</a>').appendTo($splitTools).click(function(event) {

                var $footerRow = $('<tr>').appendTo($splits.find('> tfoot')),
                    $activeRows = $splits.find('> tbody > tr.active');

                function parseValue(text) {
                    var t = text.trim().replace(',', '.').split(':').reverse();
                    return (parseInt(t[2]) || 0) * 3600 + (parseInt(t[1]) || 0) * 60 + (parseFloat(t[0]) || 0);
                }

                function formatTime(time) {
                    var s = (time % 60).toFixed(2);
                    return Math.floor(time / 60) +':'+ (s < 10 ? '0' + s : s)
                }

                function appendColumn(column, title, method, format, value) {
                    var val = {
                        count: 0,
                        sum: 0,
                        avg: 0,
                        min: Number.MAX_VALUE,
                        max: Number.MIN_VALUE,
                        none: '--',
                    };

                    $activeRows.find('td:nth-child('+ column +')').each(function(i, element) {
                        var value = parseValue($(element).text());
                        val.count++;
                        val.sum += value;
                        val.min = Math.min(val.min, value);
                        val.max = Math.max(val.max, value);
                    });

                    val.avg = val.sum / val.count;

                    if (!value)
                        value = val[method];

                    var text = format == 'time'  ? formatTime(value) :
                            format == 'int'   ? value.toFixed(0) :
                            format == 'float' ? value.toFixed(2) :
                                                value;

                    $('<td>').attr('title', title).text(text).appendTo($footerRow);

                    return value;
                }

                var column = 0;
                appendColumn(++column, 'Selected splits', 'count', 'int');
                var time = appendColumn(++column, 'Time', 'sum', 'time');
                appendColumn(++column, 'Ellapsed time', 'none', 'none');
                appendColumn(++column, 'Moving time', 'sum', 'time');
                var distance = appendColumn(++column, 'Distance', 'sum', 'float');
                appendColumn(++column, 'Elevation gain', 'sum', 'int');
                appendColumn(++column, 'Elevation loss', 'sum', 'int');
                appendColumn(++column, 'Average pace', 'avg', 'time', time / distance);
                appendColumn(++column, 'Average moving pace', 'avg', 'time');
                appendColumn(++column, 'Best pace', 'min', 'time');
                appendColumn(++column, 'Average heartrate', 'avg', 'int');
                appendColumn(++column, 'Max heartrate', 'max', 'int');
                appendColumn(++column, 'Average cadence', 'avg', 'int');
                appendColumn(++column, 'Max cadence', 'max', 'int');
                appendColumn(++column, 'Average step length', 'avg', 'float');
                appendColumn(++column, 'Average vertical oscillation', 'avg', 'float');
                appendColumn(++column, 'Average ground contact time', 'avg', 'float');
                appendColumn(++column, 'Calories', 'sum', 'int');

                event.preventDefault();
            });

            return;
        }
    }

    if (--addSplitTools.retries)
        setTimeout(addSplitTools, 1500);
}

addSplitTools.retries = 10;
addSplitTools();
