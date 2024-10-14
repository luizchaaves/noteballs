import { defineStore } from 'pinia'
import type { INote } from '@/models/notes-models'

interface INotesState {
    notes: INote[]
}

export const useStoreNotes = defineStore('storeNotes', {
    state: (): INotesState => {
        return {
            notes: [],
        }
    },
})
