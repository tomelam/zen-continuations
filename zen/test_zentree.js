dojo.provide("zen.test_zentree");

dojo.require("zen");
dojo.require("zen.dojo");

var iframeDoc;

// Insert styles to make the AccordionContainer look and work properly.
require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
    var iframeDoc = dom.byId("testBody").contentWindow.document;
    win.withDoc(iframeDoc, function() {
	var styleElement = win.doc.createElement("style");
	styleElement.setAttribute("type", "text/css");
	win.doc.getElementsByTagName("head")[0].appendChild(styleElement);
	styleElement.innerHTML = "@import '../../../../javascripts/dojo/dijit/themes/tundra/tundra.css';\n@import '../../../../javascripts/dojo/dojo/resources/dojo.css';";
    });
});

tests.register(
    "zen.test_zentree",
    [
	{
	    name: "1. zen.renderTree(['DIV', {}, []], ...) renders and places a Zen tree",
	    runTest: function() {
		require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
		    iframeDoc = dom.byId("testBody").contentWindow.document; // Get the "Test Page".
		    win.withDoc(iframeDoc, function() {
			bodyCompon = zen.createNew(zen.DomNodeCompon, null, dojo.body());
			zen.renderTree(["DIV", { style:'width:80px;height:30px;background-color:blue' }, []], bodyCompon);
		    });
		});
	    }
	},
	{
	    name: "2. zen.renderTree(['dijit.layout.AccordionContainer', {...}, []], ...) renders a Zen tree",
	    runTest: function() {
		require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
		    win.withDoc(iframeDoc, function() {
			zen.renderTree(
			    ["dijit.layout.AccordionContainer",
			     {style:{width:"100%",height:"40px",backgroundColor:"green"}},
			     []],
			    bodyCompon);
		    });
		});
	    }
	},
	{
	    name: "3. zen.renderTree(['DIV', {...}, [['dijit.layout.AccordionContainer', ...]]], ...) renders a Zen tree",
	    runTest: function() {
		require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
		    win.withDoc(iframeDoc, function() {
			zen.renderTree(
			    ["DIV", {id:"workingNode"},
			     [["dijit.layout.AccordionContainer",
			       {style:{width:"100%",height:"60px",backgroundColor:"yellow"}},
			       []]]],
			    bodyCompon);
		    });
		});
	    }
	},
	{
	    name: "4. zen.renderTree() renders a Zen tree",
	    runTest: function() {
		require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
		    win.withDoc(iframeDoc, function() {
			zen.renderTree(
			    ["DIV", {id:"workingNode"},
			     [["dijit.layout.AccordionContainer",
			       {style:{width:"100%",height:"100px",backgroundColor:"orange"}},
			       [["dijit.layout.AccordionPane",
				 {title:"pane 1", style:{width:"100%",height:"100%",backgroundColor:"purple"}},
				 [["DIV", {}, []]]],
				["dijit.layout.AccordionPane",
				 {title:"pane 2", style:{width:"100%",height:"100%",backgroundColor:"red"}},
				 [["DIV", {},
				   []]]]]]]],
			    bodyCompon);
		    });
		});
	    }
	}
    ]);
