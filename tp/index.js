var TrackService = require('thailand-post').TrackService;

var trackService = new TrackService({
    lang: "EN" // either EN or TH
});
var get = function(barcode, callback) {
    trackService.init(function(err, serv) {

        serv.getItem(barcode, function(err, result) {
            if (err) {
                return console.log(err);
            }
            callback(result.ItemsData)
        });
    });

}
var gets = function(barcodes, callback) {
    var data = JSON.parse(barcodes);
    trackService.init(function(err, serv) {
        serv.getItems(data, function(err, result) {
            if (err) {
                return console.log(err);
            }

            callback(result.ItemsData)
        });
    });

}
exports.gets = gets;
exports.get = get;