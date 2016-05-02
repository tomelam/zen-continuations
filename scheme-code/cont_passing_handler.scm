;; This was a kind of "big bang" approach to getting a coordinated series of
;; continuations to handle a complex user interaction -- but I haven't
;; finished writing the code. I need to fall back to the smallest possible
;; steps and get the pieces to work one by one.

(define cont #f)
(define i 0)

(define (test)
  (call/cc (lambda (k) (set! cont k)))
  (set! i (+ i 1))
  i)

(test)

(define (handler this event)
  (display "click on tag: ")
  (display (get-prop this "tagName"))
  (newline)
  (display "i = ")
  (display i)
  (newline)
  (cont))

(set-handler! (js-eval "document.getElementById('zen_canvas')") "onclick" handler)
