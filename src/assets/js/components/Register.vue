<template>
  <section>
    <h2>Register</h2>
    <div id="alert"></div>
    <form id="register" @submit="onSubmit">
      <div class="control">
        <input name="team_name" placeholder="Team Name" type="text" />
      </div>
      <div class="control">
        <input name="firstname" placeholder="First Name" type="text" />
      </div>
      <div class="control">
        <input name="lastname" placeholder="Last Name" type="text" />
      </div>
      <div class="control">
        <input name="date_of_birth" placeholder="Date Of Birth" type="text" />
      </div>
      <div class="control">
        <input name="email" placeholder="Email Address" type="text" />
      </div>
      <div class="control">
        <input name="password" placeholder="Password" type="password" />
      </div>
      <input type="submit" value="Register" />
    </form>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      $.ajax({
        type: 'POST',
        url: '#a',
        data: {
          'email': 'ksm1nn0@gmail.com',
          'password': 'testpass123'
        }
      })
      .done((result) => {
        $('#alert').html('<p class="msg success">You\'ve successfully registered.</p>')
      })
      .fail((result) => {
        $('#alert').html('<p class="msg error">Something went wrong while registering.</p>')
        console.log(result)
      })
    }
  }
}
</script>
