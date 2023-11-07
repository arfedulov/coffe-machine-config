<template>
  <div>
    <h1>Корзина</h1>
    <h2>{{ configurationStore.configurationTitle }}</h2>

    <h3>Модели</h3>
    <ul>
      <li v-for="model of configurationStore.modelsList" :key="model.id">
        {{ model.label }}
        <button @click="onCountChange(model.id, -1)">-</button>
        <span>{{ counts[model.id] || 0 }}</span>
        <button @click="onCountChange(model.id, 1)">+</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useConfiguratorStore} from "../stores/configurator";

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

const configurationStore = useConfiguratorStore()
</script>
