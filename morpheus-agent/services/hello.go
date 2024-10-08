// hello.go
package main

import (
	"fmt"
	"syscall/js"
)

func helloWorld(this js.Value, inputs []js.Value) interface{} {
	fmt.Println("Hello, World! %+v", inputs)
	return nil
}

func main() {
	// Expose helloWorld function to JS
	js.Global().Set("helloWorld", js.FuncOf(helloWorld))

	// Block to keep the WASM running
	select {}
}
