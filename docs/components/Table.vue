<template>
  <div class="table-box">
    <h2 v-if="dataSheet" class="it-box-title">Props</h2>
    <table v-if="dataSheet" class="table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Accepted values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody v-for="item in dataSheet" :key="item.property">
        <tr>
          <td v-for="(col, name) in item">
            <div style="line-height: 2;" v-if="!['description', 'property'].includes(name) && Array.isArray(col)">

            <it-tag v-for="i in col" :key="i">{{i}}</it-tag>
            </div>
            <span v-else>{{col}}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 v-if="eventSheet" class="it-box-title">Events</h2>
    <table v-if="eventSheet" class="table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody v-for="item in eventSheet" :key="item.property">
        <tr>
          <td v-for="(col, name) in item">
            <span>{{col}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PropsTable extends Vue {
  @Prop() dataSheet!: object[]
  @Prop() eventSheet!: object[]
}
</script>

<style lang="less">
  .table-box {
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    overflow-x: auto;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;

    & thead {
      background-color: #f2f2f2;
    }

    & th,
    td {
      line-height: 1;
      text-align: left;
      padding: 13px 26px;
      font-size: 15px;
      font-weight: 500;
    }

    & td {
      font-size: 14px;
      font-weight: normal;
      & > .it-tag {
        font-size: 12px !important;
        font-weight: normal;
      }

      & .it-tag + .it-tag {
        margin-left: 4px;
      }
    }
  }
</style>