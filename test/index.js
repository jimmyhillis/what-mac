var assert = require("assert")
  , Mac = require('../');

describe('Mac.configToJSON', function () {

    describe('MacBook Pro (15-inch, Mid 2012)', function () {
        var results = Mac.configToJSON('MacBook Pro (15-inch, Mid 2012)');
        it('should return "Mid 2012" for the year', function () {
            assert.equal(results.year, "Mid 2012");
        });
        it('should return "15-inch" for the size', function () {
            assert.equal(results.size, "15-inch");
        });
        it('should return "MacBook Pro" for the name', function () {
            assert.equal(results.name, "MacBook Pro");
        });
    });

    describe('iMac (27-inch, Late 2012)', function () {
        var results = Mac.configToJSON("iMac (27-inch, Late 2012)");
        it('should return "Late 2012" for the year', function () {
            assert.equal(results.year, "Late 2012");
        });
        it('should return "27-inch" for the size', function () {
            assert.equal(results.size, "27-inch");
        });
        it('should return "iMac" for the name', function () {
            assert.equal(results.name, "iMac");
        });
    });

    describe('iMac (24-inch Mid 2007)', function () {
        var results = Mac.configToJSON("iMac (24-inch Mid 2007)");
        it('should return "Mid 2007" for the year', function () {
            assert.equal(results.year, "Mid 2007");
        });
        it('should return "24-inch" for the size', function () {
            assert.equal(results.size, "24-inch");
        });
        it('should return "iMac" for the name', function () {
            assert.equal(results.name, "iMac");
        });
    });

    describe('MacBook Air (11-inch, Mid 2011)', function () {
        var results = Mac.configToJSON("MacBook Air (11-inch, Mid 2011)");
        it('should return "Mid 2011" for the year', function () {
            assert.equal(results.year, "Mid 2011");
        });
        it('should return "11-inch" for the size', function () {
            assert.equal(results.size, "11-inch");
        });
        it('should return "MacBook Air" for the name', function () {
            assert.equal(results.name, "MacBook Air");
        });
    });

    describe('MacBook Pro (Retina, Mid 2012)', function () {
        var results = Mac.configToJSON("MacBook Pro (Retina, Mid 2012)");
        it('should return "Mid 2012" for the year', function () {
            assert.equal(results.year, "Mid 2012");
        });
        it('should return "Retina" for the material', function () {
            assert.equal(results.material, "Retina");
        });
        it('should return "MacBook Pro" for the name', function () {
            assert.equal(results.name, "MacBook Pro");
        });
    });

    describe('MacBook (13-inch, Aluminum, Late 2008)', function () {
        var results = Mac.configToJSON("MacBook (13-inch, Aluminum, Late 2008)");
        it('should return "Late 2008" for the year', function () {
            assert.equal(results.year, "Late 2008");
        });
        it('should return "13-inch" for the size', function () {
            assert.equal(results.size, "13-inch");
        });
        it('should return "MacBook" for the name', function () {
            assert.equal(results.name, "MacBook");
        });
    });

    describe("Mac Pro (Mid 2010)", function () {
        var results = Mac.configToJSON("Mac Pro (Mid 2010)");
        it('should return "Mid 2010" for the year', function () {
            assert.equal(results.year, "Mid 2010");
        });
        it('should return null for the size', function () {
            assert.equal(results.size, null);
        });
        it('should return "Mac Pro" for the name', function () {
            assert.equal(results.name, "Mac Pro");
        });
    });

    describe('MacBook Pro (15-inch, 2.53GHz, Mid 2009)', function () {
        var results = Mac.configToJSON("MacBook Pro (15-inch, 2.53GHz, Mid 2009)");
        it('should return "Mid 2009" for the year', function () {
            assert.equal(results.year, "Mid 2009");
        });
        it('should return "15-inch" for the size', function () {
            assert.equal(results.size, "15-inch");
        });
        it('should return "MacBook Pro" for the name', function () {
            assert.equal(results.name, "MacBook Pro");
        });
    });

    describe('MacBook Pro (15-inch  2.4/2.2GHz)', function () {
        var results = Mac.configToJSON("MacBook Pro (15-inch  2.4/2.2GHz)");
        it('should return null for the year', function () {
            assert.equal(results.year, null);
        });
        it('should return "15-inch" for the size', function () {
            assert.equal(results.size, "15-inch");
        });
        it('should return "MacBook Pro" for the name', function () {
            assert.equal(results.name, "MacBook Pro");
        });
    });

    describe('MacBook (13-inch, Aluminum, Late 2008)', function () {
        var results = Mac.configToJSON("MacBook (13-inch, Aluminum, Late 2008)");
        it('should return "Late 2008" for the year', function () {
            assert.equal(results.year, "Late 2008");
        });
        it('should return "13-inch" for the size', function () {
            assert.equal(results.size, "13-inch");
        });
        it('should return "MacBook" for the name', function () {
            assert.equal(results.name, "MacBook");
        });
    });

});
