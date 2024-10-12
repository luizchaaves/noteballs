<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="newNote"
                        class="textarea"
                        placeholder="Adicione uma nova nota"
                        ref="newNoteRef"
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        @click="addNote"
                        :disabled="!newNote"
                        class="button is-link has-background-success"
                    >
                        Adicionar nova nota
                    </button>
                </div>
            </div>
        </div>

        <Note
            v-for="note in notes"
            :key="note.id"
            :note="note"
            @delete-clicked="deleteNote"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { INote } from '@/models/notes-models'
import Note from '@/components/notes/note.vue'

const newNote = ref<string>('')
const newNoteRef = ref<HTMLTextAreaElement | null>(null)
const notes = ref<INote[]>([])

const addNote = () => {
    let currentDate = new Date().getTime(),
        id = currentDate.toString()

    let note: INote = {
        id,
        content: newNote.value,
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value?.focus()
}

const deleteNote = (idToDelete: string) => {
    notes.value = notes.value.filter((note: INote) => {
        return note.id !== idToDelete
    })
}
</script>
