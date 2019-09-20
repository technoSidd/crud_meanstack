import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact.service';
import { Contact } from '../contact';
import { format } from 'util';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts1: any;
  contact: Contact;
  // tslint:disable-next-line: variable-name
  first_name: string;
  // tslint:disable-next-line: variable-name
  last_name: string;
  phone: string;
  n: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts => { this.contacts1 = contacts;
    //  console.log( this.contacts1 );
    });
  }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name : this.last_name,
      phone : this.phone
    };
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts1.push(contact);
      this.contactService.getContacts()
      .subscribe( contacts => { this.contacts1 = contacts;
      //  console.log( this.contacts1 );
      });
    });
    this.first_name = '';
    this.last_name = '';
    this.phone = '';
  }

  deleteContact(id) {
    const n = this.n;
    const contacts = this.contacts1;
    this.contactService.deleteContact(id)
    .subscribe(data => {
      // tslint:disable-next-line: align
      // if (data.n === 1) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i]._id == id) {
            contacts.splice(i,1);
          }
        }
      // }
    });
  }

  editContact(newContact) {
    this.contactService.editContact(newContact)
    .subscribe(data => {
      console.log(newContact);
    });
  }

}
