import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // retrieving contactService
  getContacts() {console.log('done');
    // tslint:disable-next-line: align
    return this.http.get('http://localhost:3000/api/contacts');
    // .map((res: Response) => res.json());
  }

  // add contact method
  addContact(newContact) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post('http://localhost:3000/api/contacts', newContact, { headers: headers });
  }

  // delete contact
  deleteContact(id) {
    // tslint:disable-next-line: whitespace
    return this.http.delete('http://localhost:3000/api/contacts/' +id);
  }

  // edit contact
  editContact(newContact) {
    const headers = new HttpHeaders();
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post('http://localhost:3000/api/edit', newContact, { headers: headers });
  }


}
