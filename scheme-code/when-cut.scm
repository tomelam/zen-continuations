;; This works. Leave it alone!

(define handle-cut #f)

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(when-cut)
