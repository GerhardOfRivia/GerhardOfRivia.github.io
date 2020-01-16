---
layout: posts
---

### rest vs grpc

Want to show why when doing large message processing with gRPC can be better then rest. For this i used google cloud platform and tested it with some f1-micro instances.

| # | Region | Zone |
| --- | --- | --- |
| 1 | us-central1-a | us-central1-a |
| 2 | us-west1-a | us-central1-b |


| Method | Local | Same-Zone | Different Region | Units |
|--- |--- |--- |--- |--- |
|   REST add| 2.076889 | 4.229187 | 72.282943 | Milliseconds |
|   gRPC add| 0.168965 | 0.238297 | 0.4623649 | Milliseconds |
|   REST img| 2.823159 | 33.10311 | 722.64836 | Milliseconds |
|   gRPC img| 3.930908 | 4.400332 | 4.3336850 | Milliseconds |
|   PING    | 0.027000 | 1.489000 | 35.594000 | Milliseconds |

> Measurements are the avgerage of 1000 requests 

gRPC is faster in both indavidual calls along with bulk calls. The overhead in rest with restablishing the tcp connection for each call adds time to each call but also allows each call to be item potent. While grpc uses a single tcp connection reducing the time needed per call. With this the consistency is better with gRPC over REST as the min and max are closer to the avgerage. As for the local difference with the different zone, using a machine with only a single core probably increased the context switching on the single core cpu. Using a different language like go that does software context switching you could host both the sender and reciever on different go routines and see better preformance.

| Method | Local | Same-Zone | Different Region | Units |
|--- |--- |--- |--- |--- |
|   REST add| min 0.001724 max 0.018687 avg 0.002076889 | min 0.003336 max 0.025167 avg 0.004229187000000003 |  min 0.06727 max 0.130336 avg 0.07228294399999996| Seconds |
|   gRPC add| min: 0.00014500000000000624 max: 0.0011429999999999774 avg: 0.00016896500000000047 | min: 0.00015699999999996272 max: 0.0010669999999999846 avg: 0.00023829700000000003 | min: 0.00039400000000000546 max: 0.0010719999999999896 avg: 0.00046236499999999936 | Seconds |
|   REST img| min 0.002443 max 0.01718 avg 0.0028231590000000017 | min 0.021344 max 0.27128 avg 0.033103111 | min 0.592812 max 24.263899 avg 0.7226483639999997 | Seconds |
|   gRPC img| min: 0.003547000000000078 max: 0.006320999999999993 avg: 0.003930908999999988 | min: 0.004097000000000017 max: 0.009461999999999998 avg: 0.004400332999999999 | min: 0.0041599999999997195 max: 0.007658999999999999 avg: 0.004333685000000004 | Seconds |

