;
; Very simple continuation test
;
(define cont #f)
(define (test)
  (let ((i 0))
    (call/cc (lambda (k) (set! cont k)))
    (set! i (+ i 1))
    i))