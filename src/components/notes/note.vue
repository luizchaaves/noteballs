<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editNote/${note.id}`"
                href="#"
                class="card-footer-item"
            >
                Editar
            </RouterLink>
            <a
                @click.prevent="storeNotes.deleteNote(note.id)"
                href="#"
                class="card-footer-item"
            >
                Excluir
            </a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import type { INote } from '@/models/notes-models'

const props = defineProps({
    note: {
        type: Object as PropType<INote>,
        required: true,
    },
})

const storeNotes = useStoreNotes()

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'caracteres' : 'caractere'
    return `${length} ${description}`
})
</script>
