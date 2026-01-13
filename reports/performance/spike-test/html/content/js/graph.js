/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 88376.0, "minX": 0.0, "maxY": 92295.0, "series": [{"data": [[0.0, 88376.0], [0.1, 88376.0], [0.2, 88376.0], [0.3, 88376.0], [0.4, 88376.0], [0.5, 88376.0], [0.6, 88377.0], [0.7, 88377.0], [0.8, 88377.0], [0.9, 88377.0], [1.0, 88377.0], [1.1, 88377.0], [1.2, 88377.0], [1.3, 88377.0], [1.4, 88377.0], [1.5, 88377.0], [1.6, 88377.0], [1.7, 88377.0], [1.8, 88377.0], [1.9, 88377.0], [2.0, 88377.0], [2.1, 88377.0], [2.2, 88377.0], [2.3, 88377.0], [2.4, 88377.0], [2.5, 88377.0], [2.6, 88377.0], [2.7, 88377.0], [2.8, 88377.0], [2.9, 88377.0], [3.0, 88377.0], [3.1, 88377.0], [3.2, 88377.0], [3.3, 88377.0], [3.4, 88377.0], [3.5, 88377.0], [3.6, 88377.0], [3.7, 88377.0], [3.8, 88377.0], [3.9, 88377.0], [4.0, 88377.0], [4.1, 88377.0], [4.2, 88378.0], [4.3, 88378.0], [4.4, 88378.0], [4.5, 88378.0], [4.6, 88378.0], [4.7, 88378.0], [4.8, 88378.0], [4.9, 88378.0], [5.0, 88378.0], [5.1, 88378.0], [5.2, 88378.0], [5.3, 88378.0], [5.4, 88378.0], [5.5, 88378.0], [5.6, 88378.0], [5.7, 88378.0], [5.8, 88378.0], [5.9, 88378.0], [6.0, 88378.0], [6.1, 88378.0], [6.2, 88378.0], [6.3, 88378.0], [6.4, 88378.0], [6.5, 88378.0], [6.6, 88378.0], [6.7, 88378.0], [6.8, 88378.0], [6.9, 88378.0], [7.0, 88378.0], [7.1, 88378.0], [7.2, 88378.0], [7.3, 88378.0], [7.4, 88378.0], [7.5, 88378.0], [7.6, 88378.0], [7.7, 88378.0], [7.8, 88378.0], [7.9, 88378.0], [8.0, 88378.0], [8.1, 88378.0], [8.2, 88378.0], [8.3, 88378.0], [8.4, 88378.0], [8.5, 88378.0], [8.6, 88378.0], [8.7, 88378.0], [8.8, 88379.0], [8.9, 88379.0], [9.0, 88379.0], [9.1, 88379.0], [9.2, 88379.0], [9.3, 88379.0], [9.4, 88379.0], [9.5, 88379.0], [9.6, 88379.0], [9.7, 88379.0], [9.8, 88379.0], [9.9, 88379.0], [10.0, 88379.0], [10.1, 88379.0], [10.2, 88379.0], [10.3, 88379.0], [10.4, 88379.0], [10.5, 88379.0], [10.6, 88379.0], [10.7, 88379.0], [10.8, 88379.0], [10.9, 88379.0], [11.0, 88379.0], [11.1, 88379.0], [11.2, 88379.0], [11.3, 88379.0], [11.4, 88379.0], [11.5, 88379.0], [11.6, 88379.0], [11.7, 88379.0], [11.8, 88379.0], [11.9, 88379.0], [12.0, 88379.0], [12.1, 88379.0], [12.2, 88379.0], [12.3, 88379.0], [12.4, 88379.0], [12.5, 88379.0], [12.6, 88379.0], [12.7, 88379.0], [12.8, 88379.0], [12.9, 88379.0], [13.0, 88379.0], [13.1, 88379.0], [13.2, 88379.0], [13.3, 88379.0], [13.4, 88379.0], [13.5, 88379.0], [13.6, 88379.0], [13.7, 88379.0], [13.8, 88379.0], [13.9, 88379.0], [14.0, 88380.0], [14.1, 88380.0], [14.2, 88380.0], [14.3, 88380.0], [14.4, 88380.0], [14.5, 88380.0], [14.6, 88380.0], [14.7, 88380.0], [14.8, 88380.0], [14.9, 88380.0], [15.0, 88380.0], [15.1, 88380.0], [15.2, 88380.0], [15.3, 88380.0], [15.4, 88380.0], [15.5, 88380.0], [15.6, 88380.0], [15.7, 88380.0], [15.8, 88380.0], [15.9, 88380.0], [16.0, 88380.0], [16.1, 88380.0], [16.2, 88380.0], [16.3, 88380.0], [16.4, 88380.0], [16.5, 88380.0], [16.6, 88380.0], [16.7, 88380.0], [16.8, 88380.0], [16.9, 88380.0], [17.0, 88380.0], [17.1, 88380.0], [17.2, 88380.0], [17.3, 88380.0], [17.4, 88380.0], [17.5, 88380.0], [17.6, 88380.0], [17.7, 88380.0], [17.8, 88380.0], [17.9, 88380.0], [18.0, 88380.0], [18.1, 88380.0], [18.2, 88380.0], [18.3, 88380.0], [18.4, 88380.0], [18.5, 88380.0], [18.6, 88380.0], [18.7, 88380.0], [18.8, 88380.0], [18.9, 88380.0], [19.0, 88380.0], [19.1, 88380.0], [19.2, 88380.0], [19.3, 88380.0], [19.4, 88380.0], [19.5, 88380.0], [19.6, 88380.0], [19.7, 88380.0], [19.8, 88380.0], [19.9, 88380.0], [20.0, 88380.0], [20.1, 88380.0], [20.2, 88380.0], [20.3, 88380.0], [20.4, 88380.0], [20.5, 88380.0], [20.6, 88380.0], [20.7, 88380.0], [20.8, 88380.0], [20.9, 88380.0], [21.0, 88380.0], [21.1, 88380.0], [21.2, 88380.0], [21.3, 88380.0], [21.4, 88380.0], [21.5, 88380.0], [21.6, 88380.0], [21.7, 88380.0], [21.8, 88380.0], [21.9, 88380.0], [22.0, 88380.0], [22.1, 88380.0], [22.2, 88380.0], [22.3, 88380.0], [22.4, 88380.0], [22.5, 88380.0], [22.6, 88380.0], [22.7, 88380.0], [22.8, 88381.0], [22.9, 88381.0], [23.0, 88381.0], [23.1, 88381.0], [23.2, 88381.0], [23.3, 88381.0], [23.4, 88381.0], [23.5, 88381.0], [23.6, 88381.0], [23.7, 88381.0], [23.8, 88381.0], [23.9, 88381.0], [24.0, 88381.0], [24.1, 88381.0], [24.2, 88381.0], [24.3, 88381.0], [24.4, 88381.0], [24.5, 88381.0], [24.6, 88381.0], [24.7, 88381.0], [24.8, 88381.0], [24.9, 88381.0], [25.0, 88381.0], [25.1, 88381.0], [25.2, 88381.0], [25.3, 88381.0], [25.4, 88381.0], [25.5, 88381.0], [25.6, 88381.0], [25.7, 88381.0], [25.8, 88381.0], [25.9, 88381.0], [26.0, 88381.0], [26.1, 88381.0], [26.2, 88381.0], [26.3, 88381.0], [26.4, 88381.0], [26.5, 88381.0], [26.6, 88381.0], [26.7, 88381.0], [26.8, 88381.0], [26.9, 88381.0], [27.0, 88381.0], [27.1, 88381.0], [27.2, 88381.0], [27.3, 88381.0], [27.4, 88381.0], [27.5, 88381.0], [27.6, 88381.0], [27.7, 88381.0], [27.8, 88381.0], [27.9, 88381.0], [28.0, 88381.0], [28.1, 88381.0], [28.2, 88381.0], [28.3, 88381.0], [28.4, 88381.0], [28.5, 88381.0], [28.6, 88381.0], [28.7, 88381.0], [28.8, 88381.0], [28.9, 88381.0], [29.0, 88381.0], [29.1, 88381.0], [29.2, 88381.0], [29.3, 88381.0], [29.4, 88381.0], [29.5, 88381.0], [29.6, 88381.0], [29.7, 88381.0], [29.8, 88382.0], [29.9, 88382.0], [30.0, 88382.0], [30.1, 88382.0], [30.2, 88382.0], [30.3, 88382.0], [30.4, 88382.0], [30.5, 88382.0], [30.6, 88382.0], [30.7, 88382.0], [30.8, 88382.0], [30.9, 88382.0], [31.0, 88382.0], [31.1, 88382.0], [31.2, 88382.0], [31.3, 88382.0], [31.4, 88382.0], [31.5, 88382.0], [31.6, 88382.0], [31.7, 88382.0], [31.8, 88382.0], [31.9, 88382.0], [32.0, 88382.0], [32.1, 88382.0], [32.2, 88382.0], [32.3, 88382.0], [32.4, 88382.0], [32.5, 88382.0], [32.6, 88382.0], [32.7, 88382.0], [32.8, 88382.0], [32.9, 88382.0], [33.0, 88382.0], [33.1, 88382.0], [33.2, 88382.0], [33.3, 88382.0], [33.4, 88382.0], [33.5, 88382.0], [33.6, 88382.0], [33.7, 88382.0], [33.8, 88382.0], [33.9, 88382.0], [34.0, 88382.0], [34.1, 88382.0], [34.2, 88382.0], [34.3, 88382.0], [34.4, 88382.0], [34.5, 88382.0], [34.6, 88382.0], [34.7, 88382.0], [34.8, 88382.0], [34.9, 88382.0], [35.0, 88382.0], [35.1, 88382.0], [35.2, 88382.0], [35.3, 88382.0], [35.4, 88383.0], [35.5, 88383.0], [35.6, 88383.0], [35.7, 88383.0], [35.8, 88383.0], [35.9, 88383.0], [36.0, 88383.0], [36.1, 88383.0], [36.2, 88383.0], [36.3, 88383.0], [36.4, 88383.0], [36.5, 88383.0], [36.6, 88383.0], [36.7, 88383.0], [36.8, 88383.0], [36.9, 88383.0], [37.0, 88383.0], [37.1, 88383.0], [37.2, 88383.0], [37.3, 88383.0], [37.4, 88383.0], [37.5, 88383.0], [37.6, 88383.0], [37.7, 88383.0], [37.8, 88383.0], [37.9, 88383.0], [38.0, 88383.0], [38.1, 88383.0], [38.2, 88383.0], [38.3, 88383.0], [38.4, 88383.0], [38.5, 88383.0], [38.6, 88383.0], [38.7, 88383.0], [38.8, 88383.0], [38.9, 88383.0], [39.0, 88383.0], [39.1, 88383.0], [39.2, 88383.0], [39.3, 88383.0], [39.4, 88383.0], [39.5, 88383.0], [39.6, 88384.0], [39.7, 88384.0], [39.8, 88384.0], [39.9, 88384.0], [40.0, 88384.0], [40.1, 88384.0], [40.2, 88384.0], [40.3, 88384.0], [40.4, 88384.0], [40.5, 88384.0], [40.6, 88384.0], [40.7, 88384.0], [40.8, 88384.0], [40.9, 88384.0], [41.0, 88384.0], [41.1, 88384.0], [41.2, 88384.0], [41.3, 88384.0], [41.4, 88384.0], [41.5, 88384.0], [41.6, 88384.0], [41.7, 88384.0], [41.8, 88384.0], [41.9, 88384.0], [42.0, 88384.0], [42.1, 88384.0], [42.2, 88384.0], [42.3, 88384.0], [42.4, 88384.0], [42.5, 88384.0], [42.6, 88385.0], [42.7, 88385.0], [42.8, 88385.0], [42.9, 88385.0], [43.0, 88385.0], [43.1, 88385.0], [43.2, 88385.0], [43.3, 88385.0], [43.4, 88385.0], [43.5, 88385.0], [43.6, 88385.0], [43.7, 88385.0], [43.8, 88385.0], [43.9, 88385.0], [44.0, 88385.0], [44.1, 88385.0], [44.2, 88385.0], [44.3, 88385.0], [44.4, 88385.0], [44.5, 88385.0], [44.6, 88385.0], [44.7, 88385.0], [44.8, 88385.0], [44.9, 88385.0], [45.0, 88385.0], [45.1, 88385.0], [45.2, 88385.0], [45.3, 88385.0], [45.4, 88385.0], [45.5, 88385.0], [45.6, 88385.0], [45.7, 88385.0], [45.8, 88385.0], [45.9, 88385.0], [46.0, 88385.0], [46.1, 88385.0], [46.2, 88386.0], [46.3, 88386.0], [46.4, 88386.0], [46.5, 88386.0], [46.6, 88386.0], [46.7, 88386.0], [46.8, 88386.0], [46.9, 88386.0], [47.0, 88386.0], [47.1, 88386.0], [47.2, 88386.0], [47.3, 88386.0], [47.4, 88386.0], [47.5, 88386.0], [47.6, 88386.0], [47.7, 88386.0], [47.8, 88386.0], [47.9, 88386.0], [48.0, 88386.0], [48.1, 88386.0], [48.2, 88386.0], [48.3, 88386.0], [48.4, 88386.0], [48.5, 88386.0], [48.6, 88386.0], [48.7, 88386.0], [48.8, 88386.0], [48.9, 88387.0], [49.0, 88387.0], [49.1, 88387.0], [49.2, 88387.0], [49.3, 88387.0], [49.4, 88387.0], [49.5, 88387.0], [49.6, 88388.0], [49.7, 88388.0], [49.8, 88388.0], [49.9, 88388.0], [50.0, 88388.0], [50.1, 88388.0], [50.2, 88388.0], [50.3, 88388.0], [50.4, 88388.0], [50.5, 88388.0], [50.6, 88389.0], [50.7, 88389.0], [50.8, 88389.0], [50.9, 88389.0], [51.0, 88392.0], [51.1, 88392.0], [51.2, 88392.0], [51.3, 88392.0], [51.4, 88392.0], [51.5, 88392.0], [51.6, 92245.0], [51.7, 92245.0], [51.8, 92245.0], [51.9, 92246.0], [52.0, 92246.0], [52.1, 92246.0], [52.2, 92246.0], [52.3, 92246.0], [52.4, 92246.0], [52.5, 92246.0], [52.6, 92247.0], [52.7, 92247.0], [52.8, 92247.0], [52.9, 92247.0], [53.0, 92247.0], [53.1, 92247.0], [53.2, 92247.0], [53.3, 92247.0], [53.4, 92247.0], [53.5, 92247.0], [53.6, 92247.0], [53.7, 92247.0], [53.8, 92247.0], [53.9, 92247.0], [54.0, 92247.0], [54.1, 92247.0], [54.2, 92247.0], [54.3, 92247.0], [54.4, 92247.0], [54.5, 92247.0], [54.6, 92248.0], [54.7, 92248.0], [54.8, 92248.0], [54.9, 92248.0], [55.0, 92248.0], [55.1, 92248.0], [55.2, 92248.0], [55.3, 92248.0], [55.4, 92248.0], [55.5, 92248.0], [55.6, 92248.0], [55.7, 92248.0], [55.8, 92248.0], [55.9, 92248.0], [56.0, 92249.0], [56.1, 92249.0], [56.2, 92249.0], [56.3, 92249.0], [56.4, 92249.0], [56.5, 92249.0], [56.6, 92249.0], [56.7, 92249.0], [56.8, 92249.0], [56.9, 92249.0], [57.0, 92249.0], [57.1, 92249.0], [57.2, 92249.0], [57.3, 92249.0], [57.4, 92249.0], [57.5, 92249.0], [57.6, 92249.0], [57.7, 92249.0], [57.8, 92249.0], [57.9, 92249.0], [58.0, 92249.0], [58.1, 92249.0], [58.2, 92249.0], [58.3, 92249.0], [58.4, 92249.0], [58.5, 92249.0], [58.6, 92249.0], [58.7, 92249.0], [58.8, 92249.0], [58.9, 92249.0], [59.0, 92249.0], [59.1, 92249.0], [59.2, 92249.0], [59.3, 92249.0], [59.4, 92249.0], [59.5, 92249.0], [59.6, 92249.0], [59.7, 92249.0], [59.8, 92250.0], [59.9, 92250.0], [60.0, 92250.0], [60.1, 92250.0], [60.2, 92250.0], [60.3, 92250.0], [60.4, 92250.0], [60.5, 92250.0], [60.6, 92250.0], [60.7, 92250.0], [60.8, 92250.0], [60.9, 92250.0], [61.0, 92250.0], [61.1, 92250.0], [61.2, 92250.0], [61.3, 92250.0], [61.4, 92250.0], [61.5, 92250.0], [61.6, 92250.0], [61.7, 92250.0], [61.8, 92250.0], [61.9, 92250.0], [62.0, 92250.0], [62.1, 92250.0], [62.2, 92250.0], [62.3, 92250.0], [62.4, 92250.0], [62.5, 92250.0], [62.6, 92250.0], [62.7, 92250.0], [62.8, 92250.0], [62.9, 92250.0], [63.0, 92250.0], [63.1, 92250.0], [63.2, 92250.0], [63.3, 92250.0], [63.4, 92250.0], [63.5, 92250.0], [63.6, 92250.0], [63.7, 92250.0], [63.8, 92250.0], [63.9, 92250.0], [64.0, 92250.0], [64.1, 92250.0], [64.2, 92251.0], [64.3, 92251.0], [64.4, 92251.0], [64.5, 92251.0], [64.6, 92251.0], [64.7, 92251.0], [64.8, 92251.0], [64.9, 92251.0], [65.0, 92251.0], [65.1, 92251.0], [65.2, 92251.0], [65.3, 92251.0], [65.4, 92251.0], [65.5, 92251.0], [65.6, 92251.0], [65.7, 92251.0], [65.8, 92251.0], [65.9, 92251.0], [66.0, 92251.0], [66.1, 92251.0], [66.2, 92251.0], [66.3, 92251.0], [66.4, 92251.0], [66.5, 92251.0], [66.6, 92251.0], [66.7, 92251.0], [66.8, 92251.0], [66.9, 92251.0], [67.0, 92251.0], [67.1, 92251.0], [67.2, 92251.0], [67.3, 92251.0], [67.4, 92251.0], [67.5, 92251.0], [67.6, 92251.0], [67.7, 92251.0], [67.8, 92251.0], [67.9, 92251.0], [68.0, 92251.0], [68.1, 92251.0], [68.2, 92251.0], [68.3, 92251.0], [68.4, 92251.0], [68.5, 92251.0], [68.6, 92251.0], [68.7, 92251.0], [68.8, 92251.0], [68.9, 92251.0], [69.0, 92251.0], [69.1, 92251.0], [69.2, 92251.0], [69.3, 92251.0], [69.4, 92251.0], [69.5, 92251.0], [69.6, 92251.0], [69.7, 92251.0], [69.8, 92251.0], [69.9, 92251.0], [70.0, 92251.0], [70.1, 92251.0], [70.2, 92251.0], [70.3, 92251.0], [70.4, 92251.0], [70.5, 92251.0], [70.6, 92251.0], [70.7, 92251.0], [70.8, 92252.0], [70.9, 92252.0], [71.0, 92252.0], [71.1, 92252.0], [71.2, 92252.0], [71.3, 92252.0], [71.4, 92252.0], [71.5, 92252.0], [71.6, 92252.0], [71.7, 92252.0], [71.8, 92252.0], [71.9, 92252.0], [72.0, 92252.0], [72.1, 92252.0], [72.2, 92252.0], [72.3, 92252.0], [72.4, 92252.0], [72.5, 92252.0], [72.6, 92252.0], [72.7, 92252.0], [72.8, 92252.0], [72.9, 92252.0], [73.0, 92252.0], [73.1, 92252.0], [73.2, 92252.0], [73.3, 92252.0], [73.4, 92252.0], [73.5, 92252.0], [73.6, 92252.0], [73.7, 92252.0], [73.8, 92252.0], [73.9, 92252.0], [74.0, 92252.0], [74.1, 92252.0], [74.2, 92253.0], [74.3, 92253.0], [74.4, 92253.0], [74.5, 92253.0], [74.6, 92253.0], [74.7, 92253.0], [74.8, 92253.0], [74.9, 92253.0], [75.0, 92253.0], [75.1, 92253.0], [75.2, 92253.0], [75.3, 92253.0], [75.4, 92253.0], [75.5, 92253.0], [75.6, 92253.0], [75.7, 92253.0], [75.8, 92253.0], [75.9, 92253.0], [76.0, 92253.0], [76.1, 92253.0], [76.2, 92253.0], [76.3, 92253.0], [76.4, 92253.0], [76.5, 92253.0], [76.6, 92253.0], [76.7, 92253.0], [76.8, 92253.0], [76.9, 92253.0], [77.0, 92253.0], [77.1, 92253.0], [77.2, 92253.0], [77.3, 92253.0], [77.4, 92254.0], [77.5, 92254.0], [77.6, 92254.0], [77.7, 92254.0], [77.8, 92254.0], [77.9, 92254.0], [78.0, 92254.0], [78.1, 92254.0], [78.2, 92254.0], [78.3, 92254.0], [78.4, 92254.0], [78.5, 92254.0], [78.6, 92254.0], [78.7, 92254.0], [78.8, 92254.0], [78.9, 92254.0], [79.0, 92254.0], [79.1, 92254.0], [79.2, 92254.0], [79.3, 92254.0], [79.4, 92254.0], [79.5, 92254.0], [79.6, 92254.0], [79.7, 92254.0], [79.8, 92254.0], [79.9, 92254.0], [80.0, 92254.0], [80.1, 92254.0], [80.2, 92254.0], [80.3, 92254.0], [80.4, 92254.0], [80.5, 92254.0], [80.6, 92254.0], [80.7, 92254.0], [80.8, 92254.0], [80.9, 92254.0], [81.0, 92254.0], [81.1, 92254.0], [81.2, 92254.0], [81.3, 92254.0], [81.4, 92254.0], [81.5, 92254.0], [81.6, 92254.0], [81.7, 92254.0], [81.8, 92254.0], [81.9, 92254.0], [82.0, 92254.0], [82.1, 92254.0], [82.2, 92254.0], [82.3, 92254.0], [82.4, 92255.0], [82.5, 92255.0], [82.6, 92255.0], [82.7, 92255.0], [82.8, 92255.0], [82.9, 92255.0], [83.0, 92255.0], [83.1, 92255.0], [83.2, 92255.0], [83.3, 92255.0], [83.4, 92255.0], [83.5, 92255.0], [83.6, 92255.0], [83.7, 92255.0], [83.8, 92255.0], [83.9, 92255.0], [84.0, 92255.0], [84.1, 92255.0], [84.2, 92255.0], [84.3, 92255.0], [84.4, 92255.0], [84.5, 92255.0], [84.6, 92255.0], [84.7, 92255.0], [84.8, 92255.0], [84.9, 92255.0], [85.0, 92255.0], [85.1, 92255.0], [85.2, 92256.0], [85.3, 92256.0], [85.4, 92256.0], [85.5, 92256.0], [85.6, 92256.0], [85.7, 92256.0], [85.8, 92256.0], [85.9, 92256.0], [86.0, 92256.0], [86.1, 92256.0], [86.2, 92256.0], [86.3, 92256.0], [86.4, 92256.0], [86.5, 92256.0], [86.6, 92256.0], [86.7, 92257.0], [86.8, 92257.0], [86.9, 92257.0], [87.0, 92257.0], [87.1, 92257.0], [87.2, 92257.0], [87.3, 92257.0], [87.4, 92257.0], [87.5, 92257.0], [87.6, 92257.0], [87.7, 92257.0], [87.8, 92257.0], [87.9, 92257.0], [88.0, 92257.0], [88.1, 92257.0], [88.2, 92257.0], [88.3, 92257.0], [88.4, 92257.0], [88.5, 92257.0], [88.6, 92257.0], [88.7, 92257.0], [88.8, 92257.0], [88.9, 92258.0], [89.0, 92258.0], [89.1, 92258.0], [89.2, 92258.0], [89.3, 92258.0], [89.4, 92258.0], [89.5, 92258.0], [89.6, 92258.0], [89.7, 92259.0], [89.8, 92259.0], [89.9, 92261.0], [90.0, 92261.0], [90.1, 92261.0], [90.2, 92261.0], [90.3, 92261.0], [90.4, 92261.0], [90.5, 92261.0], [90.6, 92261.0], [90.7, 92261.0], [90.8, 92261.0], [90.9, 92261.0], [91.0, 92261.0], [91.1, 92261.0], [91.2, 92261.0], [91.3, 92261.0], [91.4, 92261.0], [91.5, 92261.0], [91.6, 92261.0], [91.7, 92262.0], [91.8, 92262.0], [91.9, 92262.0], [92.0, 92262.0], [92.1, 92264.0], [92.2, 92264.0], [92.3, 92267.0], [92.4, 92267.0], [92.5, 92270.0], [92.6, 92270.0], [92.7, 92270.0], [92.8, 92270.0], [92.9, 92274.0], [93.0, 92274.0], [93.1, 92275.0], [93.2, 92275.0], [93.3, 92277.0], [93.4, 92277.0], [93.5, 92279.0], [93.6, 92279.0], [93.7, 92280.0], [93.8, 92280.0], [93.9, 92281.0], [94.0, 92281.0], [94.1, 92281.0], [94.2, 92281.0], [94.3, 92282.0], [94.4, 92282.0], [94.5, 92283.0], [94.6, 92283.0], [94.7, 92283.0], [94.8, 92283.0], [94.9, 92283.0], [95.0, 92283.0], [95.1, 92283.0], [95.2, 92283.0], [95.3, 92284.0], [95.4, 92284.0], [95.5, 92285.0], [95.6, 92285.0], [95.7, 92285.0], [95.8, 92285.0], [95.9, 92285.0], [96.0, 92285.0], [96.1, 92286.0], [96.2, 92286.0], [96.3, 92286.0], [96.4, 92286.0], [96.5, 92286.0], [96.6, 92286.0], [96.7, 92286.0], [96.8, 92286.0], [96.9, 92286.0], [97.0, 92286.0], [97.1, 92287.0], [97.2, 92287.0], [97.3, 92288.0], [97.4, 92288.0], [97.5, 92288.0], [97.6, 92288.0], [97.7, 92289.0], [97.8, 92289.0], [97.9, 92289.0], [98.0, 92289.0], [98.1, 92291.0], [98.2, 92291.0], [98.3, 92291.0], [98.4, 92291.0], [98.5, 92291.0], [98.6, 92291.0], [98.7, 92292.0], [98.8, 92292.0], [98.9, 92292.0], [99.0, 92292.0], [99.1, 92292.0], [99.2, 92292.0], [99.3, 92293.0], [99.4, 92293.0], [99.5, 92294.0], [99.6, 92294.0], [99.7, 92295.0], [99.8, 92295.0], [99.9, 92295.0], [100.0, 92295.0]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 242.0, "minX": 88300.0, "maxY": 258.0, "series": [{"data": [[88300.0, 258.0], [92200.0, 242.0]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 92200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 500.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 500.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 253.78799999999995, "minX": 1.76760624E12, "maxY": 253.78799999999995, "series": [{"data": [[1.76760624E12, 253.78799999999995]], "isOverall": false, "label": "Spike Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76760624E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 88377.0, "minX": 2.0, "maxY": 92287.5, "series": [{"data": [[2.0, 92249.0], [6.0, 92252.0], [9.0, 92250.33333333333], [12.0, 92250.66666666667], [14.0, 92253.0], [15.0, 92251.0], [18.0, 92250.66666666667], [22.0, 92248.5], [26.0, 92253.5], [31.0, 92252.4], [33.0, 92253.0], [36.0, 92247.33333333333], [41.0, 92249.4], [46.0, 92255.8], [49.0, 92248.33333333333], [50.0, 92251.0], [53.0, 92250.66666666667], [58.0, 92256.0], [60.0, 92250.0], [67.0, 92250.66666666667], [64.0, 92255.0], [74.0, 92254.6], [72.0, 92251.5], [79.0, 92250.0], [77.0, 92247.0], [83.0, 92249.5], [86.0, 92252.33333333333], [89.0, 92251.66666666667], [94.0, 92252.0], [98.0, 92254.75], [106.0, 92256.75], [110.0, 92252.5], [118.0, 92251.0], [116.0, 92251.0], [123.0, 92246.0], [122.0, 92252.0], [132.0, 92250.25], [128.0, 92252.8], [143.0, 92256.83333333333], [137.0, 92252.5], [136.0, 92249.0], [146.0, 92251.0], [157.0, 92251.0], [154.0, 92256.625], [163.0, 92247.66666666667], [160.0, 92251.66666666667], [175.0, 92250.0], [173.0, 92250.33333333333], [172.0, 92254.0], [169.0, 92256.0], [168.0, 92254.0], [180.0, 92251.0], [178.0, 92251.0], [186.0, 92255.0], [185.0, 92250.2], [194.0, 92251.375], [231.0, 92284.5], [229.0, 92285.875], [238.0, 92285.0], [237.0, 92285.66666666667], [236.0, 92281.5], [234.0, 92287.5], [232.0, 92272.73333333334], [247.0, 88381.0], [246.0, 88379.75], [242.0, 92279.0], [241.0, 92278.0], [240.0, 92286.0], [252.0, 88377.5], [248.0, 88377.0], [269.0, 88384.5], [265.0, 88380.75], [261.0, 88381.0], [256.0, 88385.0], [287.0, 88381.75], [283.0, 88381.75], [279.0, 88379.5], [275.0, 88382.0], [272.0, 88382.0], [301.0, 88380.0], [300.0, 88377.5], [296.0, 88381.0], [295.0, 88380.0], [293.0, 88380.0], [291.0, 88381.0], [316.0, 88384.0], [313.0, 88383.66666666667], [310.0, 88385.5], [306.0, 88381.0], [304.0, 88381.0], [333.0, 88380.5], [331.0, 88378.0], [328.0, 88379.0], [327.0, 88382.14285714286], [320.0, 88382.5], [351.0, 88383.0], [346.0, 88378.5], [344.0, 88379.0], [342.0, 88380.0], [341.0, 88378.33333333333], [338.0, 88382.2], [363.0, 88378.5], [359.0, 88379.66666666667], [356.0, 88381.0], [355.0, 88378.33333333333], [352.0, 88380.0], [371.0, 88381.0], [383.0, 88380.0], [381.0, 88382.0], [379.0, 88380.0], [377.0, 88379.33333333333], [374.0, 88381.0], [370.0, 88380.0], [369.0, 88380.0], [368.0, 88387.4], [399.0, 88381.16666666666], [393.0, 88381.0], [392.0, 88381.5], [388.0, 88386.2], [415.0, 88379.0], [414.0, 88381.6], [409.0, 88384.0], [404.0, 88380.33333333333], [401.0, 88378.5], [431.0, 88384.0], [430.0, 88383.0], [429.0, 88382.0], [428.0, 88377.0], [426.0, 88380.33333333333], [423.0, 88381.57142857143], [416.0, 88384.0], [446.0, 88381.5], [444.0, 88379.33333333333], [443.0, 88378.0], [440.0, 88377.0], [439.0, 88384.0], [435.0, 88379.0], [462.0, 88380.66666666667], [459.0, 88377.0], [458.0, 88384.25], [454.0, 88380.0], [452.0, 88381.0], [451.0, 88377.66666666667], [448.0, 88379.0], [477.0, 88381.0], [476.0, 88378.66666666667], [473.0, 88378.6], [468.0, 88384.0], [466.0, 88386.0], [480.0, 88385.33333333333], [500.0, 88382.75]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}, {"data": [[253.78799999999995, 90257.51600000005]], "isOverall": false, "label": "Spike - Get Accounts-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.76760624E12, "maxY": 20225.0, "series": [{"data": [[1.76760624E12, 20225.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76760624E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76760624E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 90257.51600000005, "minX": 1.76760624E12, "maxY": 90257.51600000005, "series": [{"data": [[1.76760624E12, 90257.51600000005]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76760624E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76760624E12, "maxY": 4.9E-324, "series": [{"data": [[1.76760624E12, 0.0]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76760624E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 90257.39199999998, "minX": 1.76760624E12, "maxY": 90257.39199999998, "series": [{"data": [[1.76760624E12, 90257.39199999998]], "isOverall": false, "label": "Spike - Get Accounts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76760624E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 88381.0, "minX": 107.0, "maxY": 92253.0, "series": [{"data": [[151.0, 88381.0], [107.0, 88381.0], [242.0, 92253.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 242.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 107.0, "maxY": 4.9E-324, "series": [{"data": [[151.0, 0.0], [107.0, 0.0], [242.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 242.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.76760612E12, "maxY": 8.333333333333334, "series": [{"data": [[1.76760612E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76760612E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.76760624E12, "maxY": 8.333333333333334, "series": [{"data": [[1.76760624E12, 8.333333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.NoRouteToHostException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76760624E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.76760624E12, "maxY": 8.333333333333334, "series": [{"data": [[1.76760624E12, 8.333333333333334]], "isOverall": false, "label": "Spike - Get Accounts-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76760624E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.76760624E12, "maxY": 8.333333333333334, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76760624E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76760624E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

