<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { INote } from '@/models/notes-models'

const props = defineProps({
    note: {
        type: Object as PropType<INote>,
        required: true,
    },
})
</script>
