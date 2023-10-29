import { Visibility, Weather, newDiaryEntry } from './type'

const parseComment = (commentFromRequest: any): string => {
  if (isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment: ')
  }
  return commentFromRequest
}

const parseDAte = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date: ')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather: ')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Incorrect or missing visibility: ')
  }
  return visibilityFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (string: string): boolean => {
  return Boolean(Date.parse(string))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDAte(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
