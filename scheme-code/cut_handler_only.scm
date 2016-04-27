;; This example picks up a continuation in a click-event handler
;;
;; To test this, click the pink, green, or blue DIV twice, slowly.
;; You will see that although the event handler remains active,
;; "DIV was clicked" is only printed once. Thus it can be seen
;; that the function passed to when-cut-is-pressed waits for a
;; 

(define cont #f)

(define (handler this event)
  (display "handler: ")
  (display "click on tag: ")
  (display (get-prop this "tagName"))
  (display ", with id: ")
  (display (get-prop this "id"))
  (newline)
  (cont))

(set-handler! (js-eval "document.getElementById('zen_canvas')") "onclick" handler)

(define (when-cut-is-pressed do-this)
  (let ((first-call #t))
    (call/cc (lambda (k) (set! cont k)))
    (if first-call
	(set! first-call #f)
	(let ()
	  (do-this)
	  (set! cont #f)))))

(when-cut-is-pressed
 (lambda ()
   (display "DIV was clicked")
   (newline)))
