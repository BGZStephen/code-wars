package main

import "fmt"

func main() {
  fmt.Println(NthEven(2))
}

func NthEven(n int) int {
	return (n - 1) * 2
}