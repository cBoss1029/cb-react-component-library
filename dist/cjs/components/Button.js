"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    var _a, _b;
    const { children, backgroundColor, color } = props;
    let _style = {};
    /** Override defaults */
    // TODO: Add support for other CSS properties
    (_a = _style.backgroundColor) !== null && _a !== void 0 ? _a : (_style.backgroundColor = backgroundColor);
    (_b = _style.color) !== null && _b !== void 0 ? _b : (_style.color = color);
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map