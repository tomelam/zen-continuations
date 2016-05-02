// The beginnings of a cut handler for a move operation.

canvas_click_handler = function() { alert("Canvas click!"); clickEval("(handle-canvas-click)"); };

cut_handler = function() { alert("Cut!"); clickEval("(handle-cut)"); };

paste_handler = function() { alert("Paste!"); clickEval("(cont2)"); };

whichElement = function(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ = e.target;
    } else if (e.srcElement) {
        targ = e.srcElement;
    }
    var tname;
    tname = targ.tagName;
    alert("You clicked on a " + tname + " element.");
}
