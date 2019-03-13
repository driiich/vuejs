class LightboxStore {

  constructor () {
    this.images = {}
    this.index = false
    this.group = false
    // On ne place dans le "state" seulement les données utiles pour nos composants
    this.state = {
      image: false
    }
  }

  addImage (url, group) {
    if (this.images[group] === undefined) {
      this.images[group] = []
    }
    return this.images[group].push(url) - 1
  }

  open (url, group) {
    this.group = group
    this.index = this.images[group].findIndex(image => image === url)
    this.state.image = url
  }

  close () {
    this.index = false
    this.state.image = false
  }

  next () {
    this.index++
    if (this.index >= this.images[this.group].length) {
      this.index = 0
    }
    this.state.image = this.images[this.group][this.index]
  }

  prev () {
    this.index--
    if (this.index < 0) {
      this.index = this.images[this.group].length - 1
    }
    this.state.image = this.images[this.group][this.index]
  }

  remove (url, group) {
    this.images[group] = this.images[group].filter(image => image !== url)
  }

}

let store = new LightboxStore()
window.store = store

export default store
