import '../style/style.styl'

export class App {
  constructor(val) {
    this.val = val
  }
}

let m = new App('main')
if (process.env.NODE_ENV === 'development') {
  console.log('main value:', m.val)
}
