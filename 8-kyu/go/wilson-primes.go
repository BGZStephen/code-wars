package main

import "fmt"

func main() {
  fmt.Println(AmIWilson(563))
}

func AmIWilson(n int) bool {
  return n == 5 || n == 13 || n == 563
}
