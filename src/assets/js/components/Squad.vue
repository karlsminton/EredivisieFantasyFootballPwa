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
            :id="player.name"
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
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Onana',
          position: 'goalkeeper',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Tagliafico',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Blind',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Schuurs',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Mazraoui',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Gravenberch',
          position: 'midfielder',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Klaassen',
          position: 'midfielder',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Tadić',
          position: 'midfielder',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Berghuis',
          position: 'midfielder',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Antony',
          position: 'midfielder',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Haller',
          position: 'offence',
        },

        /** Actual bench **/
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Timber',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Rensch',
          position: 'defender',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Brobbey',
          position: 'offence',
        },
        {
          icon: 'http://phpdocker.local/ajax.png',
          name: 'Kudus',
          position: 'midfielder',
        },
      ]
    }
  },
  methods: {
    dragStart:function(event)  {
      event.dataTransfer.setData("Text", event.target.id);
    },
    dragging:function(event) {},
    allowDrop:function(event) {
      event.preventDefault();
    },
    drop:function(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data)
      event.target.appendChild(document.getElementById(data));
    }
  }
}
</script>
