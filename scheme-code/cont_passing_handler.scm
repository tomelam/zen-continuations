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
