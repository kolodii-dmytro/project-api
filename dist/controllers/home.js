"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = function (req, res) {
    var languages = [
        {
            language: 'Spanish3'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
};
exports.getObjectKeys = function (req, res) {
    var obj = {
        data: {
            key: {
                subkey: 1,
                subkey2: 2
            },
            kel: 4
        },
        current: 3
    };
    var getObjKeys = function (data, path, result) {
        Object.keys(data).forEach(function (key) { return typeof data[key] === 'object'
            ? getObjKeys(data[key], "" + (path ? path + '.' : '') + key, result)
            : result["" + (path ? path + '.' : '') + key] = data[key]; });
        return result;
    };
    var result = getObjKeys(obj, '', {});
    res.json([obj, result]);
};
