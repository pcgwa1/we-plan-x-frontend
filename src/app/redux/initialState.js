import layoutConfig from "./gridLayoutConfig";

const initialState = {
    data: {
        block1: {
            type: "line",
            title: "Block 1",
            data: [
                {
                    time: "5:08 AM",
                    value: 3738
                },
                {
                    time: "4:52 PM",
                    value: 2135
                },
                {
                    time: "4:04 AM",
                    value: 2649
                },
                {
                    time: "10:17 AM",
                    value: 560
                },
                {
                    time: "11:39 AM",
                    value: 3942
                },
                {
                    time: "1:41 PM",
                    value: 3421
                },
                {
                    time: "6:39 AM",
                    value: 2634
                },
                {
                    time: "5:08 PM",
                    value: 2298
                },
                {
                    time: "2:46 AM",
                    value: 2231
                },
                {
                    time: "10:56 PM",
                    value: 921
                },
                {
                    time: "3:48 AM",
                    value: 4047
                },
                {
                    time: "4:30 AM",
                    value: 4186
                },
                {
                    time: "10:44 PM",
                    value: 4350
                },
                {
                    time: "12:41 AM",
                    value: 3057
                },
                {
                    time: "7:16 PM",
                    value: 524
                },
                {
                    time: "9:47 AM",
                    value: 2924
                },
                {
                    time: "5:43 PM",
                    value: 173
                },
                {
                    time: "12:13 AM",
                    value: 1244
                },
                {
                    time: "2:07 AM",
                    value: 631
                },
                {
                    time: "7:37 AM",
                    value: 2216
                },
                {
                    time: "10:00 AM",
                    value: 3112
                },
                {
                    time: "11:21 PM",
                    value: 4318
                },
                {
                    time: "10:38 PM",
                    value: 1788
                },
                {
                    time: "2:36 PM",
                    value: 4382
                },
                {
                    time: "1:48 AM",
                    value: 142
                },
                {
                    time: "8:12 AM",
                    value: 423
                },
                {
                    time: "6:01 AM",
                    value: 260
                },
                {
                    time: "9:05 AM",
                    value: 1327
                },
                {
                    time: "1:41 AM",
                    value: 1347
                },
                {
                    time: "9:08 AM",
                    value: 3983
                },
                {
                    time: "12:31 AM",
                    value: 960
                },
                {
                    time: "2:59 PM",
                    value: 4989
                },
                {
                    time: "9:43 AM",
                    value: 2974
                },
                {
                    time: "7:46 PM",
                    value: 1896
                },
                {
                    time: "1:02 PM",
                    value: 111
                },
                {
                    time: "10:33 AM",
                    value: 1868
                },
                {
                    time: "12:37 PM",
                    value: 4486
                },
                {
                    time: "11:30 AM",
                    value: 4383
                },
                {
                    time: "8:01 AM",
                    value: 924
                },
                {
                    time: "12:17 PM",
                    value: 1679
                },
                {
                    time: "9:03 AM",
                    value: 4815
                },
                {
                    time: "7:20 AM",
                    value: 1916
                },
                {
                    time: "9:52 PM",
                    value: 1173
                },
                {
                    time: "10:34 AM",
                    value: 146
                },
                {
                    time: "1:13 PM",
                    value: 3722
                },
                {
                    time: "4:38 AM",
                    value: 1912
                },
                {
                    time: "3:55 AM",
                    value: 4101
                },
                {
                    time: "1:55 PM",
                    value: 3782
                },
                {
                    time: "4:59 PM",
                    value: 3795
                }
            ]
        },
        block2: {
            type: "bar",
            title: "Block 2",
            data: [
                {
                    time: "11:01 PM",
                    value: 2584
                },
                {
                    time: "5:27 AM",
                    value: 4601
                },
                {
                    time: "12:25 AM",
                    value: 2051
                },
                {
                    time: "9:44 AM",
                    value: 4797
                },
                {
                    time: "3:08 PM",
                    value: 1731
                },
                {
                    time: "3:35 PM",
                    value: 2966
                },
                {
                    time: "6:54 AM",
                    value: 3129
                },
                {
                    time: "6:22 AM",
                    value: 3152
                },
                {
                    time: "1:00 PM",
                    value: 1912
                },
                {
                    time: "4:45 PM",
                    value: 4969
                },
                {
                    time: "6:22 AM",
                    value: 3150
                },
                {
                    time: "8:47 AM",
                    value: 1891
                },
                {
                    time: "10:51 AM",
                    value: 2708
                },
                {
                    time: "1:10 AM",
                    value: 324
                },
                {
                    time: "12:20 AM",
                    value: 2374
                },
                {
                    time: "8:51 AM",
                    value: 2265
                },
                {
                    time: "6:52 PM",
                    value: 3601
                },
                {
                    time: "6:03 AM",
                    value: 4022
                },
                {
                    time: "11:15 AM",
                    value: 4140
                },
                {
                    time: "10:57 PM",
                    value: 373
                },
                {
                    time: "9:30 AM",
                    value: 2498
                },
                {
                    time: "11:22 AM",
                    value: 403
                },
                {
                    time: "6:21 PM",
                    value: 2825
                },
                {
                    time: "9:27 AM",
                    value: 1549
                },
                {
                    time: "11:05 PM",
                    value: 2476
                },
                {
                    time: "5:33 PM",
                    value: 458
                },
                {
                    time: "8:25 PM",
                    value: 983
                },
                {
                    time: "5:38 PM",
                    value: 3597
                },
                {
                    time: "10:42 PM",
                    value: 2107
                }
            ]
        },
        block3: {
            type: "pie",
            title: "Block 3",
            data: [
                {
                    time: "8:09 AM",
                    value: 4408
                },
                {
                    time: "10:28 AM",
                    value: 3644
                },
                {
                    time: "8:11 PM",
                    value: 4861
                },
                {
                    time: "1:26 AM",
                    value: 2394
                },
                {
                    time: "6:55 PM",
                    value: 2937
                },
                {
                    time: "11:21 PM",
                    value: 4806
                },
                {
                    time: "8:10 PM",
                    value: 3688
                },
                {
                    time: "4:07 AM",
                    value: 3182
                },
                {
                    time: "9:26 PM",
                    value: 1281
                },
                {
                    time: "11:44 AM",
                    value: 2058
                },
                {
                    time: "3:19 PM",
                    value: 939
                },
                {
                    time: "9:03 PM",
                    value: 2193
                },
                {
                    time: "8:07 AM",
                    value: 3201
                },
                {
                    time: "7:05 PM",
                    value: 2679
                },
                {
                    time: "3:32 PM",
                    value: 4651
                },
                {
                    time: "2:36 AM",
                    value: 3895
                },
                {
                    time: "1:52 AM",
                    value: 3914
                },
                {
                    time: "12:52 AM",
                    value: 4085
                },
                {
                    time: "10:04 AM",
                    value: 264
                },
                {
                    time: "5:23 AM",
                    value: 4148
                },
                {
                    time: "2:57 PM",
                    value: 4821
                },
                {
                    time: "11:53 PM",
                    value: 1106
                },
                {
                    time: "2:51 AM",
                    value: 3802
                },
                {
                    time: "5:58 AM",
                    value: 3507
                },
                {
                    time: "12:03 AM",
                    value: 2362
                },
                {
                    time: "7:44 AM",
                    value: 2392
                },
                {
                    time: "2:11 PM",
                    value: 3857
                },
                {
                    time: "5:05 AM",
                    value: 4673
                },
                {
                    time: "1:17 PM",
                    value: 4782
                },
                {
                    time: "9:49 PM",
                    value: 1162
                },
                {
                    time: "12:37 AM",
                    value: 2622
                },
                {
                    time: "1:37 PM",
                    value: 2993
                }
            ]
        },
        block4: {
            type: "area",
            title: "Block 4",
            data: [
                {
                    time: "8:54 PM",
                    value: 1690
                },
                {
                    time: "10:50 AM",
                    value: 2876
                },
                {
                    time: "2:22 AM",
                    value: 2779
                },
                {
                    time: "11:11 AM",
                    value: 4147
                },
                {
                    time: "5:23 PM",
                    value: 3179
                },
                {
                    time: "5:16 AM",
                    value: 3543
                },
                {
                    time: "2:02 PM",
                    value: 1362
                },
                {
                    time: "6:06 AM",
                    value: 478
                },
                {
                    time: "11:06 PM",
                    value: 1243
                },
                {
                    time: "4:53 PM",
                    value: 464
                },
                {
                    time: "5:50 PM",
                    value: 3688
                },
                {
                    time: "6:02 PM",
                    value: 1044
                },
                {
                    time: "1:00 AM",
                    value: 1582
                },
                {
                    time: "2:46 AM",
                    value: 1990
                },
                {
                    time: "2:42 PM",
                    value: 4452
                },
                {
                    time: "10:03 AM",
                    value: 186
                },
                {
                    time: "8:17 AM",
                    value: 613
                },
                {
                    time: "3:50 PM",
                    value: 167
                },
                {
                    time: "8:03 AM",
                    value: 4581
                },
                {
                    time: "8:09 PM",
                    value: 3458
                }
            ]
        }
    },
    layouts: layoutConfig,
    breakpoint: "lg"
};

export default initialState;
