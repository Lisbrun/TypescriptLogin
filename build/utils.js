"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const parseComment = (commentFromRequest) => {
    if (isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment: ');
    }
    return commentFromRequest;
};
const parseDAte = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date: ');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather: ');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) ||
        !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility: ');
    }
    return visibilityFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (string) => {
    return Boolean(Date.parse(string));
};
const isWeather = (param) => {
    return Object.values(type_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(type_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDAte(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
