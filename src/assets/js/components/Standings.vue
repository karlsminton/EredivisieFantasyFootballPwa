<template>
  <section>
    <h2>League Standings</h2>
    <table>
      <thead>
        <!-- TODO implement goals for / against / difference -->
        <td>&nbsp;<!-- Position --></td>
        <td>&nbsp;<!-- Logo --></td>
        <td>Name</td>
        <td>Wins</td>
        <td>Draws</td>
        <td>Losses</td>
        <td>Points</td>
      </thead>
      <tbody>
        <tr v-for="club in clubs">
          <td>{{ club.position }}</td>
          <td><img :src="club.logo"/></td>
          <td>{{ club.name }}</td>
          <td>{{ club.wins }}</td>
          <td>{{ club.draws }}</td>
          <td>{{ club.losses }}</td>
          <td>{{ club.points }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'register',
  data () {
    return {
      /* TODO replace with API request */
      clubs: [
        {
          position: 1,
          logo: 'something.jpg',
          name: 'Ajax FC',
          wins: 26,
          draws: 5,
          losses: 3,
          points: 83
        },
        {
          position: 2,
          logo: 'something.jpg',
          name: 'PSV Eindhoven FC',
          wins: 26,
          draws: 3,
          losses: 5,
          points: 81
        },
        {
          position: 3,
          logo: 'something.jpg',
          name: 'Feyenoord',
          wins: 22,
          draws: 5,
          losses: 7,
          points: 71
        },
        {
          position: 4,
          logo: 'something.jpg',
          name: 'Twente',
          wins: 20,
          draws: 8,
          losses: 6,
          points: 81
        },
        {
          position: 5,
          logo: 'something.jpg',
          name: 'AZ Alkmaar',
          wins: 18,
          draws: 7,
          losses: 9,
          points: 61
        },
        {
          position: 6,
          logo: 'something.jpg',
          name: 'Vitesse',
          wins: 15,
          draws: 6,
          losses: 13,
          points: 51
        },
        {
          position: 7,
          logo: 'something.jpg',
          name: 'Utrecht',
          wins: 12,
          draws: 11,
          losses: 11,
          points: 47
        },
        {
          position: 8,
          logo: 'something.jpg',
          name: 'Heerenveen',
          wins: 11,
          draws: 8,
          losses: 15,
          points: 41
        }
      ]
    }
  }
}
</script>
