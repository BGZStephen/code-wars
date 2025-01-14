package main

import "fmt"
import "strings"

func main() {
  fmt.Println(NoSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))
}

func NoSpace(word string) string {
	return strings.Replace(word, " ", "", -1)
}