import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "output"]
  connect() {
    console.log("are you kidding me!", this.element)
  }

  greet() {
    this.outputTarget.innerHTML = `Hello ${this.nameTarget.value}`
  }
}
