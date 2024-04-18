import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]
  static class = ["primary"]
  
  connect() {
    this.buttonTarget.classList.add(this.primaryClass)
  }

  clicked() {
    this.buttonTarget.classList.toggle(this.primaryClass)
  }


}
