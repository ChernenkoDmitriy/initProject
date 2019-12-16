/* eslint-disable no-unneeded-ternary */
import Dimensions from 'Dimensions';
import { Platform, I18nManager, StatusBar } from 'react-native';

const { isRTL } = I18nManager;

const setTextAlign = (language) => {
    let currentTextAlign = "left";

    if (language === "ar") {
        if (!isRTL) {
            currentTextAlign = "right";
        }
    } else if (isRTL) {
        currentTextAlign = "right";
    }

    return currentTextAlign;
}

const checkIsIOs = () => {
    return Platform.OS === "ios";
}

const getIsIphoneX = () => {
    return checkIsIOs() && (Dimensions.get("window").height > 800 || Dimensions.get("window").width > 800) ? true : false;
}

const isIos = checkIsIOs();

const _width = () => {
    const { width, height } = Dimensions.get('window');
    return (width < height) ? width : height;
}

const _height = () => {
    const { width, height } = Dimensions.get('window');
    let resultHeight = (width > height) ? width : height;
    resultHeight = checkIsIOs() ? resultHeight : resultHeight - StatusBar.currentHeight;
    return resultHeight;
}

const chackIsObjectEmpty = (obj) => {
    let objLenght = 0;
    if (typeof obj === "object" && obj != null) {
        objLenght = Object.keys(obj).length;
    }
    return !objLenght;
}

const Utils = {
    isIphoneX: getIsIphoneX(),
    isIOS: isIos,
    size: {
        width: _width(),
        height: _height()
    },
    chackIsObjectEmpty,
    setTextAlign,
};

export default Utils;
