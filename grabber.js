var sjs = require('scraperjs');

var grab = function (req, callback) {

    var url = req. url,
        listRoot = req.listRoot || '',
        fields = req.fields || [];

    sjs.StaticScraper.create(url)
        .scrape(function ($) {

            return $(listRoot).map(function () {

                var result = {};
                var $element = $(this);

                fields.forEach(function(field) {
                    if(field.name && field.path) {
                        if(field.attr) {
                            result[field.name] = $element.find(field.path).attr(field.attr);
                        } else {
                            result[field.name] = $element.find(field.path).text();
                        }
                    }
                });

                return result;

            }).get();

        }, callback);
};


module.exports = exports = grab;
