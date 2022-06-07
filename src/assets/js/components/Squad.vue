<template>
  <section>
    <h2>Your Squad</h2>
    <div id="pitch">
      <div
          id="goalkeeper"
          class="player-row"
          v-on:drop="drop"
          v-on:dragover="allowDrop"
      ></div>
      <div
          id="defender"
          class="player-row"
          v-on:drop="drop"
          v-on:dragover="allowDrop"
      ></div>
      <div
          id="midfielder"
          class="player-row"
          v-on:drop="drop"
          v-on:dragover="allowDrop"
      ></div>
      <div
          id="offence"
          class="player-row"
          v-on:drop="drop"
          v-on:dragover="allowDrop"
      ></div>
    </div>
  </section>
  <section id="bench">
    <div class="scroll">
      <div class="col" v-for="player in bench">
        <div
            class="player"
            draggable="true"
            v-on:dragstart="dragStart"
            v-on:drag="dragging"
            :id="`player-${player.id}`"
        >
            <img :src="player.icon" draggable="false"/>
            <p class="name">{{ player.name }}</p>
            <span class="position">{{ player.position }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'register',
  data () {
    return {
      /* TODO replace with API request */
      /* exact implementation likely to change */
      bench: [
        {
          id: 1,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Onana',
          position: 'goalkeeper',
        },
        {
          id: 2,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Tagliafico',
          position: 'defender',
        },
        {
          id: 3,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Blind',
          position: 'defender',
        },
        {
          id: 4,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Schuurs',
          position: 'defender',
        },
        {
          id: 5,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Mazraoui',
          position: 'defender',
        },
        {
          id: 6,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Gravenberch',
          position: 'midfielder',
        },
        {
          id: 7,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Klaassen',
          position: 'midfielder',
        },
        {
          id: 8,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Tadić',
          position: 'midfielder',
        },
        {
          id: 9,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Berghuis',
          position: 'midfielder',
        },
        {
          id: 10,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Antony',
          position: 'midfielder',
        },
        {
          id: 11,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Haller',
          position: 'offence',
        },

        /** Actual bench **/
        {
          id: 12,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Timber',
          position: 'defender',
        },
        {
          id: 13,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Rensch',
          position: 'defender',
        },
        {
          id: 14,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Brobbey',
          position: 'offence',
        },
        {
          id: 15,
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Kudus',
          position: 'midfielder',
        },
      ]
    }
  },
  methods: {
    dragStart(event) {
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging(event) {},
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      var element = document.getElementById(data)
      var position = element.getElementsByClassName('position')[0].innerHTML

      /* TODO work into an alert system */
      if (event.target.id !== position) {
        alert(`Player is a ${position}, can't place as a ${event.target.id}`)
        return;
      }

      event.target.appendChild(element)
    }
  }
}
</script>
