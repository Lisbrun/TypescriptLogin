import express from 'express'
import * as diaryService from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

export const router = express.Router()

router.get('', (_req, res) => {
  res.json(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addDiaryEntry = diaryService.addEntry(newDiaryEntry)
    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findByID(Number(req.params.id))
  if (diary != null) {
    res.status(200).json(diary)
  } else {
    res.status(404).json({ message: 'Diary not found' })
  }
})

// export default router
