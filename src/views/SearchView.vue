<template>
  <div>
    <h1>Конфигуратор кофемашины</h1>
    <h2>Выбранная конфигурация: {{ selectedMachineTypeLabel }} + {{ selectedDrinkOptionCountLabel }}</h2>
    <img v-if="machineImage" :src="machineImage">
    <form @submit.prevent>
      <fieldset>
        <legend>Тип машины</legend>
        <label v-for="mType of machineTypes" :key="mType.id">
          <input type="radio" v-model="_selectedMachineTypeId" :value="mType.id">
          {{ mType.label }}
        </label>
      </fieldset>

      <fieldset>
        <legend>Количество напитков</legend>
        <label v-for="optCount of drinkOptionCounts" :key="optCount.id">
          <input type="radio" v-model="_selectedDrinkOptionCountId" :value="optCount.id">
          {{ optCount.label }}
        </label>
      </fieldset>

      <button @click="onSave">Добавить в хранилище</button>
    </form>

    <router-link to="/cart">go to cart</router-link>
  </div>
</template>
<script setup>
import {onMounted, computed, ref} from "vue";
import {useConfiguratorStore} from "../stores/configurator";
import {getConfigurations} from "../api/api";

const machineTypes = ref([])
const drinkOptionCounts = ref([])

const _selectedMachineTypeId = ref('')
const _selectedDrinkOptionCountId = ref('')
const selectedMachineTypeLabel = computed(() => machineTypes.value.find(t => t.id === _selectedMachineTypeId.value)?.label || '')
const selectedDrinkOptionCountLabel = computed(() => drinkOptionCounts.value.find(opt => opt.id === _selectedDrinkOptionCountId.value)?.label || '')

onMounted(async () => {
  const configurations = await getConfigurations()
  machineTypes.value = configurations.machineTypes
  drinkOptionCounts.value = configurations.drinkOptionCounts
  _selectedMachineTypeId.value = configurations.machineTypes[0].id
  _selectedDrinkOptionCountId.value = configurations.drinkOptionCounts[0].id
})

const machineImage = computed(() => _selectedMachineTypeId.value ? `https://placehold.co/600x400?text=${_selectedMachineTypeId.value}` : '')

const configurationStore = useConfiguratorStore()
const onSave = () => {
  configurationStore.saveConfig({
    selectedMachineTypeId: _selectedMachineTypeId.value,
    selectedDrinkOptionCountId: _selectedDrinkOptionCountId.value
  })
}
</script>
