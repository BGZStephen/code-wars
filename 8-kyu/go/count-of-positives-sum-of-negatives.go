package main

func CountPositivesSumNegatives(numbers []int) []int {
	res := []int{0, 0}

	for _, value := range numbers {
		if value < 0 {
			res[0] = res[0] + 1
			continue
		}

		res[1] = res[1] + value
	}

	return res
}
