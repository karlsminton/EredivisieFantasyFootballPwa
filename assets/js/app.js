const container = document.querySelector('main')

const data = [
  {
    name: 'kitten',
    image: 'assets/media/images/large-kitten.jpg'
  }
]

const renderData = () => {
  let html = ''
  data.forEach(
    ({name, image}) =>
    (html += `
        <div class="item">
          <img class="item__image" src=${image} />
          <p>${name}</>
        </div>
      `)
  )
  container.innerHTML = html
}

document.addEventListener('DOMContentLoaded', renderData)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('service worker registered'))
      .catch(error => console.log('service worker not registered', error))
  })
}
