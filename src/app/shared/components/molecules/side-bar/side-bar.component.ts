import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  icon = faHome;
  menuIcon = faBars;
  hideSideBar = true;

  constructor(
    private renderer: Renderer2,
  ) {
    this.renderer.listen('window', 'click', (e: any) => {
      const clickToggle = this.toggleButton.nativeElement.contains(e.target);
      const clickSideBar = this.sidebar.nativeElement.contains(e.target);
      if (!clickToggle && ! clickSideBar) {
        this.hideSideBar = true;
      }
    });
  }

  ngOnInit(): void {
  }

  openHideMenu() {
    this.hideSideBar = !this.hideSideBar;
  }

}
