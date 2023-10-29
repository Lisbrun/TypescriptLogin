"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesWithoutSensitiveInfo = exports.findByID = exports.addEntry = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const addEntry = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map((d) => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addEntry = addEntry;
const findByID = (id) => {
    const entry = diaries.find((diary) => diary.id === id);
    if (entry !== undefined) {
        return entry;
    }
    return undefined;
};
exports.findByID = findByID;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
