<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import draggable from 'vuedraggable'

class Fruit {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

@Component({
  components: {
    draggable
  },
})
export default class SuperList extends Vue {
    fruits: Array<Fruit> = [
        new Fruit(1, "Apple"),
        new Fruit(2, "Pear"),
        new Fruit(3, "Grapes"),
        new Fruit(4, "Banana")
    ]
    cart: Array<Fruit> = []
}
</script>

<template>
    <div>
        <draggable :list="fruits" :options="{ group: 'items' }">
            <div class="drag" :data-fruit="fruit.id" v-for="fruit in fruits" :key="fruit.id">{{fruit.name}}</div>
        </draggable>
        <hr>
        <draggable id="cart" :list="cart" :options="{ group: 'items' }">
            <div class="drag" :data-cart-item="fruit.id" v-for="fruit in cart" :key="fruit.id">{{fruit.name}}</div>
        </draggable>
    </div>
</template>

<style lang="scss">
.drag {
    padding: 30px;
    border: 1px #e6e6e6 solid;
    margin: 15px;
}
</style>
