/**
 * Created by ctacuri on 22/11/2016.
 */
var script_arr = [
    'bower_components/highcharts/highcharts.js',
    'bower_components/highcharts/highcharts-more.js',
    'bower_components/highcharts/highcharts-3d.js',
    'bower_components/highcharts/modules/solid-gauge.js',

    //'bower_components/highcharts-custom-events/js/customEvents.js',
    'bower_components/highcharts/modules/exporting.js',
]

for (var i = 0; i < script_arr.length; i++) {
    var newString = '<script type="text/javascript" src="' + script_arr[i] + '"></script>'; //.replace('src="', 'src="' + dirModule + '/');
    document.write(newString);
    //console.log(newString);
}
