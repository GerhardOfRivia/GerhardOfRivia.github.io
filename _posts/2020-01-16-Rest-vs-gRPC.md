---
layout: posts
---

### python flask rest vs python grpc

Want to show why when doing large message processing with gRPC can be better then rest. For this I used Google Cloud Platform and tested it with some f1-micro instances. For the first test I sent two numbers to be added together, something simple. For the data test I sent a simple image 1.58 MB in size and extracted the size out of the image. With this both applications were written in python and I used a simple flask app for the rest server.

| # | Region | Zone |
| --- | --- | --- |
| 1 | us-central1-a | us-central1-a |
| 2 | us-west1-a | us-central1-b |

I wanted to also test different regions as the more data you send the more the latency increases.

| Method | Local | Same-Zone | Different Region | Units |
|--- |--- |--- |--- |--- |
|   REST add| 2.076889 | 4.229187 | 72.282943 | Milliseconds |
|   gRPC add| 0.168965 | 0.238297 | 0.4623649 | Milliseconds |
|   REST img| 2.823159 | 33.10311 | 722.64836 | Milliseconds |
|   gRPC img| 3.930908 | 4.400332 | 4.3336850 | Milliseconds |
|   PING    | 0.027000 | 1.489000 | 35.594000 | Milliseconds |

> Measurements are the avgerage of 1000 requests 

gRPC is faster in both indavidual calls along with bulk calls. The overhead in rest with restablishing the tcp connection for each call adds time to each call but also allows each call to be item potent. While grpc uses a single tcp connection reducing the time needed per call. With this the consistency is better with gRPC over REST as the min and max are closer to the avgerage. As for the local difference with the different zone, using a machine with only a single core probably increased the context switching on the single core cpu. Using a different language like go that does software context switching you could host both the sender and reciever on different go routines and see better preformance.

| Method | Measurement | Local | Same-Zone | Different Region | Units |
|--- |--- |--- |--- |--- |
|   rest-add | min | 1.724 | 3.336 | 67.27 | Milliseconds |
|   rest-add | max | 18.687 | 25.167 | 130.336 | Milliseconds |
|   rest-add | avg | 2.076889 | 4.229187 |  72.282944 | Milliseconds |
|   grpc-add | min | 0.145 | 0.157 | 0.394 | Milliseconds |
|   grpc-add | max | 1.143 | 1.067 | 1.072 | Milliseconds |
|   grpc-add | avg | 0.168965 | 0.238297 | 0.462365 | Milliseconds |
|   rest-img | min | 2.443 | 21.344 | 592.812 | Milliseconds |
|   rest-img | max | 17.18 | 271.28 | 24263.899 | Milliseconds |
|   rest-img | avg | 2.823159 | 33.103111 | 722.648364 | Milliseconds |
|   grpc-img | min | 3.547 | 4.097 | 4.16 | Milliseconds |
|   grpc-img | max | 6.321 | 9.462 | 7.659 | Milliseconds |
|   grpc-img | avg | 3.930909 | 4.400333 | 4.333685 | Milliseconds |

In conclusion when you need to send and process large sets of requests grpc has some benefits over rest.

‾\_(ツ)_/‾
