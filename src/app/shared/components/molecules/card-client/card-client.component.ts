import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit {
  @Input() client: Client = new Client();

  iconEdit = faEdit;
  iconDelete = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
