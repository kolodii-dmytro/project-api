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
