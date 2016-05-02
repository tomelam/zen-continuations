;; Not yet working.
(define handle-cut #f)
(define handle-canvas-click #f)

(define (say-here foo)
  (display "here")
  (newline))

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(define (when-click-canvas)
  (call/cc
   (lambda (k)
     (set! handle-canvas-click k))))

(say-here (when-cut))

(say-here (when-click-canvas))
