/* let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.086414, lng: 17.520102 },
    zoom: 9,
  });
}

function addMarker() {
  const marker = new google.maps.Marker({
    position: { lat: 54.302121, lng: 18.419949 },
    label: "ATEGO WI038GY",
    map: map,
  });
} */

function drawRoute() {
  const route = new google.maps.Polyline({
    path: arr,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 5,
  });
  route.setMap(map);
}

const arr = [
  { lat: 54.545401, lng: 17.765765 },
  { lat: 54.54556, lng: 17.766063 },
  { lat: 54.54544, lng: 17.766049 },
  { lat: 54.545528, lng: 17.765932 },
  { lat: 54.545775, lng: 17.766044 },
  { lat: 54.545833, lng: 17.766047 },
  { lat: 54.545882, lng: 17.765889 },
  { lat: 54.545935, lng: 17.766043 },
  { lat: 54.546027, lng: 17.766047 },
  { lat: 54.546106, lng: 17.766142 },
  { lat: 54.546053, lng: 17.766001 },
  { lat: 54.545952, lng: 17.76597 },
  { lat: 54.546095, lng: 17.766011 },
  { lat: 54.546149, lng: 17.76622 },
  { lat: 54.546146, lng: 17.766431 },
  { lat: 54.546229, lng: 17.766547 },
  { lat: 54.546323, lng: 17.76655 },
  { lat: 54.546435, lng: 17.766506 },
  { lat: 54.546549, lng: 17.766481 },
  { lat: 54.546662, lng: 17.766415 },
  { lat: 54.546746, lng: 17.766215 },
  { lat: 54.546807, lng: 17.766099 },
  { lat: 54.546918, lng: 17.76607 },
  { lat: 54.546875, lng: 17.765883 },
  { lat: 54.546903, lng: 17.766038 },
  { lat: 54.54674, lng: 17.765813 },
  { lat: 54.54666, lng: 17.765967 },
  { lat: 54.54688, lng: 17.765661 },
  { lat: 54.546855, lng: 17.766185 },
  { lat: 54.546895, lng: 17.766354 },
  { lat: 54.546923, lng: 17.766206 },
  { lat: 54.546941, lng: 17.766016 },
  { lat: 54.546841, lng: 17.766064 },
  { lat: 54.546733, lng: 17.76604 },
  { lat: 54.546701, lng: 17.765885 },
  { lat: 54.546696, lng: 17.765714 },
  { lat: 54.546701, lng: 17.765463 },
  { lat: 54.54669, lng: 17.765292 },
  { lat: 54.54668, lng: 17.765108 },
  { lat: 54.546668, lng: 17.764897 },
  { lat: 54.546664, lng: 17.764702 },
  { lat: 54.546661, lng: 17.764492 },
  { lat: 54.546675, lng: 17.764258 },
  { lat: 54.546671, lng: 17.763997 },
  { lat: 54.546658, lng: 17.763722 },
  { lat: 54.54665, lng: 17.763465 },
  { lat: 54.546638, lng: 17.763212 },
  { lat: 54.546629, lng: 17.762962 },
  { lat: 54.546615, lng: 17.762702 },
  { lat: 54.5466, lng: 17.76245 },
  { lat: 54.54659, lng: 17.762189 },
  { lat: 54.546582, lng: 17.761929 },
  { lat: 54.546557, lng: 17.761666 },
  { lat: 54.546538, lng: 17.761403 },
  { lat: 54.546509, lng: 17.761145 },
  { lat: 54.546499, lng: 17.760872 },
  { lat: 54.546488, lng: 17.76064 },
  { lat: 54.546472, lng: 17.760408 },
  { lat: 54.546464, lng: 17.760156 },
  { lat: 54.546451, lng: 17.759891 },
  { lat: 54.546438, lng: 17.759615 },
  { lat: 54.546425, lng: 17.759361 },
  { lat: 54.546437, lng: 17.759131 },
  { lat: 54.546432, lng: 17.758893 },
  { lat: 54.546421, lng: 17.758643 },
  { lat: 54.546405, lng: 17.758371 },
  { lat: 54.546386, lng: 17.758125 },
  { lat: 54.546357, lng: 17.757853 },
  { lat: 54.546325, lng: 17.757583 },
  { lat: 54.54629, lng: 17.757348 },
  { lat: 54.546246, lng: 17.7571 },
  { lat: 54.546197, lng: 17.756869 },
  { lat: 54.546146, lng: 17.756655 },
  { lat: 54.5461, lng: 17.756471 },
  { lat: 54.546019, lng: 17.756256 },
  { lat: 54.545953, lng: 17.756019 },
  { lat: 54.545889, lng: 17.755805 },
  { lat: 54.545833, lng: 17.755606 },
  { lat: 54.545754, lng: 17.755392 },
  { lat: 54.545665, lng: 17.755256 },
  { lat: 54.545538, lng: 17.755114 },
  { lat: 54.545411, lng: 17.755038 },
  { lat: 54.54527, lng: 17.75503 },
  { lat: 54.545145, lng: 17.754991 },
  { lat: 54.545022, lng: 17.75499 },
  { lat: 54.544897, lng: 17.754987 },
  { lat: 54.544788, lng: 17.754983 },
  { lat: 54.544697, lng: 17.754987 },
  { lat: 54.544545, lng: 17.754983 },
  { lat: 54.544451, lng: 17.754983 },
  { lat: 54.54434, lng: 17.754918 },
  { lat: 54.544304, lng: 17.754749 },
  { lat: 54.544301, lng: 17.754508 },
  { lat: 54.544303, lng: 17.754299 },
  { lat: 54.544333, lng: 17.754098 },
  { lat: 54.544319, lng: 17.753926 },
  { lat: 54.544203, lng: 17.753956 },
  { lat: 54.544095, lng: 17.753866 },
  { lat: 54.543997, lng: 17.753783 },
  { lat: 54.543961, lng: 17.753597 },
  { lat: 54.543901, lng: 17.753462 },
  { lat: 54.543867, lng: 17.753282 },
  { lat: 54.543789, lng: 17.753108 },
  { lat: 54.543735, lng: 17.752912 },
  { lat: 54.543684, lng: 17.752701 },
  { lat: 54.543651, lng: 17.752523 },
  { lat: 54.543688, lng: 17.752339 },
  { lat: 54.543764, lng: 17.752225 },
  { lat: 54.543845, lng: 17.752092 },
  { lat: 54.543932, lng: 17.751949 },
  { lat: 54.544031, lng: 17.751794 },
  { lat: 54.544134, lng: 17.751682 },
  { lat: 54.544222, lng: 17.75157 },
  { lat: 54.544309, lng: 17.751451 },
  { lat: 54.544386, lng: 17.751347 },
  { lat: 54.544456, lng: 17.75118 },
  { lat: 54.544357, lng: 17.751026 },
  { lat: 54.544286, lng: 17.750835 },
  { lat: 54.544191, lng: 17.750636 },
  { lat: 54.544099, lng: 17.750456 },
  { lat: 54.544043, lng: 17.750333 },
  { lat: 54.543972, lng: 17.750502 },
  { lat: 54.543898, lng: 17.750619 },
  { lat: 54.543831, lng: 17.750725 },
  { lat: 54.54389, lng: 17.7506 },
  { lat: 54.543758, lng: 17.750824 },
  { lat: 54.543683, lng: 17.750616 },
  { lat: 54.543603, lng: 17.750375 },
  { lat: 54.543582, lng: 17.750448 },
  { lat: 54.543656, lng: 17.750594 },
  { lat: 54.543566, lng: 17.750567 },
  { lat: 54.543761, lng: 17.750616 },
  { lat: 54.543768, lng: 17.750682 },
  { lat: 54.543671, lng: 17.750863 },
  { lat: 54.543597, lng: 17.75098 },
  { lat: 54.543587, lng: 17.751143 },
  { lat: 54.543644, lng: 17.7513 },
  { lat: 54.543703, lng: 17.751454 },
  { lat: 54.543768, lng: 17.751595 },
  { lat: 54.54383, lng: 17.751713 },
  { lat: 54.543876, lng: 17.751867 },
  { lat: 54.543963, lng: 17.751927 },
  { lat: 54.544043, lng: 17.751843 },
  { lat: 54.544105, lng: 17.751712 },
  { lat: 54.544204, lng: 17.751602 },
  { lat: 54.544293, lng: 17.751511 },
  { lat: 54.544379, lng: 17.751425 },
  { lat: 54.544457, lng: 17.751274 },
  { lat: 54.544447, lng: 17.751066 },
  { lat: 54.544378, lng: 17.750928 },
  { lat: 54.544294, lng: 17.750737 },
  { lat: 54.54422, lng: 17.750561 },
  { lat: 54.544111, lng: 17.750404 },
  { lat: 54.544041, lng: 17.750264 },
  { lat: 54.543987, lng: 17.750123 },
  { lat: 54.543926, lng: 17.749978 },
  { lat: 54.543846, lng: 17.74979 },
  { lat: 54.543777, lng: 17.749623 },
  { lat: 54.543727, lng: 17.749476 },
  { lat: 54.543677, lng: 17.749342 },
  { lat: 54.543622, lng: 17.749194 },
  { lat: 54.543532, lng: 17.749022 },
  { lat: 54.543471, lng: 17.748817 },
  { lat: 54.543382, lng: 17.748606 },
  { lat: 54.543263, lng: 17.748451 },
  { lat: 54.543189, lng: 17.748298 },
  { lat: 54.543111, lng: 17.748134 },
  { lat: 54.543043, lng: 17.747982 },
  { lat: 54.542973, lng: 17.747794 },
  { lat: 54.542916, lng: 17.747661 },
  { lat: 54.542807, lng: 17.747403 },
  { lat: 54.542707, lng: 17.747194 },
  { lat: 54.542625, lng: 17.746978 },
  { lat: 54.54254, lng: 17.746771 },
  { lat: 54.542462, lng: 17.746524 },
  { lat: 54.542377, lng: 17.746309 },
  { lat: 54.54229, lng: 17.746112 },
  { lat: 54.542213, lng: 17.745942 },
  { lat: 54.542137, lng: 17.745778 },
  { lat: 54.54207, lng: 17.745628 },
  { lat: 54.542004, lng: 17.745486 },
  { lat: 54.541942, lng: 17.74534 },
  { lat: 54.541877, lng: 17.745191 },
  { lat: 54.541829, lng: 17.745057 },
  { lat: 54.541799, lng: 17.744846 },
  { lat: 54.542052, lng: 17.744741 },
  { lat: 54.542133, lng: 17.744639 },
  { lat: 54.542216, lng: 17.744535 },
  { lat: 54.542327, lng: 17.744394 },
  { lat: 54.542416, lng: 17.744283 },
  { lat: 54.542536, lng: 17.744132 },
  { lat: 54.542623, lng: 17.744003 },
  { lat: 54.542732, lng: 17.744008 },
  { lat: 54.542822, lng: 17.743973 },
  { lat: 54.542945, lng: 17.743949 },
  { lat: 54.543123, lng: 17.743982 },
  { lat: 54.543262, lng: 17.744083 },
  { lat: 54.543331, lng: 17.744194 },
  { lat: 54.543432, lng: 17.744017 },
  { lat: 54.543524, lng: 17.743857 },
  { lat: 54.543633, lng: 17.743647 },
  { lat: 54.543694, lng: 17.743531 },
  { lat: 54.543807, lng: 17.743311 },
  { lat: 54.543914, lng: 17.743098 },
  { lat: 54.543961, lng: 17.742838 },
  { lat: 54.543961, lng: 17.742683 },
  { lat: 54.543957, lng: 17.742504 },
  { lat: 54.543944, lng: 17.742309 },
  { lat: 54.543938, lng: 17.742109 },
  { lat: 54.543934, lng: 17.7419 },
  { lat: 54.543931, lng: 17.741685 },
  { lat: 54.543931, lng: 17.741462 },
  { lat: 54.543932, lng: 17.741236 },
  { lat: 54.543936, lng: 17.741008 },
  { lat: 54.543938, lng: 17.74078 },
  { lat: 54.54394, lng: 17.740556 },
  { lat: 54.543941, lng: 17.740341 },
  { lat: 54.543936, lng: 17.740133 },
  { lat: 54.543928, lng: 17.739932 },
  { lat: 54.543922, lng: 17.739739 },
  { lat: 54.543939, lng: 17.739543 },
  { lat: 54.543972, lng: 17.739348 },
  { lat: 54.544019, lng: 17.739151 },
  { lat: 54.544068, lng: 17.738948 },
  { lat: 54.544125, lng: 17.738743 },
  { lat: 54.544176, lng: 17.738528 },
  { lat: 54.54423, lng: 17.738312 },
  { lat: 54.544283, lng: 17.738096 },
  { lat: 54.544349, lng: 17.737894 },
  { lat: 54.544405, lng: 17.737685 },
  { lat: 54.54446, lng: 17.737484 },
  { lat: 54.544516, lng: 17.737279 },
  { lat: 54.544569, lng: 17.73709 },
  { lat: 54.54462, lng: 17.736889 },
  { lat: 54.544656, lng: 17.736686 },
  { lat: 54.544683, lng: 17.736484 },
  { lat: 54.544701, lng: 17.736287 },
  { lat: 54.544715, lng: 17.736102 },
  { lat: 54.544723, lng: 17.73593 },
  { lat: 54.54473, lng: 17.735761 },
  { lat: 54.544742, lng: 17.735473 },
  { lat: 54.544752, lng: 17.735249 },
  { lat: 54.544759, lng: 17.735072 },
  { lat: 54.54477, lng: 17.734838 },
  { lat: 54.54478, lng: 17.734626 },
  { lat: 54.544799, lng: 17.734324 },
  { lat: 54.544812, lng: 17.73415 },
  { lat: 54.544828, lng: 17.733947 },
  { lat: 54.544842, lng: 17.733733 },
  { lat: 54.544862, lng: 17.7335 },
  { lat: 54.544884, lng: 17.733249 },
  { lat: 54.544905, lng: 17.733 },
  { lat: 54.544931, lng: 17.732766 },
  { lat: 54.544952, lng: 17.732563 },
  { lat: 54.544971, lng: 17.732394 },
  { lat: 54.544992, lng: 17.732154 },
  { lat: 54.545025, lng: 17.731951 },
  { lat: 54.545052, lng: 17.731686 },
  { lat: 54.545069, lng: 17.731519 },
  { lat: 54.545087, lng: 17.731327 },
  { lat: 54.545107, lng: 17.731126 },
  { lat: 54.545126, lng: 17.730921 },
  { lat: 54.545146, lng: 17.730697 },
  { lat: 54.545167, lng: 17.730465 },
  { lat: 54.545188, lng: 17.730218 },
  { lat: 54.545212, lng: 17.729962 },
  { lat: 54.545234, lng: 17.729695 },
  { lat: 54.545259, lng: 17.729429 },
  { lat: 54.545284, lng: 17.729165 },
  { lat: 54.545307, lng: 17.7289 },
  { lat: 54.545329, lng: 17.728639 },
  { lat: 54.545349, lng: 17.728379 },
  { lat: 54.545372, lng: 17.728123 },
  { lat: 54.545395, lng: 17.727872 },
  { lat: 54.545419, lng: 17.72762 },
  { lat: 54.545444, lng: 17.72736 },
  { lat: 54.545485, lng: 17.727105 },
  { lat: 54.545497, lng: 17.72684 },
  { lat: 54.545521, lng: 17.726575 },
  { lat: 54.545565, lng: 17.726312 },
  { lat: 54.545607, lng: 17.72604 },
  { lat: 54.545635, lng: 17.725759 },
  { lat: 54.545663, lng: 17.725483 },
  { lat: 54.545677, lng: 17.725193 },
  { lat: 54.545706, lng: 17.724897 },
  { lat: 54.545738, lng: 17.724604 },
  { lat: 54.545772, lng: 17.724309 },
  { lat: 54.545803, lng: 17.724018 },
  { lat: 54.545832, lng: 17.723735 },
  { lat: 54.545866, lng: 17.723459 },
  { lat: 54.545897, lng: 17.723192 },
  { lat: 54.545925, lng: 17.722941 },
  { lat: 54.545933, lng: 17.722712 },
  { lat: 54.545954, lng: 17.722501 },
  { lat: 54.545972, lng: 17.722323 },
  { lat: 54.545995, lng: 17.722064 },
  { lat: 54.546014, lng: 17.721858 },
  { lat: 54.546036, lng: 17.721677 },
  { lat: 54.546257, lng: 17.721756 },
  { lat: 54.546375, lng: 17.721801 },
  { lat: 54.546481, lng: 17.721859 },
  { lat: 54.546585, lng: 17.721915 },
  { lat: 54.546695, lng: 17.72197 },
  { lat: 54.546799, lng: 17.72206 },
  { lat: 54.546862, lng: 17.721944 },
  { lat: 54.546769, lng: 17.721924 },
  { lat: 54.546695, lng: 17.721788 },
];

