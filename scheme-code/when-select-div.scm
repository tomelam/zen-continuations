;; This works. Leave it alone!

(define handle-cut #f)
(define handle-canvas-click #f)

(define (when-cut)
  (call/cc
   (lambda (k)
     (set! handle-cut k))))

(define (when-click-canvas)
  (call/cc
   (lambda (k)
     (set! handle-canvas-click k))))

;; Define empty procedures to be performed
;; when the user creates input. Later, these
;; procedures will be redefined.
(define cut (lambda ()))
(define select-element-1 (lambda ()))

;; Create a general-purpose continuation
;; to handle the pressing of the CUT button.
((lambda ()
   (when-cut)
   (cut)))

;; Redefine the procedure to be performed
;; when the user pressing the CUT button.
;; The procedure sets the temporary empty
;; continuation for the clicking of a
;; DOM element in the 'zen canvas' then
;; redefines that continuation to print
;; 'You clicked a DOM element'.
(define cut
  (lambda ()
    (display "You pressed CUT!")
    (newline)
    ((lambda ()
       (when-click-canvas)
       (select-element-1)))
    (define select-element-1
      (lambda ()
	(display "You clicked a DOM element!")
	(newline)))))
