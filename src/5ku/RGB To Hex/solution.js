function rgb(r, g, b) {
    const clamp = (num) => Math.min(255, Math.max(0, num));
    const toHex = (num) => {
        const hex = num.toString(16).toUpperCase();
        return hex.length === 1 ? "0" + hex : hex;
    };

    const red = clamp(r);
    const green = clamp(g);
    const blue = clamp(b);

    return toHex(red) + toHex(green) + toHex(blue);
}