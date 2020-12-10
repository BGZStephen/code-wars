;; Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

;; Example: arr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

;; None of the arrays will be empty, so you don't have to worry about that!

(ns kata)

(defn remove-every-other [arr]
  (keep-indexed #(fn [index item] (when (= (mod index 2) 0) item)) arr))
