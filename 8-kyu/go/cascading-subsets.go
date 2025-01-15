package main

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
