import {ref, computed, watch} from 'vue'
import { defineStore } from 'pinia'
import {getConfigurations, getModels} from "../api/api";

export const useConfiguratorStore = defineStore('configurator', () => {
  const machineTypes = ref([])
  const drinkOptionCounts = ref([])
  const machineModels = ref({})

  const selectedMachineTypeId = ref('')
  const selectedDrinkOptionCountId = ref('')
  const submitted = ref(false)

  const modelsListKey = computed(() => `${selectedMachineTypeId.value}+${selectedDrinkOptionCountId.value}`)
  watch(modelsListKey, async (key) => {
    if (!machineModels.value[key]) {
      machineModels.value[key] = await getModels(key)
    }
  }, { immediate: true })
  const modelsList = computed(() => machineModels.value[modelsListKey.value])

  const selectedMachineTypeLabel = computed(() => machineTypes.value.find(t => t.id === selectedMachineTypeId.value)?.label || '')
  const selectedDrinkOptionCountLabel = computed(() => drinkOptionCounts.value.find(opt => opt.id === selectedDrinkOptionCountId.value)?.label || '')

  const loadConfigOptions = async () => {
    if (!machineTypes.value.length || !drinkOptionCounts.value) {
      const configurations = await getConfigurations()
      machineTypes.value = configurations.machineTypes
      drinkOptionCounts.value = configurations.drinkOptionCounts

      selectedMachineTypeId.value = machineTypes.value[0].id
      selectedDrinkOptionCountId.value = drinkOptionCounts.value[0].id
    }
  }

  const submit = () => {
    submitted.value = true
  }

  const configurationTitle = computed(() => `Выбранная конфигурация: ${selectedMachineTypeLabel.value} + ${selectedDrinkOptionCountLabel.value}`)

  return {
    selectedDrinkOptionCountId,
    selectedMachineTypeId,
    selectedDrinkOptionCountLabel,
    selectedMachineTypeLabel,
    machineTypes,
    drinkOptionCounts,
    modelsList,
    configurationTitle,

    loadConfigOptions,
    submit,
  }
})
