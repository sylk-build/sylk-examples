package main

import (
	"fmt"
	"time"

	client "github.com/sylk-build/sylk-examples/sylk-iot/clients/go/IotService/v1"
	iotv1 "github.com/sylk-build/sylk-examples/sylk-iot/services/protos/sylklabs/iot/v1"
)

func main() {
	//Init the client
	c := client.Defualt()

	// Construct a message
	msg := iotv1.Topic{
		Name: "default",
	}
	done := make(chan struct{})
	defer close(done)

	// Channel to receive events (sensor data) from the subscription goroutine
	eventCh := make(chan *iotv1.SensorData)
	defer close(eventCh)

	// Start the subscription goroutine in the background
	go c.Subscribe(&msg, eventCh, done)

	// Main loop to process received events
	fmt.Println("Client started. Press Ctrl+C to exit.")
	for {
		select {
		case event := <-eventCh:
			// Process the received payload (sensor data) in the main goroutine
			fmt.Printf("Received payload in main goroutine: %+v\n", event)
			// Your custom processing logic here
		case <-time.After(10 * time.Second):
			// Optional: Add a timeout to do something else if no events received for some time
			fmt.Println("No events received in the last 10 seconds.")
		}
	}
}
