dojo.provide("zen.Debug");

zen.Debug = function(traceOn) {
    this.traceOn = traceOn;
    this.functionHash = [];
};

dojo.extend(zen.Debug, {
    dirThis: function (label, thing) {
	this.group(label);
	this.dir(thing);
	this.groupEnd();
    },
    info: function() {
	if (this.traceOn) {
	    console.info.apply(console.info, arguments);
	}
    },
    warn: function() {
	if (this.traceOn) {
	    console.warn.apply(console.warn, arguments);
	}
    },
    debug: function() {
	if (this.traceOn) {
	    console.debug.apply(console.debug, arguments);
	}
    },
    group: function() {
	if (this.traceOn) {
	    console.group.apply(console.group, arguments);
	}
    },
    groupEnd: function() {
	if (this.traceOn) {
	    console.groupEnd.apply(console.groupEnd, arguments);
	}
    },
    dir: function() {
	if (this.traceOn) {
	    console.dir.apply(console.dir, arguments);
	}
    },
    // Trace every call to a function.  Somewhat inspired by Lisp's TRACE.
    // This makes it unnecessary to add a debug statement for every call
    // to a function.  This also works with methods.  The traced function
    // or method should be replaced by the return value of this.trace .
    trace: function (fn, name) {
	this.debug("TRACE'ing " + name);
	if (!this.functionHash[fn]) {
	    this.functionHash[fn] = name;
	}
	else {
	    this.warn('function ' + name + ' is already in the function hash table as ' + fn + '!');
	}
	return function () {
            //this.debug("Calling " + fn);  // FIXME: Consider using zen.group & zen.dir.
	    this.group("Calling " + this.functionHash[fn] + " with these arguments");
	    this.dir(dojo._toArray(arguments));
	    this.groupEnd();
            fn.apply(this, arguments);
	};
    },
    traceDnd: function () {
	dojo.dnd._manager.overSource = this.trace(dojo.dnd._manager.overSource, 'overSource');
	dojo.dnd._manager.outSource = this.trace(dojo.dnd._manager.outSource, 'outSource');
	dojo.dnd._manager.startDrag = this.trace(dojo.dnd._manager.startDrag, 'startDrag');
	dojo.dnd._manager.canDrop = this.trace(dojo.dnd._manager.canDrop, 'canDrop');
	dojo.dnd._manager.stopDrag = this.trace(dojo.dnd._manager.stopDrag, 'stopDrag');
	//dojo.dnd._manager.makeAvatar = this.trace(dojo.dnd._manager.makeAvatar, 'makeAvatar');  // There might be some problem with makeAvatar.
	dojo.dnd._manager.updateAvatar = this.trace(dojo.dnd._manager.updateAvatar, 'updateAvatar');
	dojo.dnd._manager.onMouseMove = this.trace(dojo.dnd._manager.onMouseMove, 'onMouseMove');
	dojo.dnd._manager.onMouseUp = this.trace(dojo.dnd._manager.onMouseUp, 'onMouseUp');
	dojo.dnd._manager.onKeyDown = this.trace(dojo.dnd._manager.onKeyDown, 'onKeyDown');
	dojo.dnd._manager.onKeyUp = this.trace(dojo.dnd._manager.onKeyUp, 'onKeyUp');
	dojo.dnd._manager._setCopyStatus = this.trace(dojo.dnd._manager._setCopyStatus, '_setCopyStatus');
    }
});
