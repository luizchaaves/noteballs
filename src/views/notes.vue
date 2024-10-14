<template>
    <div class="notes">
        <AddEditNote v-model="newNote" ref="addEditNoteRef">
            <template #buttons>
                <button
                    @click="addNote"
                    :disabled="!newNote"
                    class="button is-link has-background-success"
                >
                    Adicionar nova nota
                </button>
            </template>
        </AddEditNote>

        <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef, type VNodeRef } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import type { INote } from '@/models/notes-models'
import Note from '@/components/notes/note.vue'
import AddEditNote from '@/components/notes/add-edit-note.vue'

const storeNotes = useStoreNotes()
const newNote = ref<string>('')
const addEditNoteRef = ref<VNodeRef | null>(null)
const notes: ComputedRef<INote[]> = computed(() => storeNotes.notes)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value?.focusTextarea()
}
</script>
