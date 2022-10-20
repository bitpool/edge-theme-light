/*
  MIT License Copyright 2021, 2022 - Bitpool Pty Ltd
*/

module.exports = function(RED) {
    RED.plugins.registerPlugin("bitpool-light-theme", {
        // Tells Node-RED this is a theme plugin
        type: "node-red-theme",

        // List the CSS files the theme provides. If there are
        // more than one, this should be an array of filenames
        css: ["style.css", "bitpool_style.css"],

        // List the script files the theme provides.
        // If the theme doesn't include any, this can be left out
        //scripts: ""
    });
};