import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public client = new Client();
  public form: FormGroup = new FormGroup({});

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.client.firstName, [Validators.required]),
      lastName: new FormControl(this.client.lastName, [Validators.required]),
      address: new FormControl(this.client.address, [Validators.required]),
      birthday: new FormControl(this.client.birthday, [Validators.required]),
      email: new FormControl(this.client.email, [Validators.required]),
      phoneNumber: new FormControl(this.client.identification, [Validators.required]),
      profileImage: new FormControl(this.client.identification, [Validators.required]),
    });
  }

  save(){
    this.clientService.saveClient(this.form.value).subscribe( res=> console.log(res))
  }

}
