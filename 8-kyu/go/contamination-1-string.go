package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(Contamination("foo", "b"))
}

func Contamination(text, char string) string {
	return strings.Repeat(char, len(text))
}
