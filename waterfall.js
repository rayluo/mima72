/*
 * A Jquery plugin for the Waterfall layout.
 * Version 1.0 Copyright (C) Ray Luo <iceberg@qq.com>
 * Distributed under the BSD License
 *
 * Usage:
    <div id='container'>
        <div>stuff 1</div>
        <fieldset>stuff 2</fieldset>
        ...
    </div>
    <script>
    $(document).ready(function() {
        $('#container').waterfall({columns: 3});
    });
    </script>
 */

$.fn.waterfall = function(options) {
    var tr = $('<tr></tr>');
    for(var i=0; i<options.columns; i++){
        tr.append('<td></td>');
    }
    var container = $('<table class="waterfall_layout"></table>').append(tr);
    $(this).children().each(function(index){
        $("td:eq(" + index%options.columns + ")", container).append(this);
    });
    $('td', container)
        .css("width", 100/options.columns + "%") //fixed equal width columns
        .css("vertical-align", "top");
    $(this).after(container);
};
