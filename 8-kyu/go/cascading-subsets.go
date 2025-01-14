package main

import "fmt"

func main() {
	fmt.Println(EachCons([]int{3, 5, 8, 13}, 2))
}

func EachCons(arr []int, n int) [][]int {
	res := [][]int{}
	start := 0
  end := start + n
	arrayLength := len(arr)

	for end <= arrayLength {
		res = append(res, arr[start:end])
		start += 1
		end += 1
	}

	return res
}
