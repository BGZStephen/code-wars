package main

import "strings"

type MyString string

func (s MyString) IsUpperCase() bool {
	return strings.ToUpper(string(s)) == string(s)
}
