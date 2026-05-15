import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "sidebar" ]
    showSidebar(){
        this.sidebarTarget.style.display = 'flex'
    }

    hideSidebar(){
        this.sidebarTarget.style.display = 'none'
    }
}
