;;
;; Very simple continuation example
;;
;; After the continuation inside test is created, each call to cont
;; uses that continuation -- and thus adds 1 to the bound variable
;; i and returns i's value.

(define cont #f)
(define (test)
  (let ((i 0))
    (call/cc (lambda (k) (set! cont k)))
    (set! i (+ i 1))
    i))

(test)
(cont)
(cont)
(cont)
