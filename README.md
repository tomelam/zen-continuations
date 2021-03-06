# zen-continuations
A version of the Zen toolkit to enable experiments in continuations using jsScheme

This directory was copied from web-page-editing/ , which experimented
with the modification of IFRAMES. The best version of
that is in .../experiments/ . That version depended upon Ruby on Rails;
the version in the present directory does not. The version here can
be served by Apache, for example.

dojo/ is a symbolic link to the Dojo source code, version 1.7.2. It won't
be easy to browse Dojo code randomly via this website because the webserver
(Apache 2) is not set up for that. If you know the relative pathname
of a Dojo file, you will still not be able to browse it: you will get a
403 (forbidden) error.

The conf/ directory is the working jsScheme code I wrote at my big old company.
This jsScheme code used to create much or most of the user interface of Zen,
though not the unusual event handlers, which are coded in JavaScript.

doc/ contains useful pointers to advanced subjects related to Zen.
doc/balsamiq/* are Zen mockups. Get the mockup app at balsamiq.com. These
mockups are for version 3 of Balsamiq.

zen-user-config/* are some saved Zen configurations created using the old
Zen at my big old company. This is jsScheme code, but it is not hand coded.
Running it in jsScheme would reproduce some old Zen pages I created using
Zen's user interface. Now it is hopelessly broken.

jsScheme/ contains the jsScheme extracted from the version at
bluishcoder.co.nz.

scheme-code/ contains Scheme code to complement the working jsScheme on
bluishcoder.co.nz. cont.scm is a very simple continuation. dyn-wind.scm
is a dynamic wind test. handler.scm is an interesting test I wrote (I can't
remember the details) to pass Scheme continuations between JavaScript even
handlers.

scm/ contains the parts of the Zen-specific jsScheme code I wrote for my big
old company. This does not include jsScheme itself.

SAVED_HTML/ contains scrapped HTML files I nevertheless am afraid to throw
away because I might need them to fix some broken thing or other.

json2.js is a safe JavaScript Object Notation parser. The use of JavaScript's
eval has security issues because it can compile and execute any JavaScript
program. See json.org and json.org/js.html .

php/save_file.php is an 8-line CGI programme I used at my
big old company to save user-created Zen configurations.
