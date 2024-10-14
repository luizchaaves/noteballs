<template>
    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea
                    v-model="model"
                    class="textarea"
                    placeholder="Adicione uma nova nota"
                    ref="textareaRef"
                />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
})

const emit = defineEmits(['update:modelValue'])

const model = ref(props.modelValue)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

watch(
    () => props.modelValue,
    (newValue: string) => {
        model.value = newValue
    }
)

watch(model, (newValue: string) => {
    emit('update:modelValue', newValue)
})

const focusTextarea = () => {
    textareaRef.value?.focus()
}

defineExpose({
    focusTextarea,
})
</script>
