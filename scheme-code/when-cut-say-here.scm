;; This works. Leave it alone!

(define (say-here foo)
  (display "here")
  (newline))

(define handle-cut #f)

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(say-here (when-cut))
