import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../type'
import diariesData from './diaries.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

export const findByID = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  if (entry !== undefined) {
    return entry
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility }
    })
  }
