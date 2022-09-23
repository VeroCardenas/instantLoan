import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() controlName: string = 'input';
  @Input() id: string = 'input';
  @Input() label = 'input';
  @Input() type = 'text';
  @Output() onKeyUpEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.controlName)) {
      this.form.addControl(this.controlName, new FormControl(null));
    }
  }

  onKeyUp(event: any) {
    this.onKeyUpEvent.emit(event);
  }

}
