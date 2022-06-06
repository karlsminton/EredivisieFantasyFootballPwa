<template>
  <section>
    <h2>Your Squad</h2>
    <div id="pitch">
      <div id="goalkeeper" class="player-row" ondrop="drop(event)"></div>
      <div id="defender" class="player-row" ondrop="drop(event)"></div>
      <div id="midfielder" class="player-row" ondrop="drop(event)"></div>
      <div id="offence" class="player-row" ondrop="drop(event)"></div>
    </div>
  </section>
  <section id="bench">
    <div class="scroll">
      <div class="col" v-for="player in bench">
        <div class="player" draggable="true">
          <img :src="player.icon" />
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
    /* TODO implement drag + drop */
    allowDrop() {

    },
    drag() {

    },
    drop() {

    }
  }
}
</script>
