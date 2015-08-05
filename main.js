
function pageInit() {

    var connections = $('svg.connection');
    $.each(connections, function(i, node) {

        node = $(node);
        node.html(node.html() + node.html());
        var paths = node.find('path');
        paths.first().attr('class', 'back');
        paths.last().attr('class', 'front');
    });

}

$(document).ready(pageInit);
