const basePixel = 16;
const mobile = 768 / 1440;
const tablet = 1080 / 1440;
const large = 1920 / 1440;
const extraLarge = 2560 / 1440;
const xxl = 3840 / 1440; 
export const rem = (pixel, device) => {
    if (!device) {
        return pixel/basePixel + 'rem';
    }
    if (device === "mobile") {
        return ((pixel / basePixel) * mobile) + 'rem';
    }
    else if (device === "tablet") {
        return ((pixel / basePixel) * tablet) + 'rem';
    }
    else if (device === "large") {
        return ((pixel / basePixel) * large) + 'rem';
    }
    else if (device === "extraLarge") {
        return ((pixel / basePixel) * extraLarge) + 'rem';
    }
    else if (device === "xxl") {
        return ((pixel / basePixel) * xxl) + 'rem';
    }  
}