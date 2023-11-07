import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useConfiguratorStore = defineStore('configurator', () => {


  const selectedMachineTypeId = ref('')
  const selectedDrinkOptionCountId = ref('')

  const saveConfig = (config) => {
    selectedDrinkOptionCountId.value = config.selectedDrinkOptionCountId
    selectedMachineTypeId.value = config.selectedMachineTypeId
  }

  return {
    selectedDrinkOptionCountId,
    selectedMachineTypeId,

    saveConfig,
  }
})
