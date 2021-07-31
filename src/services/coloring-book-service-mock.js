export default class ColoringBookServiceMock {
    data = [
        {
            id: 1,
            title: "triangle",
            paths: [
                {
                    id: 1,
                    d: "M 10 210 L 110 10 L 210 210 z",
                },
            ],
        },
        {
            id: 2,
            title: "sock",
            paths: [
                {
                    id: 1,
                    d: "M42.4 10h36.4v14.3H42.4z",
                },
                {
                    id: 2,
                    d:
                        "M41.7 48.3l-12.4 8.3c-8.4 5.6-10.6 16.9-5.1 25.3 5.6 8.4 16.9 10.6 25.3 5.1l18.8-12.5c6.6-4.4 10.6-11.8 10.6-19.8V27.4H42.4V47c0 .6-.2 1-.7 1.3z",
                },
            ],
        },
        {
            id: 3,
            title: "christmas-tree",
            paths: [
                {
                    id: 1,
                    d:
                        "M84.66 -0.01c7.08,12.55 13.36,29.01 21.25,40.25 6.33,9.03 14.18,15.46 21.27,21.24 -14.17,-1.11 -27.95,-10.4 -42.53,-10.4 -14.58,0.01 -28.34,9.31 -42.51,10.4 7.08,-5.76 14.9,-12.12 21.25,-21.04 7.87,-11.05 14.18,-27.14 21.27,-40.45z",
                },
                {
                    id: 2,
                    d:
                        "M102.22 54.55c4.12,8.09 8.39,15.83 13.04,22.34 9.12,12.74 20.42,21.82 30.63,29.98 -20.41,-1.56 -40.25,-14.69 -61.24,-14.68 -21,0.01 -40.82,13.14 -61.22,14.68 10.2,-8.13 21.45,-17.11 30.6,-29.7 4.78,-6.58 9.16,-14.44 13.4,-22.73 5.66,-1.86 11.38,-3.35 17.22,-3.36 5.97,0 11.8,1.56 17.57,3.47z",
                },
                {
                    id: 3,
                    d:
                        "M108.95 96.99c5.69,11.18 11.59,21.89 18.03,30.88 12.6,17.62 28.22,30.17 42.35,41.46 -28.23,-2.16 -55.65,-20.31 -84.69,-20.29 -29.03,0.01 -56.44,18.16 -84.65,20.29 14.11,-11.24 29.67,-23.66 42.32,-41.07 6.61,-9.1 12.67,-19.96 18.53,-31.42 7.82,-2.57 15.72,-4.64 23.81,-4.65 8.25,0 16.31,2.15 24.3,4.8z",
                },
            ],
        },
        {
            id: 4,
            title: "cat",
            paths: [
                {
                    id: 1,
                    d:
                        "M233.2,172.4c-0.1,0.8-0.5,2.3-1.2,4.5c-5.8,17.7-30.4,76.6-30.9,90.1c-0.3-0.1-0.6-0.2-1-0.3 c-2.8-0.7-5.8-0.8-8.9-0.2c-3.8,0.7-10,6.7-13.9,13.4l0,0c-0.4,0.7-0.8,1.5-1.2,2.2l0,0c-1.7,3.4-2.7,6.8-2.5,9.7l-3.7-0.1 c0-2.2-0.8-4.7-2.1-7.1c0,0,0-0.1-0.1-0.2c-3.6-7-11-14-15.4-14.8c-2.5-0.4-4.9-0.4-7.3-0.1c-4.4-16.8-34.9-67.9-40.8-83.9 c-0.7-1.8-1-3.2-1-4c0.3-7,8.3-23.8,10.6-28.4c14.8,14,51.3,45.7,57.8,65.9c0.3,1.1,1.2,1.8,2.2,2c1.1,0.2,2.1-0.2,2.8-1.1 c10.3-12.9,37.7-48.4,50.1-76.6C228.5,148.7,233.8,166.2,233.2,172.4z",
                },
                {
                    id: 2,
                    d:
                        "M224.1,74.5c-1.5-3-3.4-6.5-5.4-10.2c-4.4-8.1-9.5-16.9-13.4-22c0,0-5.9-5.4-1.7-14.1 c3.6-7.4,11.7-16.5,14.9-22.2c0,0,0-0.1,0.1-0.1c0.2-0.3,0.1-0.6-0.1-0.8c-0.2-0.2-0.6-0.2-0.8,0c-7.4,5.5-19.4,10.5-26.4,14.8 c-2.1,1.3-3.8,2.5-4.7,3.7c-3.1-1.7-9.9-3-17.9-3.4c-6.2-0.3-13.2-0.2-19.8,0.5c-5.3,0.6-10.4,1.5-14.7,2.8 c-0.7,0.2-1.4,0.4-2.1,0.7c0,0-7.6,3-29.7-22.4c-0.2-0.2-0.5-0.3-0.8-0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0.8,5.3,4,19.3,14.4,31.2 c0,0,3.3,7.2-2,15c-2.3,3.4-5.4,8.3-8.4,13.8c-2.5,4.7-4.9,9.9-6.6,15.2l0,0c-0.4,1.1-0.7,2.2-1,3.2c-0.8,3-0.2,6.2,1.8,8.6 c0.1,0.1,0.1,0.2,0.2,0.2c6.7,8,15,14.9,24.3,20.2c26.2,14.7,60.4,15.8,89.5-10.6c3.8-3.4,7.5-7.4,11.1-11.8c0,0,0,0,0,0 c2.4-2.9,2.8-6.9,1.1-10.2C225,76.3,224.6,75.5,224.1,74.5z M123.1,45.6c1.3-8.2,9.1-14.9,17.3-14.9c8.2,0,13.8,6.6,12.4,14.9 c-1.3,8.2-9.1,14.9-17.3,14.9C127.3,60.4,121.8,53.7,123.1,45.6z M183,78.5c-0.1,2.1-0.6,4.2-1.4,6.1c-1.3,3.1-3.5,5.5-6,6 c-2,0.4-3.8,0.6-5.5,0.6c-0.6,4.5-4.2,8.7-13.6,8.5c-7.9-0.1-9.5-5.8-9.9-8.5c-1.3-0.1-2.8-0.3-4.4-0.6c-2.3-0.4-4.4-2.6-5.7-5.4 c-0.9-1.8-1.5-3.9-1.7-5.9c-0.2-2,0-4,0.8-5.7c0.8-1.8,2.3-3.3,4.5-4c5-1.6,9.1-1.9,10.1-1.9c-0.1-0.2-0.2-0.5-0.2-0.7 c-0.2-0.7,0.1-1.4,0.7-1.7c2.8-1.5,10.7-1.9,15.7-0.3c0.4,0.1,0.7,0.4,0.9,0.8c0.2,0.4,0.2,0.8,0,1.1c1.4,0,5.1,0,9.6,1.5 c2.5,0.8,4.2,2.5,5.2,4.5C182.8,74.5,183.1,76.4,183,78.5z M184.6,60.4c-8.2,0-15.9-6.6-17.3-14.9c-1.3-8.2,4.2-14.9,12.4-14.9 c8.2,0,15.9,6.6,17.3,14.9C198.3,53.7,192.7,60.4,184.6,60.4z",
                },
                {
                    id: 3,
                    d:
                        "M113.4,48.5c-2.3,3.4-5.4,8.3-8.4,13.8c-10.4-35.9-4-60-4-60c0.8,5.3,4,19.3,14.4,31.2 C115.5,33.5,118.8,40.7,113.4,48.5z",
                },
                {
                    id: 4,
                    d:
                        "M218.7,64.4c-4.4-8.1-9.5-16.9-13.4-22c0,0-5.9-5.4-1.7-14.1c3.6-7.4,11.7-16.5,14.9-22.2 C218.6,7.1,220.8,44.8,218.7,64.4z",
                },
                {
                    id: 5,
                    d: "M218.6,6.1C218.6,6.1,218.6,6.1,218.6,6.1",
                },

                {
                    id: 6,
                    d:
                        "M168.6,20.3c-6.2-0.3-13.2-0.2-19.8,0.5c0-1.7,0.2-6.3,2.3-8.7c0.6-0.6,1.2-1.2,2.1-1.4 c3.6-1.1,9.5-2.4,13,2.6c0.1,0.1,0.2,0.3,0.3,0.4C167.4,15.2,168.2,17.6,168.6,20.3z",
                },
                {
                    id: 7,
                    d:
                        "M191.2,19.9c-2.1,1.3-3.8,2.5-4.7,3.7c-3.1-1.7-9.9-3-17.9-3.4c-0.5-2.7-1.3-5.1-2.2-6.6 c6-5.9,13.1-9.8,17.4-11.7c1.2-0.5,2.4-0.5,3.5,0.1c1.1,0.6,1.9,1.5,2.2,2.8C190.3,8.5,191.4,14.4,191.2,19.9z",
                },
                {
                    id: 8,
                    d:
                        "M151.1,12.1c-2.1,2.4-2.3,6.9-2.3,8.7c-5.3,0.6-10.4,1.5-14.7,2.8c-3.6-7.6-2.6-15.8-1.2-20.6  c0.4-1.3,1.3-2.3,2.6-2.7c1.3-0.4,2.6-0.2,3.7,0.6C142,2.9,146.3,6.6,151.1,12.1z",
                },
                {
                    id: 9,
                    d:
                        "M140.4,30.7c-8.2,0-15.9,6.6-17.3,14.9s4.2,14.9,12.4,14.9c8.2,0,15.9-6.6,17.3-14.9 C154.1,37.4,148.6,30.7,140.4,30.7z M139.1,56.6c-6,0-10.8-4.6-10.8-10.3S133.1,36,139.1,36c6,0,10.8,4.6,10.8,10.3 C150,52,145.1,56.6,139.1,56.6z",
                },
                {
                    id: 10,
                    d:
                        "M196.9,45.6c-1.3-8.2-9.1-14.9-17.3-14.9c-8.2,0-13.8,6.6-12.4,14.9c1.3,8.2,9.1,14.9,17.3,14.9  C192.7,60.4,198.3,53.7,196.9,45.6z M180.2,56.4c-6,0-10.8-4.6-10.8-10.3s4.9-10.3,10.8-10.3c6,0,10.8,4.6,10.8,10.3  S186.2,56.4,180.2,56.4z",
                },
                {
                    id: 11,
                    d:
                        "M139.1,36c-6,0-10.8,4.6-10.8,10.3s4.9,10.3,10.8,10.3c6,0,10.8-4.6,10.8-10.3C150,40.6,145.1,36,139.1,36z   M139.1,54.5c-4.7,0-8.6-3.7-8.6-8.2s3.9-8.2,8.6-8.2c4.7,0,8.6,3.7,8.6,8.2S143.9,54.5,139.1,54.5z",
                },
                {
                    id: 12,
                    d:
                        "M180.2,35.8c-6,0-10.8,4.6-10.8,10.3s4.9,10.3,10.8,10.3c6,0,10.8-4.6,10.8-10.3S186.2,35.8,180.2,35.8z   M180.2,54.3c-4.7,0-8.6-3.7-8.6-8.2s3.9-8.2,8.6-8.2c4.8,0,8.6,3.7,8.6,8.2C188.8,50.6,184.9,54.3,180.2,54.3z",
                },
                {
                    id: 13,
                    d:
                        "M167.2,66.8C167.2,66.8,167.2,66.8,167.2,66.8c-1.2,2.5-3.8,7.6-7.5,9.7c-0.2,0.2-0.5,0.2-0.8,0.2h0  c-0.2,0-0.5-0.1-0.7-0.2c-1.8-1.2-6.6-4.6-8.1-9c-0.1-0.2-0.2-0.5-0.2-0.7c-0.2-0.7,0.1-1.4,0.7-1.7c2.8-1.5,10.7-1.9,15.7-0.3  c0.4,0.1,0.7,0.4,0.9,0.8C167.4,66,167.4,66.4,167.2,66.8z",
                },
                {
                    id: 14,
                    d:
                        "M183,78.5c-0.1,2.1-0.6,4.2-1.4,6.1c-1.3,3.1-3.5,5.5-6,6c-2,0.4-3.8,0.6-5.5,0.6c-7,0.2-10.7-2.9-11.2-10.9  c0.1-1.1,0.1-2.3,0-3.6c0.3,0,0.5-0.1,0.8-0.2c3.6-2.1,6.3-7.2,7.5-9.7c0,0,0,0,0-0.1c1.4,0,5.1,0,9.6,1.5c2.5,0.8,4.2,2.5,5.2,4.5  C182.8,74.5,183.1,76.4,183,78.5z",
                },
                {
                    id: 15,
                    d:
                        "M216.8,103.9c-1.1-1.6-2.3-3.1-3.5-4.5c-0.1-0.1-0.1-0.1-0.2-0.2c-29.1,26.3-63.3,25.3-89.5,10.6  c0,0-0.7,1.2-1.9,3.2c0.3,0.7,0.5,1.5,0.5,2.4c0,0.7-0.1,1.4-0.4,2c0.2,0,0.5,0,0.7,0c3.8,0,6.9,3.1,6.9,6.9c0,1.2-0.3,2.4-0.9,3.4  c1.5-1,3.2-1.6,5.2-1.5c4.3,0.3,7.6,3.9,7.6,8.2c0,0.5-0.1,1.1-0.2,1.5c1.5-1.5,3.5-2.4,5.7-2.4c3.8,0,7,2.7,7.9,6.2  c1.3-2.6,4-4.4,7.2-4.4c3,0,5.6,1.6,7,4c0.8-3.6,4-6.3,7.9-6.3c2.4,0,4.6,1.1,6.1,2.8c-0.2-0.8-0.3-1.7-0.2-2.6  c0.3-3.5,3.2-6.3,6.7-6.6c2.5-0.2,4.9,0.8,6.3,2.6c-0.4-0.9-0.5-2-0.4-3.1c0.2-3.7,3.4-6.7,7.1-6.9c1.5,0,2.9,0.3,4,1.1  c-0.3-0.8-0.4-1.6-0.4-2.4c0-4.1,3.3-7.4,7.4-7.4c0.3,0,0.6,0,1,0.1l0,0c0.6,0.1,1.1,0.2,1.6,0.4c-0.4-0.9-0.7-1.9-0.7-2.9  C215.4,106.5,215.9,105,216.8,103.9z M223.1,114.6c-0.4,0.1-0.7,0.1-1.1,0.1c-0.7,0-1.4-0.1-2.1-0.3c0.6,1.2,0.9,2.5,0.9,3.9  c-0.2,3.8-3.3,6.8-7.1,6.9c-1.5,0-2.9-0.3-4-1.1c0.3,0.8,0.4,1.6,0.4,2.4c0,4.1-3.3,7.4-7.4,7.4c-2.3,0-4.3-1-5.7-2.6  c0.3,0.9,0.5,1.8,0.4,2.8c-0.1,3.7-3,6.8-6.8,7.1c-2.4,0.2-4.6-0.8-6.1-2.4c0.2,0.8,0.3,1.5,0.3,2.4c-0.1,4.2-3.4,7.7-7.5,7.9  c-3.2,0.2-6-1.5-7.5-4c-0.8,3.6-4,6.3-7.9,6.3c-3.8,0-7-2.7-7.9-6.2c-1.3,2.6-4.1,4.4-7.2,4.4c-4.4,0-8-3.5-8.1-7.9  c0-0.6,0-1.3,0.2-1.8c-1.6,1.6-3.8,2.5-6.2,2.4c-4-0.2-7.3-3.5-7.6-7.5c-0.1-1.7,0.3-3.4,1.2-4.7c-1.2,0.8-2.6,1.2-4.1,1.1  c-3.5-0.2-6.3-3-6.5-6.6c0-0.3,0-0.5,0-0.8c-4.8,9.1-9.7,19.9-8.1,23.1c0.5,1,2.8,3.3,6.1,6.5c14.8,14,51.3,45.7,57.8,65.9  c0.3,1.1,1.2,1.8,2.2,2s2.1-0.2,2.8-1.1c10.3-12.9,37.7-48.4,50.1-76.6c0-0.1,0.1-0.2,0.1-0.3c0.6-1.3,1.1-2.7,1.7-4  c1.3-3.4,1.4-7.2,0.2-10.7C227.6,124.9,225.7,119.9,223.1,114.6z",
                },
                {
                    id: 16,
                    d: "M167.6,283c0,0-1.9-45.3-3.8-63.1",
                },
                {
                    id: 17,
                    d:
                        "M72.9,152.8c-3.1-0.5-5.4,0.1-7,1.7c0.2-10.6-8.8-10.5-11.6-10.4c0.2-0.2,0.4-0.3,0.5-0.5  c2.5-2.3,5.1-4,7.7-5.1c0.9-0.4,1.8-0.7,2.7-1l0,0C70.7,137.1,79.7,141.2,72.9,152.8z",
                },
                {
                    id: 18,
                    d:
                        "M65.9,154.4c-2.9,2.7-3.9,8-4.1,13.9c-0.4,9.3-8.2,8.5-8.2,8.5s-20.9,0-5.6-24.9c1.1-1.8,2.2-3.4,3.4-4.8l0,0  c0.9-1.2,1.9-2.2,2.9-3.2C57,143.9,66.1,143.8,65.9,154.4z",
                },
                {
                    id: 19,
                    d:
                        "M88.9,254.1c2.5,5.3,4.4,8.9,4.4,8.9c-3,0.6-6.6,5.2-8.6,10.6c-66.2-8.9-47.3-66.9-6.7-98.6  c10-7.8,3.3-20.8-5.2-22.3c6.8-11.5-2.2-15.7-7.6-15.3c3-0.9,6-1.2,8.8-1.1c2,0.1,4,0.4,5.8,0.8c8,1.8,14.1,6.8,17.4,14.3  c10.4,23.5-13.3,28.1-32.2,60.7C43.9,248.5,88.9,254.1,88.9,254.1z",
                },
                {
                    id: 20,
                    d:
                        "M145.1,269.5c-9,1.3-16.1,8-19,16.7c0,0,0,0,0,0l-3.7-1.2c0,0,0,0,0-0.1c0-0.8-0.1-1.7-0.6-2.7  c-5.2-12.3-17.4-21.5-28.6-19.3c0,0-1.9-3.6-4.4-8.9c-5-10.6-12.4-27.7-11.2-34.9c1.9-10.8,19.7-22.6,19.7-22.6l6.9-10.9  C110.1,201.6,140.7,252.7,145.1,269.5z",
                },
                {
                    id: 21,
                    d:
                        "M256.2,241.8c0,8.5-6.8,21.9-7,22.3c-0.9-0.6-1.8-1-2.6-1.1c-9.2-1.7-17.2,3.6-21.2,12  c-1.1,2.3-1.8,4.7-2.2,7.3c-0.1,0.8-0.1,1.5,0,2.2l0,0c-2.3,1-4.3,1.4-5.5,1.6c0-0.2-0.1-0.3-0.1-0.4c-2.4-9.1-8.6-16.3-16.6-18.7  c0.4-13.4,25-72.4,30.9-90.1C236.2,186.8,256.2,234.2,256.2,241.8z",
                },
                {
                    id: 22,
                    d:
                        "M122.4,285C122.4,285,122.4,285.1,122.4,285c-0.6,9.1-27.6,6.6-27.6,6.6c-12-0.6-12.9-10.1-10-18  c1.9-5.4,5.6-10,8.6-10.6c11.1-2.2,23.4,7,28.6,19.3C122.3,283.3,122.5,284.2,122.4,285z",
                },
                {
                    id: 23,
                    d:
                        "M252.8,291.6c0,0-27.5,2.6-29.5-7.1l0,0c-0.1-0.7-0.2-1.4,0-2.2c0.4-2.6,1.2-5.1,2.2-7.3  c3.9-8.3,11.9-13.7,21.2-12c0.8,0.2,1.7,0.5,2.6,1.1C257.7,269.4,270.8,290.6,252.8,291.6z",
                },
                {
                    id: 24,
                    d:
                        "M184.1,299.6c-7-0.4-10-3.4-10.4-7.6l0,0c0-0.1,0-0.2,0-0.2c-0.2-2.9,0.8-6.4,2.5-9.7l0,0  c0.4-0.8,0.8-1.5,1.2-2.2l0,0c3.9-6.7,10-12.7,13.9-13.4c3.1-0.6,6.2-0.5,8.9,0.2c0.3,0.1,0.6,0.2,1,0.3c8,2.4,14.2,9.6,16.6,18.7  c0,0.2,0.1,0.3,0.1,0.4c0.2,0.9,0.4,1.8,0.6,2.8C220.6,303.1,184.1,299.6,184.1,299.6z",
                },
                {
                    id: 25,
                    d:
                        "M159.5,299.7c0,0-36.5,3.1-34.3-9.8c0.2-1.3,0.5-2.5,0.9-3.7c0,0,0,0,0,0c2.8-8.7,10-15.4,19-16.7  c2.3-0.3,4.7-0.3,7.3,0.1c4.4,0.8,11.8,7.7,15.4,14.8c0,0,0.1,0.1,0.1,0.2c1.3,2.5,2,4.9,2.1,7.1v0  C170,296,167.2,299.3,159.5,299.7z",
                },
                {
                    id: 26,
                    d:
                        "M62.6,138.5c-2.6,1.1-5.2,2.8-7.7,5.1c-5.9-3-5-7.6-4.6-9.1c0.1-0.3,0.2-0.4,0.2-0.4s0.5-0.5,1.2-1.2  c1.3-1.1,3.7-2.2,6-1.4C59.5,132.2,61.3,134.2,62.6,138.5z",
                },
                {
                    id: 27,
                    d:
                        "M74.1,136.4c-2.8-0.1-5.8,0.2-8.8,1.1l0,0c-0.9,0.3-1.8,0.6-2.7,1c-1.2-4.3-3-6.3-4.9-7  c0.4-6.8,10.6-8.3,10.6-8.3S74.3,126.5,74.1,136.4z",
                },
                {
                    id: 28,
                    d:
                        "M54.8,143.5c-0.2,0.2-0.4,0.3-0.5,0.5c-1,0.9-1.9,2-2.9,3.2l0,0c-3.4,3.4-5.8,3.6-5.8,3.6  c-7.4,0.3-7.4-14.6-7.4-14.6s6.6-4.6,12.1-1.7C49.8,135.9,48.9,140.6,54.8,143.5z",
                },
                {
                    id: 29,
                    d: "M97.4,196.6c0,0,13.8,21.6,19.4,52.4",
                },
                {
                    id: 30,
                    d: "M229.8,229.2c0,0,2.4,19-4.3,45.7",
                },
                {
                    id: 31,
                    d:
                        "M170.1,91.2c-0.6,4.5-4.2,8.7-13.6,8.5c-7.9-0.1-9.5-5.8-9.9-8.5c7.7,0.6,11.8-2.4,12.3-10.8  C159.4,88.3,163.1,91.4,170.1,91.2z",
                },
                {
                    id: 32,
                    d: "M174.1,75.6c0,0,26-13,57.9,2.2",
                },
                {
                    id: 33,
                    d: "M237.5,95.4c-7.4-11.2-38.6-21.9-68.1-14.5",
                },
                {
                    id: 34,
                    d: "M173.7,85.4c0,0,15.7-4.5,31.8,7.2",
                },
                {
                    id: 35,
                    d:
                        "M122.3,115.4c0,0.7-0.1,1.4-0.4,2c-1.3,0.1-2.5,0.6-3.4,1.4c-0.9,0.7-1.7,1.7-2.2,2.8c-0.3,0-0.7,0.1-1,0.1  c-3.8,0-6.1-3.1-6.1-6.6s3.1-6.2,7-6.2c2.9,0,4.5,1.9,5.6,4.2C122.1,113.7,122.3,114.5,122.3,115.4z",
                },
                {
                    id: 36,
                    d:
                        "M129.6,124.2c0,1.2-0.3,2.4-0.9,3.4l0,0c-0.9,0.6-1.6,1.4-2.2,2.3l0,0c-1.1,0.7-2.4,1.1-3.8,1.1  c-3.8,0-6.9-3.1-6.9-6.9c0-0.2,0-0.3,0-0.5c0-0.8,0.2-1.5,0.5-2.2c0.5-1.1,1.2-2.1,2.2-2.8c1-0.7,2.1-1.2,3.4-1.4  c0.2,0,0.5,0,0.7,0C126.5,117.3,129.6,120.4,129.6,124.2z",
                },
                {
                    id: 37,
                    d:
                        "M141.4,134.1c0,0.6-0.1,1.1-0.2,1.7l0,0c-1.1,1.1-1.8,2.5-2.1,4l0,0c-1.5,1.5-3.5,2.4-5.7,2.4  c-4.5,0-8.1-3.6-8.1-8.1c0-1.5,0.4-3,1.2-4.2l0,0c0.6-0.9,1.3-1.7,2.2-2.3l0,0c1.3-0.9,3-1.5,4.7-1.5  C137.8,126.1,141.4,129.7,141.4,134.1z",
                },
                {
                    id: 38,
                    d:
                        "M154,143.3c0,0.6,0.1,1.3,0.2,1.8c-1.3,2.6-4,4.4-7.2,4.4c-4.5,0-8.1-3.6-8.1-8.1c0-0.6,0.1-1.1,0.2-1.7l0,0  c0.3-1.5,1.1-2.9,2.1-4l0,0c1.5-1.5,3.5-2.4,5.7-2.4c3.8,0,7,2.7,7.9,6.2C154.3,140.7,154,142,154,143.3z",
                },
                {
                    id: 39,
                    d:
                        "M170.1,143.3c0,0.6-0.1,1.2-0.2,1.8c-0.8,3.6-4,6.3-7.9,6.3c-3.8,0-7-2.7-7.9-6.2c-0.1-0.6-0.2-1.2-0.2-1.8  c0-1.3,0.3-2.6,0.9-3.7c1.3-2.6,4-4.4,7.2-4.4c3,0,5.6,1.6,7,4C169.7,140.5,170.1,141.8,170.1,143.3z",
                },
                {
                    id: 40,
                    d:
                        "M185,141.1c0,4.5-3.6,8.1-8.1,8.1c-3,0-5.6-1.6-7-4c0.1-0.6,0.2-1.2,0.2-1.8c0-1.5-0.4-2.9-1.1-4  c0.8-3.6,4-6.3,7.9-6.3c2.4,0,4.6,1.1,6.1,2.8c0.8,0.9,1.3,1.9,1.7,3l0,0C184.8,139.5,185,140.3,185,141.1z",
                },
                {
                    id: 41,
                    d:
                        "M197.5,133.9c0,4.1-3.3,7.4-7.4,7.4c-2.2,0-4.1-0.9-5.5-2.4l0,0c-0.3-1.1-0.9-2.2-1.7-3  c-0.2-0.6-0.2-1.3-0.2-1.9c0-4.1,3.3-7.4,7.4-7.4c2.3,0,4.3,1,5.7,2.6l0,0c0.5,0.6,1,1.4,1.3,2.2l0,0  C197.3,132.1,197.5,133,197.5,133.9z",
                },
                {
                    id: 42,
                    d:
                        "M210.1,126.6c0,4.1-3.3,7.4-7.4,7.4c-2.3,0-4.3-1-5.7-2.6l0,0c-0.3-0.8-0.7-1.5-1.3-2.2l0,0  c-0.3-0.8-0.4-1.7-0.4-2.5c0-4.1,3.3-7.4,7.4-7.4c1.4,0,2.7,0.4,3.8,1.1c1.5,0.9,2.6,2.3,3.2,3.9l0,0  C209.9,125,210.1,125.8,210.1,126.6z",
                },
                {
                    id: 43,
                    d:
                        "M220.8,117.9c0,4.1-3.3,7.4-7.4,7.4c-1.4,0-2.7-0.4-3.8-1.1l0,0c-0.6-1.7-1.7-3-3.2-3.9  c-0.3-0.8-0.4-1.6-0.4-2.4c0-4.1,3.3-7.4,7.4-7.4c0.3,0,0.6,0,1,0.1l0,0c0.6,0.1,1.1,0.2,1.6,0.4c0.2,0.1,0.4,0.2,0.7,0.3  c1.4,0.7,2.5,1.8,3.3,3.1C220.5,115.4,220.8,116.6,220.8,117.9z",
                },
                {
                    id: 44,
                    d:
                        "M228.7,108.1c0,3.3-2.4,6.1-5.6,6.6c-0.4,0.1-0.7,0.1-1.1,0.1c-0.7,0-1.4-0.1-2.1-0.3  c-0.7-1.4-1.9-2.5-3.3-3.1c-0.2-0.1-0.4-0.2-0.7-0.3c-0.4-0.9-0.7-1.9-0.7-2.9c0-1.6,0.6-3,1.5-4.2c1.2-1.5,3.1-2.5,5.2-2.5  c0.4,0,0.9,0,1.3,0.1C226.4,102.2,228.7,104.8,228.7,108.1z",
                },
                {
                    id: 45,
                    d:
                        "M223.3,101.5c-0.4-0.1-0.9-0.1-1.3-0.1c-2.1,0-4,1-5.2,2.5c-1.1-1.6-2.3-3.1-3.5-4.5c1.1-0.9,2.5-1.4,4.1-1.4  C220,98,222.2,99.4,223.3,101.5z",
                },
                {
                    id: 46,
                    d:
                        "M180.2,37.9c-4.7,0-8.6,3.7-8.6,8.2s3.9,8.2,8.6,8.2c4.8,0,8.6-3.7,8.6-8.2S184.9,37.9,180.2,37.9z   M179.3,47.7c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4c2.5,0,4.6,2,4.6,4.4C183.9,45.8,181.8,47.7,179.3,47.7z",
                },
                {
                    id: 47,
                    d:
                        "M139.1,38.1c-4.7,0-8.6,3.7-8.6,8.2s3.9,8.2,8.6,8.2c4.7,0,8.6-3.7,8.6-8.2C147.7,41.8,143.9,38.1,139.1,38.1z   M141.3,47.7c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4c2.5,0,4.6,2,4.6,4.4C145.9,45.8,143.8,47.7,141.3,47.7z",
                },
                {
                    id: 48,
                    d:
                        "M158.9,80.3c-0.5,8.4-4.6,11.4-12.3,10.8c-1.3-0.1-2.8-0.3-4.4-0.6c-2.3-0.4-4.4-2.6-5.7-5.4  c-0.9-1.8-1.5-3.9-1.7-5.9c-0.2-2,0-4,0.8-5.7c0.8-1.8,2.3-3.3,4.5-4c5-1.6,9.1-1.9,10.1-1.9c1.5,4.4,6.2,7.8,8.1,9  c0.2,0.2,0.5,0.2,0.7,0.2L158.9,80.3z",
                },
                {
                    id: 49,
                    d: "M143.3,75.3c0,0-27.2-10.1-57.3,8.4",
                },
                {
                    id: 50,
                    d: "M147.4,79.8c-32.6-3.7-59.3,16.9-65,22.1",
                },
                {
                    id: 51,
                    d: "M144.8,85.1c0,0-16.1-2.8-30.8,10.6",
                },
                {
                    id: 52,
                    d:
                        "M183.9,43.3c0,2.4-2.1,4.4-4.6,4.4c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4C181.8,39,183.9,41,183.9,43.3z",
                },
                {
                    id: 53,
                    d:
                        "M145.9,43.3c0,2.4-2.1,4.4-4.6,4.4c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4S145.9,41,145.9,43.3z",
                },
            ],
        },
        {
            id: 5,
            title: "bikey-smile",
            paths: [
                {
                    id: 1,
                    d:
                        "M193.4,210.8c-7.2,1.1-14.4,2.8-21.4,4.8c-3.7,1.1-7.4,2.2-11,3.5c-1.7,0.6-3.3,1.1-4.9,1.7 c-0.2,0.1-1.9,0.5-3.3,0.9c-0.1,0.6-0.3,1.2-0.8,1.8c1.5,3.5,3.2,6.9,5.1,10.1c1.4-0.8,3.2-0.8,4.7,0.4c1.5,1.2,3.6,3.5,5.6,4.8 c1.6-2.6,2.8-7.6,3.6-9.5c0.7-1.7,1.9-2.9,3.9-3c20.5-0.8,41-2.3,61.5-4.3c0.3-3.4,0.4-6.7,0.2-10.1 C222.3,208.6,207.8,208.5,193.4,210.8z",
                },
                {
                    id: 2,
                    d:
                        "M169.8,247.3c-0.9,0.3-1.8,0.3-2.6,0.2c0.1,0.1,0.1,0.2,0.2,0.3c3.9,4.3,7.5,8.7,13.7,8.8 c6.3,0.1,12.7-0.3,19-0.8c7.1-0.6,14.2-1.5,21.2-2.5c2-0.3,7.4-0.1,8.9-1.3c0.6-0.5,1.5-5.2,2-7c1.3-4.8,2.4-9.7,3.2-14.7 c-19.2,1.9-38.4,3.2-57.6,4C176.1,239.1,174.1,245.9,169.8,247.3z",
                },
                {
                    id: 3,
                    d:
                        "M122,108.9c4.1-4.8,8.4-9.5,12.9-14c7.2-7.3,14.9-14.1,22.9-20.4c-5.4-8.4-10.3-17-14.8-25.8 c-1.7,8.2-5.5,17.2-11.9,22c-4.6,3.5-9,1.2-13.5-1.3c-6.1-3.4-12-7-17.8-10.9c-6.1-4.1-12-8.5-17.7-13.2 c6.4,14.3,12.9,28.5,19.3,42.8c1.3,2.9-0.2,5.8-3.5,6.1c-9.6,0.7-19,2.4-28.1,5c15.4,6.3,31.3,11.3,47.5,15.1 C118.8,112.2,120.6,110.5,122,108.9z",
                },
                {
                    id: 4,
                    d:
                        "M256.2,146.7c-4.8-12.7-13.1-22.2-23.4-30.8c-10.4-8.8-20.5-16.9-34.5-18.1c-11.1-0.9-22.3,1.1-32.6,5.1 c-21.3,8.3-38.8,26.2-45.5,48.2c-4.1,13.5-4.4,27.8-1.1,41.3c5.3,9.3,9.2,19.2,11.7,26.6c1.5,4.6-4.9,6.7-7.4,3.1 c-5.7-8.4-9.7-17.8-12.1-27.6c-3.6-6-7.9-11.6-13.1-15.9c-5.8-4.9-13.3-7.7-20.6-5.4c2.5,5.1,4.3,10.3,4.9,16.1 c0.6,5.1-7.5,5.1-8,0c-0.5-4.4-2-8.4-3.9-12.2c-4.2,3.4-7.4,8.1-9.6,13c-1.9,4.3-3.5,8.9-4.7,13.7c7.6,5.9,14.8,12.4,21.3,19.5 c3.5,3.8-2.2,9.5-5.7,5.7c-5.5-5.9-11.3-11.4-17.5-16.4c-1.6,9.5-2.2,19.2-1.8,28.2c0,1,0.1,2,0.2,3.1c2.7,1.8,5.2,4,7.3,6.7 c3.2,4-2.4,9.7-5.6,5.7c2,9.5,6,19.1,13.6,23.6c2.5-1.8,6.3-1.8,9.2-2.1c4.3-0.5,8.6-0.9,12.9-1.2c18.6-1.3,37.3-1.4,55.9-1.9 c18.9-0.5,37.9-0.9,56.8-1.4c9.7-0.2,19.3-0.5,29-0.7c7.7-0.2,15.6-0.9,23,1.5c9.2-28.9,12.5-59.3,9.4-89.4 C262.9,171.8,260.8,158.7,256.2,146.7z M146.9,140.6c14,11.8,28.1,23.5,42.1,35.3c12.2-16.5,24.3-32.9,36.5-49.4 c0.6-1.4,1.5-2.6,2.8-3.8c3.2-2.9,9.1,1.1,6.3,4.9c-0.3,0.4-0.5,0.7-0.8,1.1c-0.5,0.7-0.9,1.5-1.4,2.2c-0.4,1.3-1.2,2.1-2.1,2.5 c-10.7,14.5-21.5,29.1-32.2,43.6c2.4-0.3,4.8-0.5,7.3-0.7c5.5-0.4,11.1-0.7,16.7-0.8c5.4-0.1,11.9-1,17.1,0.1 c6.1,1.3,7.2,10.2,0,10.3c-2,0-3.3-1.2-3.7-2.7c-2.7-0.2-6.2,0.3-7.8,0.3c-3.8,0-7.5,0.1-11.3,0.2c-6.9,0.2-13.8,0.8-20.7,1.6 c-7.5,0.9-15,2.2-22.4,3.8c-3.5,0.8-7,1.6-10.5,2.5c-0.8,0.2-6,1.2-8.1,1.7c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.3 c-1.3,1.6-3.5,2.8-5.5,1.4c-0.2-0.1-0.3-0.2-0.5-0.3c-1.8-1.2-2.6-3.5-1.4-5.5c1.9-3.2,6.3-3.7,9.7-4.6c5.6-1.6,11.2-2.9,16.8-4.1 c2.5-0.5,5-1,7.5-1.4c-13.2-11-26.4-22.1-39.6-33.1C137.3,143,143,137.3,146.9,140.6z M238.7,251.2c-1.9,6.9-3.9,8-10.9,9.1 c-8.1,1.2-16.3,2.3-24.4,3.1c-8.2,0.8-16.9,1.7-25.1,1.1c-6.6-0.5-11-5.1-15.4-9.7c-9.3-9.9-16.2-21.7-20.8-34.5 c-1.2-3.4,2.2-5.5,5-4.7c4-2.3,9.4-3.5,13.7-4.9c5.3-1.8,10.7-3.3,16.1-4.7c19.4-4.8,39.5-6.5,59.1-2.3c1.1-3.6,7-4.7,7.6-0.3 c0.2,1.5,0.4,3,0.5,4.6c0,0.2,0.1,0.4,0.1,0.6C245.4,223,242.6,237.2,238.7,251.2z",
                },
                {
                    id: 5,
                    d:
                        "M0,0v300h300V0H0z M57.3,94.7c11.2-4.2,22.8-6.8,34.6-8.1c-8.2-18.2-16.4-36.3-24.6-54.5 c-1.8-4.1,2.8-8.2,6.3-4.9c8,7.5,16.4,14.5,25.3,20.9c3.8,2.7,7.6,5.3,11.6,7.7c2.2,1.4,4.5,2.8,6.8,4.1c1.8,1.1,4.9,3.6,6.9,3.9 c4.7,0.6,7.8-7.5,9.2-11.1c1.4-3.7,2.3-7.6,2.5-11.5c0.2-2.8,0.1-5.5-0.3-8.2c-2.6-5.9-5-11.9-7.1-18c-1.6-4.6,4.9-6.6,7.4-3.1 c4,5.7,6.5,12.2,7.6,18.9c5.9,13.4,12.8,26.3,20.7,38.6c0.1-0.1,0.1-0.1,0.2-0.2c3-2.3,6.6,1.5,5.9,4.5c-0.2,0.9-0.4,1.9-0.7,2.8 c-0.4,1.9-1.8,2.7-3.2,2.9c-0.9,0.6-2,0.9-3.1,0.8c-7.1,5.7-14,11.7-20.5,18.1c-4,4-7.9,8.1-11.7,12.3c-1.8,2-3.5,4-5.2,6.1 c-0.4,0.5-2.3,2.3-3.5,3.6c0.6,1.3,0.5,2.8-1,4.1c-0.2,0.1-0.3,0.3-0.5,0.4c-1.4,1.1-3.3,1.7-4.9,0.6c-0.2-0.1-0.4-0.3-0.6-0.4 c-1.1-0.7-2.1-2.1-2-3.5c0,0,0-0.1,0-0.1c-19.6-4.7-38.7-11.2-57.1-19.4C52.8,100.5,54.4,95.8,57.3,94.7z M261.8,278.6 c-0.6,1.9-2.2,2.8-3.8,2.8c-0.8,1-2.2,1.6-3.9,0.9c-7.1-2.7-14.8-1.9-22.3-1.7c-7.4,0.2-14.9,0.4-22.3,0.5 c-15.2,0.4-30.5,0.7-45.7,1.1c-15.2,0.4-30.4,0.7-45.6,1.1c-7.6,0.2-15.2,0.4-22.7,0.8c-4,0.2-7.9,0.5-11.9,0.9 c-1.2,0.1-5.1,0-7.8,0.3c-0.1,0.6-0.2,1.1-0.6,1.7c-0.1,0.2-0.3,0.4-0.4,0.6c-0.7,1.1-2,2.1-3.5,2c-1-0.1-1.9-0.4-2.7-0.8 c-15.1-5.6-21-23.5-23.1-38.1c-0.1-0.7-0.2-1.3-0.3-2c-4.1-1.9-8.8-2.7-13.6-1.9c-5.1,0.8-7.2-6.9-2.1-7.8c5.1-0.9,10.3-0.6,15,0.9 c-0.4-10.9,0.9-21.9,3.1-32.6c-4.4-3.2-9-6.3-13.8-9c-4.5-2.6-0.4-9.6,4.1-6.9c4,2.3,7.9,4.9,11.7,7.5c2.9-11,7.8-22.3,17.1-29 c-0.7-1.3-1.4-2.5-2.1-3.8c-1.9-3.7-7.5-12.1-1.4-14.9c4-1.9,7.6,3.1,5.5,5.8c0.8,2,3.3,5.9,4.1,7.4c0.3,0.6,0.6,1.1,0.9,1.6 c14.1-5.4,25.8,1,35.1,11.6c-0.6-12.6,1.6-25.3,6.5-37c9.6-22.6,29.6-39.8,52.8-47.3c11.8-3.8,24.7-5.1,37-2.8 c13.8,2.6,24.5,11.9,34.8,20.8c10.8,9.2,18.9,19.8,24,33.1c5.1,13.4,7.2,27.9,8.5,42.1C275.3,217.6,271.5,249,261.8,278.6z",
                },
            ],
        },
    ];

    getAllData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.85) {
                    reject(new Error("Something bad happen"));
                } else {
                    resolve(this.data);
                }
            }, 100);
        });
    }

    getDataById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.85) {
                    reject(new Error("Something bad happen"));
                } else {
                    resolve(this.data.find((x) => x.id === Number(id)));
                }
            }, 100);
        });
    }
}
