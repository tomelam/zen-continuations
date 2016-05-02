;; This works. Leave it alone!

(define handle-cut #f)

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(define (when-click-canvas)
  (call/cc
   (lambda (k)
     (set! handle-canvas-click k))))

(define cut (lambda ())) ;; Empty procedure.
((lambda ()
   (when-cut)
   (cut)))

(define cut
  (lambda ()
    (display "You pressed CUT!")
    (newline)))
