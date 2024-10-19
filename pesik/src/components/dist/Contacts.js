"use strict";
exports.__esModule = true;
var SocialsMedia_1 = require("./SocialsMedia");
var SocialsContacts_1 = require("./SocialsContacts");
function Contacts() {
    return (React.createElement("ul", { className: "hidden md:mt-[-50px] md:flex md:shrink-0 md:items-center md:gap-4 md:whitespace-nowrap lg:mt-0" },
        React.createElement(SocialsContacts_1["default"], null),
        React.createElement(SocialsMedia_1["default"], null)));
}
exports["default"] = Contacts;
