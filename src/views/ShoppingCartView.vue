<template>
  <div>
    <h1>Корзина</h1>
    <h2>Модели</h2>
    <ul>
      <li v-for="model of modelsList" :key="model.id">
        {{ model.label }}
        <button @click="onCountChange(model.id, -1)">-</button>
        <span>{{ counts[model.id] || 0 }}</span>
        <button @click="onCountChange(model.id, 1)">+</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useConfiguratorStore} from "../stores/configurator";
import {getModels} from "../api/api";

const configurationStore = useConfiguratorStore()

const modelsList = ref([])
onMounted(async () => {
  modelsList.value = await getModels(`${configurationStore.selectedMachineTypeId}+${configurationStore.selectedDrinkOptionCountId}`)
})

const clamp = (min, max, value) => {
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

const counts = ref({})
const onCountChange = (id, inc) => {
  if (!counts.value[id]) {
    counts.value[id] = 0
  }
  counts.value[id] = clamp(0, Infinity, counts.value[id] + inc)
}
</script>
