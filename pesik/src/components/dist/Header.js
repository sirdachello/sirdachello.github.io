"use strict";
exports.__esModule = true;
var Navigation_1 = require("./Navigation");
var Contacts_1 = require("./Contacts");
var SocialsMediaMobile_jsx_1 = require("./SocialsMediaMobile.jsx");
var SocialsContactsMobile_jsx_1 = require("./SocialsContactsMobile.jsx");
var logo_brown_svg_1 = require("../assets/Images/logo_brown.svg");
function Header() {
    return (React.createElement("header", { className: "mx-5 my-5 flex justify-between md:mx-8 xl:mx-[80px] 2xl:mx-[108px]" },
        React.createElement("img", { className: "sm-400:size-auto sm-400:mt-0 sm-400:ml-0 ml-[-14px] mt-[-20px] size-[25vw]", src: logo_brown_svg_1["default"], alt: "Brand Logo" }),
        React.createElement(Navigation_1["default"], null),
        React.createElement(Contacts_1["default"], null),
        React.createElement(SocialsContactsMobile_jsx_1["default"], null),
        React.createElement(SocialsMediaMobile_jsx_1["default"], null)));
}
exports["default"] = Header;