const arr2 = [
    '54.545401,17.765765',
    '54.545560,17.766063',
    '54.545440,17.766049',
    '54.545528,17.765932',
    '54.545775,17.766044',
    '54.545833,17.766047',
    '54.545882,17.765889',
    '54.545935,17.766043',
    '54.546027,17.766047',
    '54.546106,17.766142',
    '54.546053,17.766001',
    '54.545952,17.765970',
    '54.546095,17.766011',
    '54.546149,17.766220',
    '54.546146,17.766431',
    '54.546229,17.766547',
    '54.546323,17.766550',
    '54.546435,17.766506',
    '54.546549,17.766481',
    '54.546662,17.766415',
    '54.546746,17.766215',
    '54.546807,17.766099',
    '54.546918,17.766070',
    '54.546875,17.765883',
    '54.546903,17.766038',
    '54.546740,17.765813',
    '54.546660,17.765967',
    '54.546880,17.765661',
    '54.546855,17.766185',
    '54.546895,17.766354',
    '54.546923,17.766206',
    '54.546941,17.766016',
    '54.546841,17.766064',
    '54.546733,17.766040',
    '54.546701,17.765885',
    '54.546696,17.765714',
    '54.546701,17.765463',
    '54.546690,17.765292',
    '54.546680,17.765108',
    '54.546668,17.764897',
    '54.546664,17.764702',
    '54.546661,17.764492',
    '54.546675,17.764258',
    '54.546671,17.763997',
    '54.546658,17.763722',
    '54.546650,17.763465',
    '54.546638,17.763212',
    '54.546629,17.762962',
    '54.546615,17.762702',
    '54.546600,17.762450',
    '54.546590,17.762189',
    '54.546582,17.761929',
    '54.546557,17.761666',
    '54.546538,17.761403',
    '54.546509,17.761145',
    '54.546499,17.760872',
    '54.546488,17.760640',
    '54.546472,17.760408',
    '54.546464,17.760156',
    '54.546451,17.759891',
    '54.546438,17.759615',
    '54.546425,17.759361',
    '54.546437,17.759131',
    '54.546432,17.758893',
    '54.546421,17.758643',
    '54.546405,17.758371',
    '54.546386,17.758125',
    '54.546357,17.757853',
    '54.546325,17.757583',
    '54.546290,17.757348',
    '54.546246,17.757100',
    '54.546197,17.756869',
    '54.546146,17.756655',
    '54.546100,17.756471',
    '54.546019,17.756256',
    '54.545953,17.756019',
    '54.545889,17.755805',
    '54.545833,17.755606',
    '54.545754,17.755392',
    '54.545665,17.755256',
    '54.545538,17.755114',
    '54.545411,17.755038',
    '54.545270,17.755030',
    '54.545145,17.754991',
    '54.545022,17.754990',
    '54.544897,17.754987',
    '54.544788,17.754983',
    '54.544697,17.754987',
    '54.544545,17.754983',
    '54.544451,17.754983',
    '54.544340,17.754918',
    '54.544304,17.754749',
    '54.544301,17.754508',
    '54.544303,17.754299',
    '54.544333,17.754098',
    '54.544319,17.753926',
    '54.544203,17.753956',
    '54.544095,17.753866',
    '54.543997,17.753783',
    '54.543961,17.753597',
    '54.543901,17.753462',
    '54.543867,17.753282',
    '54.543789,17.753108',
    '54.543735,17.752912',
    '54.543684,17.752701',
    '54.543651,17.752523',
    '54.543688,17.752339',
    '54.543764,17.752225',
    '54.543845,17.752092',
    '54.543932,17.751949',
    '54.544031,17.751794',
    '54.544134,17.751682',
    '54.544222,17.751570',
    '54.544309,17.751451',
    '54.544386,17.751347',
    '54.544456,17.751180',
    '54.544357,17.751026',
    '54.544286,17.750835',
    '54.544191,17.750636',
    '54.544099,17.750456',
    '54.544043,17.750333',
    '54.543972,17.750502',
    '54.543898,17.750619',
    '54.543831,17.750725',
    '54.543890,17.750600',
    '54.543758,17.750824',
    '54.543683,17.750616',
    '54.543603,17.750375',
    '54.543582,17.750448',
    '54.543656,17.750594',
    '54.543566,17.750567',
    '54.543761,17.750616',
    '54.543768,17.750682',
    '54.543671,17.750863',
    '54.543597,17.750980',
    '54.543587,17.751143',
    '54.543644,17.751300',
    '54.543703,17.751454',
    '54.543768,17.751595',
    '54.543830,17.751713',
    '54.543876,17.751867',
    '54.543963,17.751927',
    '54.544043,17.751843',
    '54.544105,17.751712',
    '54.544204,17.751602',
    '54.544293,17.751511',
    '54.544379,17.751425',
    '54.544457,17.751274',
    '54.544447,17.751066',
    '54.544378,17.750928',
    '54.544294,17.750737',
    '54.544220,17.750561',
    '54.544111,17.750404',
    '54.544041,17.750264',
    '54.543987,17.750123',
    '54.543926,17.749978',
    '54.543846,17.749790',
    '54.543777,17.749623',
    '54.543727,17.749476',
    '54.543677,17.749342',
    '54.543622,17.749194',
    '54.543532,17.749022',
    '54.543471,17.748817',
    '54.543382,17.748606',
    '54.543263,17.748451',
    '54.543189,17.748298',
    '54.543111,17.748134',
    '54.543043,17.747982',
    '54.542973,17.747794',
    '54.542916,17.747661',
    '54.542807,17.747403',
    '54.542707,17.747194',
    '54.542625,17.746978',
    '54.542540,17.746771',
    '54.542462,17.746524',
    '54.542377,17.746309',
    '54.542290,17.746112',
    '54.542213,17.745942',
    '54.542137,17.745778',
    '54.542070,17.745628',
    '54.542004,17.745486',
    '54.541942,17.745340',
    '54.541877,17.745191',
    '54.541829,17.745057',
    '54.541799,17.744846',
    '54.542052,17.744741',
    '54.542133,17.744639',
    '54.542216,17.744535',
    '54.542327,17.744394',
    '54.542416,17.744283',
    '54.542536,17.744132',
    '54.542623,17.744003',
    '54.542732,17.744008',
    '54.542822,17.743973',
    '54.542945,17.743949',
    '54.543123,17.743982',
    '54.543262,17.744083',
    '54.543331,17.744194',
    '54.543432,17.744017',
    '54.543524,17.743857',
    '54.543633,17.743647',
    '54.543694,17.743531',
    '54.543807,17.743311',
    '54.543914,17.743098',
    '54.543961,17.742838',
    '54.543961,17.742683',
    '54.543957,17.742504',
    '54.543944,17.742309',
    '54.543938,17.742109',
    '54.543934,17.741900',
    '54.543931,17.741685',
    '54.543931,17.741462',
    '54.543932,17.741236',
    '54.543936,17.741008',
    '54.543938,17.740780',
    '54.543940,17.740556',
    '54.543941,17.740341',
    '54.543936,17.740133',
    '54.543928,17.739932',
    '54.543922,17.739739',
    '54.543939,17.739543',
    '54.543972,17.739348',
    '54.544019,17.739151',
    '54.544068,17.738948',
    '54.544125,17.738743',
    '54.544176,17.738528',
    '54.544230,17.738312',
    '54.544283,17.738096',
    '54.544349,17.737894',
    '54.544405,17.737685',
    '54.544460,17.737484',
    '54.544516,17.737279',
    '54.544569,17.737090',
    '54.544620,17.736889',
    '54.544656,17.736686',
    '54.544683,17.736484',
    '54.544701,17.736287',
    '54.544715,17.736102',
    '54.544723,17.735930',
    '54.544730,17.735761',
    '54.544742,17.735473',
    '54.544752,17.735249',
    '54.544759,17.735072',
    '54.544770,17.734838',
    '54.544780,17.734626',
    '54.544799,17.734324',
    '54.544812,17.734150',
    '54.544828,17.733947',
    '54.544842,17.733733',
    '54.544862,17.733500',
    '54.544884,17.733249',
    '54.544905,17.733000',
    '54.544931,17.732766',
    '54.544952,17.732563',
    '54.544971,17.732394',
    '54.544992,17.732154',
    '54.545025,17.731951',
    '54.545052,17.731686',
    '54.545069,17.731519',
    '54.545087,17.731327',
    '54.545107,17.731126',
    '54.545126,17.730921',
    '54.545146,17.730697',
    '54.545167,17.730465',
    '54.545188,17.730218',
    '54.545212,17.729962',
    '54.545234,17.729695',
    '54.545259,17.729429',
    '54.545284,17.729165',
    '54.545307,17.728900',
    '54.545329,17.728639',
    '54.545349,17.728379',
    '54.545372,17.728123',
    '54.545395,17.727872',
    '54.545419,17.727620',
    '54.545444,17.727360',
    '54.545485,17.727105',
    '54.545497,17.726840',
    '54.545521,17.726575',
    '54.545565,17.726312',
    '54.545607,17.726040',
    '54.545635,17.725759',
    '54.545663,17.725483',
    '54.545677,17.725193',
    '54.545706,17.724897',
    '54.545738,17.724604',
    '54.545772,17.724309',
    '54.545803,17.724018',
    '54.545832,17.723735',
    '54.545866,17.723459',
    '54.545897,17.723192',
    '54.545925,17.722941',
    '54.545933,17.722712',
    '54.545954,17.722501',
    '54.545972,17.722323',
    '54.545995,17.722064',
    '54.546014,17.721858',
    '54.546036,17.721677',
    '54.546257,17.721756',
    '54.546375,17.721801',
    '54.546481,17.721859',
    '54.546585,17.721915',
    '54.546695,17.721970',
    '54.546799,17.722060',
    '54.546862,17.721944',
    '54.546769,17.721924',
    '54.546695,17.721788'
];
var apiKey = "AIzaSyDEoybpYWlvV_3bR-DhnLS9psB8HTQPHJU";

