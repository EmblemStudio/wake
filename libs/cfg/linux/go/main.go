package main

import (
	"fmt"
	"log"
	"encoding/json"
)

// Get grabs a string config (or default) by name
func Get(name string, defaultValue string) string {
	if value, err := findConfiguredStringValue(name); err != nil {
		return defaultValue
	} else {
		return value
	}
}

// GetUM (get unmarshaled) gets and attempts to unmarshal a string config
// returns an error if unmarshal fails
func GetUM(name string, defaultValue interface{}, target *interface{}) error {
	value, err := findConfiguredStringValue(name)
	if err != nil {
		value, err = json.Marshal(defaultValue)
		if err != nil {
			return errors.New(
				fmt.Sprintf(
					"Could not marshal %v to JSON",
					defaultValue,
				),
			)
		}
	}

	data := bytes(value, Get("WAKE_CFG_VALUE_ENCODING", "utf-8"))

	if err := json.Unmarshal(data, target); err != nil {
		return errors.New(
			fmt.Sprintf(
				"Could not unmarshal %T(%v) into %T",
				value,
				value,
				target,
			),
		)
	}

	return nil
}

// Req (required) grabs a required string config by name
func Req(name string) (string, error) {

}

// ReqUM (required unmarshaled) attempts to unmarshal a required config by name
func ReqUM(name string, target *interface{}) error {

}

// main executable, generate requirements and options file
func main() {
	log.Println("running cfg main")
}
