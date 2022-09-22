import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label = '';
  @Input() icon: any | undefined;
  @Input() class = '';

  constructor() { }

  ngOnInit(): void {
  }

}
