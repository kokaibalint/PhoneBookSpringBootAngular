import { Component, OnInit } from '@angular/core';
import { AddressModel } from './address-model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: AddressModel[] = [];
  searchText: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  createAddress() {
    let newAddress: AddressModel = {
      firstName: 'New Address',
      lastName: '',
      age: null ,
      email: '',
      city: '',
      street: '',
      houseNumber: null,
      description: '',
      id: null
    };

    this.apiService.postAddress(newAddress).subscribe(
      res => {
        newAddress.id = res.id;
        this.addresses.push(newAddress);
      },
      err => {
        alert('An error has occured while saving the notebook');
      }
    );
  }

  updateAddress(updateAddress: AddressModel){
    this.apiService.postAddress(updateAddress).subscribe(
      res => {

      },
      err => {
        alert('An error has occured while saving the notebook');
      }
    );
  }

  deleteAddress(address: AddressModel) {
    if(confirm("Are you sure you want to delete address?")) {
      this.apiService.deleteAddress(address.id).subscribe(
        res => {
          let indexOfAddress = this.addresses.indexOf(address);
          this.addresses.splice(indexOfAddress);
        },
        err => {
          alert("Could not delete address");
        }
        );
      }
  }

  public getAllAddresses(){
    this.apiService.getAllAddresses().subscribe(
      res => {
        this.addresses = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }
}