var map;
var drawingManager;
var placeIdArray = [];
var polylines = [];
var snappedCoordinates = [];

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: {lat: 54.086414, lng: 17.520102}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);


  // Clear button. Click to remove all polylines.
  document.getElementById('clear').addEventListener('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < polylines.length; ++i) {
      polylines[i].setMap(null);
    }
    polylines = [];
    return false;
  });
}

// Snap a user-created polyline to roads and draw the snapped path

function runSnapToRoad(path) {
  var pathValues = [];
  var len = path.length;
  var ile = Math.floor(len/100)+1;
  var reszta = len%100;
  for (var j = 0; j<ile; j++){
    if(j==0){        
        start=0;
        koniec=100;
    }else if(j==ile-1){        
        start=(j*100)+1;
        koniec=(j*100)+reszta;
    }else{
        start=(j*100)+1;
        koniec=((j+1)*100)+1;
    } 
    
    for (var i = start; i < koniec; i++) {
        pathValues.push(path[i]);
    }
    console.log("Pętla nr"+j);
    console.log("Ile pętli"+ile);
    console.log("Od"+start);
    console.log("Do"+koniec);
    console.log("Ile pkt"+pathValues.length);
    console.log("Punkty"+pathValues);
    $.get('https://roads.googleapis.com/v1/snapToRoads', {
        interpolate: true,
        key: apiKey,
        path: pathValues.join('|')
    }, function(data) {
        processSnapToRoadResponse(data);
        drawSnappedPolyline();        
    }).fail(function(){
        alert("error");
    });
    pathValues=[];
    } 
}

// Store snapped polyline returned by the snap-to-road service.
function processSnapToRoadResponse(data) {
  snappedCoordinates = [];
  placeIdArray = [];
  for (var i = 0; i < data.snappedPoints.length; i++) {
    var latlng = new google.maps.LatLng(
        data.snappedPoints[i].location.latitude,
        data.snappedPoints[i].location.longitude);
    snappedCoordinates.push(latlng);
    placeIdArray.push(data.snappedPoints[i].placeId);
  }
}

// Draws the snapped polyline (after processing snap-to-road response).
function drawSnappedPolyline() {
  var snappedPolyline = new google.maps.Polyline({
    path: snappedCoordinates,
    strokeColor: '#000000',
    strokeWeight: 5,
    strokeOpacity: 1,
  });

  snappedPolyline.setMap(map);
  polylines.push(snappedPolyline);
}

$(window).load(initialize);


