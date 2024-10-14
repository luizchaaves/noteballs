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

        <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import type { INote } from '@/models/notes-models'
import Note from '@/components/notes/note.vue'

const storeNotes = useStoreNotes()
const newNote = ref<string>('')
const newNoteRef = ref<HTMLTextAreaElement | null>(null)
// const notes = ref<INote[]>([])
const notes: ComputedRef<INote[]> = computed(() => storeNotes.notes)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value?.focus()
}

// const deleteNote = (idToDelete: string) => {
//     notes.value = notes.value.filter((note: INote) => {
//         return note.id !== idToDelete
//     })
// }
</script>
