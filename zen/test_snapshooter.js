dojo.provide("zen.test_snapshooter");

dojo.require("dojox.html.styles");
dojo.require("zen");
dojo.require("zen.dojo");
dojo.require("zen.cssParser");

//// To poke around in the iframe where this test changes the DOM,
//// use zen.getRemotePageHandle('testBody') followed by zen.getRemotePageHandle('tdoc', idoc)
//// Then use 

var deferred, messageDivElement, jsonIframeElement, tdoc;

require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
    var iframeDoc = dom.byId("testBody").contentWindow.document, jsonIframeDoc;
    console.debug("iframeDoc => " + iframeDoc);
    win.withDoc(iframeDoc, function() {
	messageDivElement = win.doc.createElement("div");
	win.doc.getElementsByTagName("body")[0].appendChild(messageDivElement);
	jsonIframeElement = win.doc.createElement("iframe");
	dojo.attr(jsonIframeElement, 'id', 'jsonIframe');
	dojo.style(jsonIframeElement, 'display', 'none')
	win.doc.getElementsByTagName("body")[0].appendChild(jsonIframeElement);
	jsonIframeDoc = jsonIframeElement.contentWindow.document;
	tdoc = win.doc.createElement("iframe");
	dojo.attr(tdoc, 'id', 'tdoc');
	win.doc.getElementsByTagName("body")[0].appendChild(tdoc);
	ss = dojox.html.styles.getStyleSheets()[1]; // Styles copied from remote domains.
    });
});

// A callback function -- called when the iframe onload function is triggered.
copyRemotePageAndResize = function() {
    messageDivElement.innerHTML = "The page was fetched. Please wait while it is converted and inserted into the iframe ...";
    console.log("The page was fetched. Please wait while it is converted and inserted into the iframe ...");
    zen.copyRemotePage(jsonIframeElement, tdoc);
    dojo.attr(tdoc, "style",
	      "width:" + remoteWidth + "px; height:" +
	      remoteHeight + "px");
    messageDivElement.innerHTML = "The page was converted and inserted into the iframe. All done!";

    try {
        // check with doh.t and doh.is
	console.debug("Calling the deferred callback function");
        deferred.callback(true);
    } catch (e) {
        deferred.errback(e);
    }
}

// background: url("//ssl.gstatic.com/gb/images/b_8d5afc09.png") repeat
// background: url("/images/nav_logo107.png") no-repeat 
//FIXME: Use locals, not globals.
tests.register(
    "zen.test_snapshooter",
    [
	{
	    name: "1. Load, convert and insert Facebook.com main page",
	    setUp: function() {
		zen.init();
		messageDivElement.innerHTML = "Please wait while the remote page is being fetched ...";
		console.log("Please wait while the remote page is being fetched ...");
		// See http://bugs.dojotoolkit.org/ticket/9609
		if (jsonIframeElement.addEventListener) {
		    jsonIframeElement.addEventListener("load", copyRemotePageAndResize, false);
		} else if (jsonIframeElement.attachEvent) {
		    jsonIframeElement.attachEvent("onload", copyRemotePageAndResize);
		}
	    },
	    runTest: function() {
		deferred = new doh.Deferred();
		deferred.addBoth(function() {
		    try {
			console.debug("The deferred callback function");
			// check with doh.t and doh.is
			return true;
		    } catch (e) {
			deferred.errback(e);
		    }
		});
		jsonIframeElement.src = "../../../../web/facebook.com";
		return deferred;
	    },
	    timeout: 60000
	}
    ]);