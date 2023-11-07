<template>
  <div>
    <h1>Конфигуратор кофемашины</h1>
    <h2>{{ configurationStore.configurationTitle }}</h2>
    <img :src="machineImage">
    <form @submit.prevent>
      <fieldset>
        <legend>Тип машины</legend>
        <label v-for="mType of configurationStore.machineTypes" :key="mType.id">
          <input type="radio" v-model="configurationStore.selectedMachineTypeId" :value="mType.id">
          {{ mType.label }}
        </label>
      </fieldset>

      <fieldset>
        <legend>Количество напитков</legend>
        <label v-for="optCount of configurationStore.drinkOptionCounts" :key="optCount.id">
          <input type="radio" v-model="configurationStore.selectedDrinkOptionCountId" :value="optCount.id">
          {{ optCount.label }}
        </label>
      </fieldset>

      <button @click="onSubmit">Добавить в хранилище</button>
    </form>
  </div>
</template>
<script setup>
import {onMounted, computed} from "vue";
import {useRouter} from "vue-router";
import {useConfiguratorStore} from "../stores/configurator";

const router = useRouter()

const configurationStore = useConfiguratorStore()
onMounted(configurationStore.loadConfigOptions)

const machineImage = computed(() => `https://placehold.co/600x400?text=${configurationStore.selectedMachineTypeId}`)

const onSubmit = () => {
  configurationStore.submit()
  router.push({ name: 'cart' })
}
</script>
