<template>
  <div>
    <h1>Tag</h1>

    <Demobox>
      <it-tag :closable="tagClosable" :type="tagType">
        <span>{{tagText}}</span>
      </it-tag>

      <template slot="props">
        <it-select placeholder="Select type" labelTop="Tag type" v-model="tagType">
          <it-select-option
            style="text-transform: capitalize;"
            :key="type"
            v-for="type in tagTypes"
            :value="type"
          >{{type}}</it-select-option>
        </it-select>
        <it-input v-model="tagText" labelTop="Tag text" />
        <it-checkbox label="Closable" v-model="tagClosable" />
      </template>
    </Demobox>
    <Box :code="typesCode" title="Types">
      <it-tag>Neutral</it-tag>
      <it-tag type="primary">Primary</it-tag>
      <it-tag type="success">Success</it-tag>
      <it-tag type="danger">Danger</it-tag>
      <it-tag type="warning">Warning</it-tag>
      <it-tag type="black">Black</it-tag>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class SliderPage extends Vue {
  tagText: string = 'Tag'
  tagClosable: boolean = false
  tagType: string = 'neutral'
  tagTypes: string[] = [
    'primary',
    'success',
    'danger',
    'warning',
    'black',
    'neutral'
  ]

  typesCode = `<it-tag>Neutral</it-tag>
<it-tag type="primary">Primary</it-tag>
<it-tag type="success">Success</it-tag>
<it-tag type="danger">Danger</it-tag>
<it-tag type="warning">Warning</it-tag>
<it-tag type="black">Black</it-tag>`

  dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'neutral',
      values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
      description: 'Type of the tag'
    },
    {
      property: 'closable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes tag closable'
    }
  ]
}
</script>

<style lang="less">
</style>