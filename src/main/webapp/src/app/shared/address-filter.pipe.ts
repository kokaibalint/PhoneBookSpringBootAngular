import { Pipe, PipeTransform } from '@angular/core';
import { AddressModel } from '../address/address-model';

@Pipe({
  name: 'addressFilter'
})
export class AddressFilterPipe implements PipeTransform {

  transform(addresses: AddressModel[], text: string): AddressModel[] {
    if (text == null || text === '') {
      return addresses;
    }
    return addresses.filter(n => n.firstName.includes(text) || n.lastName.includes(text));
  }

}
