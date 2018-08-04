var OSRM = require('osrm');

var osrm = new OSRM('../texas/texas-latest.osrm');

/*
let waypoints = [
    [-97.982490,30.368656],
    [-97.944815, 30.305488],
    [-98.272800, 30.578245]
];
*/

let waypoints = [
    [-97.9644444,29.56861118],[-95.3904,30.1222],[-95.3868,30.1215],[-95.3912,30.1217],[-95.3912,30.1222],[-95.3885,30.1210],[-95.3894,30.1202],[-95.3895,30.1190],[-95.3907,30.1216],[-95.3894,30.1195],[-95.3879,30.1221],[-95.3906,30.1198],[-95.3867,30.1221],[-95.3896,30.1218],[-95.3881,30.1212],[-95.3911,30.1197],[-95.3904,30.1195],[-95.3898,30.1226],[-95.3900,30.1198],[-95.3892,30.1215],[-95.3902,30.1220],[-95.3921,30.1212],[-95.3904,30.1228],[-95.3902,30.1223],[-95.3887,30.1219],[-95.3913,30.1216],[-95.3920,30.1210],[-95.3895,30.1200],[-95.3899,30.1222],[-95.3893,30.1211],[-95.3905,30.1189],[-95.3900,30.1210],[-95.3891,30.1212],[-95.3868,30.1216],[-95.3891,30.1226],[-95.3884,30.1221],[-95.3893,30.1190],[-95.3897,30.1192],[-95.3902,30.1214],[-95.3867,30.1219],[-95.3875,30.1221],[-95.3905,30.1196],[-95.3900,30.1209],[-95.3882,30.1210],[-95.3920,30.1209],[-95.3877,30.1221],[-95.3904,30.1201],[-95.3876,30.1216],[-95.3899,30.1216],[-95.3876,30.1215],[-95.3889,30.1226],[-95.3901,30.1229],[-95.3903,30.1228],[-95.3904,30.1218],[-95.3882,30.1221],[-95.3906,30.1202],[-95.3907,30.1193],[-95.3899,30.1189],[-95.3868,30.1225],[-95.3877,30.1218],[-95.3873,30.1218],[-95.3900,30.1212],[-95.3908,30.1220],[-95.3873,30.1216],[-95.3887,30.1217],[-95.3891,30.1214],[-95.3894,30.1213],[-95.3905,30.1211],[-95.3882,30.1215],[-95.3867,30.1222],[-95.3867,30.1218],[-95.3894,30.1210],[-95.3916,30.1214],[-95.3882,30.1226],[-95.3882,30.1214],[-95.3888,30.1222],[-95.3894,30.1198],[-95.3890,30.1222],[-95.3899,30.1196],[-95.3903,30.1200],[-95.3906,30.1217],[-95.3893,30.1220],[-95.3909,30.1215],[-95.3866,30.1223],[-95.3894,30.1192],[-95.3902,30.1192],[-95.3916,30.1220],[-95.3886,30.1214],[-95.3900,30.1221],[-95.3870,30.1226],[-95.3910,30.1224],[-95.3919,30.1218],[-95.3905,30.1207],[-95.3922,30.1213],[-95.3879,30.1218],[-95.3907,30.1191],[-95.3906,30.1190],[-95.3890,30.1193],[-95.3902,30.1198],[-95.3903,30.1204],[-95.3902,30.1193],[-95.3886,30.1216],[-95.3868,30.1212],[-95.3885,30.1213],[-95.3894,30.1208],[-95.3899,30.1225],[-95.3909,30.1195],[-95.3873,30.1213],[-95.3890,30.1210],[-95.3890,30.1211],[-95.3898,30.1213],[-95.3908,30.1225],[-95.3875,30.1226],[-95.3909,30.1219],[-95.3877,30.1226],[-95.3906,30.1205],[-95.3896,30.1223],[-95.3906,30.1204],[-95.3876,30.1211],[-95.3915,30.1215],[-95.3887,30.1226],[-95.3868,30.1213],[-95.3900,30.1196],[-95.3895,30.1201],[-95.3896,30.1214],[-95.3904,30.1213],[-95.3911,30.1214],[-95.3872,30.1226],[-95.3911,30.1223],[-95.3906,30.1197],[-95.3899,30.1194],[-95.3900,30.1203],[-95.3881,30.1218],[-95.3880,30.1226],[-95.3914,30.1221],[-95.3874,30.1221],[-95.3905,30.1221],[-95.3918,30.1219],[-95.3893,30.1225],[-95.3915,30.1210],[-95.3906,30.1203],[-95.3895,30.1203],[-95.3890,30.1208],[-95.3885,30.1211],[-95.3901,30.1224],[-95.3903,30.1194],[-95.3900,30.1215],[-95.3911,30.1210],[-95.3893,30.1217],[-95.3899,30.1190],[-95.3897,30.1223],[-95.3881,30.1221],[-95.3910,30.1196],[-95.3873,30.1212],[-95.3915,30.1221],[-95.3895,30.1219],[-95.3884,30.1226],[-95.3879,30.1226],[-95.3896,30.1191],[-95.3921,30.1217],[-95.3912,30.1212],[-95.3922,30.1215],[-95.3901,30.1191],[-95.3897,30.1217],[-95.3873,30.1215],[-95.3908,30.1194],[-95.3907,30.1200],[-95.3903,30.1219],[-95.3872,30.1221],[-95.3903,30.1187],[-95.3895,30.1197],[-95.3911,30.1218],[-95.3892,30.1193],[-95.3876,30.1213],[-95.3916,30.1211],[-95.3906,30.1210],[-95.3906,30.1221],[-95.3883,30.1216],[-95.3907,30.1226],[-95.3886,30.1226],[-95.3886,30.1221],[-95.3898,30.1193],[-95.3904,30.1188],[-95.3905,30.1227],[-95.3901,30.1204],[-95.3873,30.1226],[-95.3873,30.1219],[-95.3902,30.1186],[-97.9644444,29.56861118]
];

osrm.route({coordinates: waypoints}, function(err, result) {
    if(err) throw err;
    console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
    console.log(result.routes); // array of Route objects ordered by descending recommendation rank
});