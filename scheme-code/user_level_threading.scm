;; From https://bluishcoder.co.nz/2006/05/05/scheme-implementation-in-javascript.html

(define abort #f)

(define (yield)
  (call/cc
   (lambda (k)
     (set-timeout! k 10)
     (abort))))

(define (spawn thunk)
  (call/cc
   (lambda (k)
     (set! abort k)
     (thunk))))

(define (fib n)
  (yield)
  (if (= n 0)
    0
    (if (= n 1)
      1
      (+ (fib (- n 1)) (fib (- n 2))))))

(spawn (lambda () (display (fib 10))))
