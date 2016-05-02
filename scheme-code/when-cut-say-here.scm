;; This works. Leave it alone!
(define handle-cut #f)


(define (say-here foo)
  (display "here")
  (newline))

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))






(say-here (when-cut))
