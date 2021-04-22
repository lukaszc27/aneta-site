<template>
  <main class="container">
    <h1>Klasa 3</h1>

    <ul class="nav nav-tabs justify-content-center">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="sum-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab1"
          type="button"
          role="tab"
          aria-controls="sum"
          aria-selected="true"
        >
          Dodawanie i odejmowanie w zakresie 0-1000
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="diff-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab2"
          type="button"
          role="tab"
          aria-controls="diff"
          aria-selected="true"
        >
          Mnożenie i dzelenie w zakresie 0-100
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="sum">
            <SumTab />
        </div>

        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="diff">
            <DiffTab />
        </div>
    </div>
  </main>
</template>

<script>
import SumTab from "../../components/tabs/class3/Sum.vue";
import DiffTab from '../../components/tabs/class3/Diff.vue';


export default {
  name: "Class3",
  components: {
    SumTab,
    DiffTab
  },
};
</script>

<style lang="scss" scoped>
</style>