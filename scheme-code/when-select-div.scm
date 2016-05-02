(define handle-cut #f)
(define handle-click-canvas #f)

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(define (when-click-canvas)
  (call/cc
   (lambda (k)
     (set! handle-click-canvas k))))

(when-click-canvas (when-cut))
