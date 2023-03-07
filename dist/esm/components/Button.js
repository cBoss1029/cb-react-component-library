import React from 'react';
export const Button = (props) => {
    var _a, _b;
    const { children, backgroundColor, color } = props;
    let _style = {};
    /** Override defaults */
    // TODO: Add support for other CSS properties
    (_a = _style.backgroundColor) !== null && _a !== void 0 ? _a : (_style.backgroundColor = backgroundColor);
    (_b = _style.color) !== null && _b !== void 0 ? _b : (_style.color = color);
    return (React.createElement("button", Object.assign({ style: _style }, props), children));
};
//# sourceMappingURL=Button.js.map