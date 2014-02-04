/**
 * Mac API for discovering Apple hardware info from a serial number.
 */

var request = require('request')
  , xml2json = require('xml2js')
  , extend = require('util')._extend;

var API_URL = 'http://support-sp.apple.com/sp/product?cc=';

/**
 * Determine Mac hardware type from serial number.
 *
 * @param {String} serial Apple hardware seial number
 */
exports.bySerial = function (serial, callback) {
    var api_request = API_URL + _versionNumber(serial);
    var mac = {
        serial: serial
    };
    request(api_request, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            xml2json.parseString(body, function (err, result) {
                if ('error' in result.root) {
                    mac = extend(mac, { 'name': 'unknown' });
                }
                else {
                    mac = extend(mac, exports.configToJSON(result.root.configCode[0]));
                }
                callback(null, JSON.stringify(mac));
            });
        }
    });
};

/**
 * Determine required digits to provide Apple from full hardware serial.
 * @param {String} serial Apple hardware seial number
 *
 * @return {String} Version number used to represend hardware types
 */
var _versionNumber = function (serial) {
    return (serial.length === 11) ? serial.substr(-3, 3) : serial.substr(-4, 4);
};

/**
 * Generate usable JSON from configuration data string provided by Apple
 * @param  {String} config Apple provided configuration string
 *
 * @return {object}        Split object version of data
 */

var MATERIALS = ['Aluminum', 'Retina'];

exports.configToJSON = function (config) {
    var name, size, year, material, speed;
    // Split the computer name, and the rest out
    var config_parts = config.split(/[\(\)]+/).
        filter(function (x) {
            return x;
        });
    name = config_parts.shift();
    config_parts = config_parts.join();
    // Find and remove the material type (aluminum, retina)
    MATERIALS.forEach(function (item) {
        material = config_parts.indexOf(item) >= 0 ? item : null;
        if (material === item) {
            config_parts = config_parts.replace(item, '');
        }
    });
    // We now have what could be a size + a year range depending on the
    // machine so pt them together and break it up again on a space or
    // a comma
    config_parts = config_parts.split(/[\s,]+/);
    // Find and remove any speed included
    config_parts.forEach(function (item, index) {
        if (item.indexOf('Hz') >= 0) {
            speed = config_parts.splice(index, 1);
        }
    })
    // If there is a size it will have inches
    if (config_parts[0].indexOf('inch') > 0) {
        size = config_parts.shift();
    }
    year = config_parts.join(' ');
    return {
        _configCode: config,
        name: name.trim() || null,
        size: size && size.trim() || null,
        year: year && year.trim() || null,
        material: material || null,
        speed: speed || null
    }
};
