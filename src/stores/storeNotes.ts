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
    actions: {
        addNote(newNoteContent: string) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString()

            let note: INote = {
                id,
                content: newNoteContent,
            }

            this.notes.unshift(note)
        },
        deleteNote(idToDelete: string) {
            this.notes = this.notes.filter((note: INote) => {
                return note.id !== idToDelete
            })
        },
    },
})
