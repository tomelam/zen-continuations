<script>
mousedown_handler = function() { alert("Paste!"); };
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
</script>

<div style="width:100%; height:120px; background-color:Aquamarine;">
  <button id="move" onclick="mousedown_handler();">MOVE</button><br />
  Zen Canvas<br />
  <div id="zen_canvas">
  <div id="test div 1" style="float:left; width:50px; height:50px; background-color:pink;">DIV_1</div>
  <div id="test div 2" style="float:left; width:50px; height:50px; background-color:lightgreen;">DIV_2</div>
  <div id="test div 3" style="float:left; width:50px; height:50px; background-color:lightblue;">DIV_3</div>
  </div>
</div>
