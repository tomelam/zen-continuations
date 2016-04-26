;
; dynamic-wind test
;
(define cc #f)
(dynamic-wind
  (lambda () (display "-in-"))
  (lambda () (call/cc (lambda (x) (set! cc x))) (display "-do-") 0)
  (lambda () (display "-out-")))
(cc)
