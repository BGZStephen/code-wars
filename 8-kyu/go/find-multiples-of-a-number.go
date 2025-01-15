package main

func FindMultiples(integer, limit int) []int {
	res := []int{}

	for integer <= limit {
		res = append(res, integer)

		integer = integer + res[0]
	}

	return res
}
