import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  URL = environment.apiUrl + 'client'

  constructor(
    private _http: HttpClient
  ) { }

  getClients() {
    this._http.get(this.URL).pipe(res => res);
  }

  saveClient(client: Client): Observable<Client> {
    return this._http.post(this.URL, client)
      .pipe(
        map((res: any) => {
          return res;
        }
        ))
  }

  editClients(client: Client) {
    this._http.put(this.URL, client).pipe(res => res);
  }
}
