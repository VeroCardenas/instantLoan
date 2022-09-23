export class Client {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  identification: string = '';
  email: string = '';
  address: string = '';
  birthday: string = '';
  phoneNumber: string = '';
  profileImage: string = '';

  get name() {
    return this.firstName + ' ' + this.lastName
  }
}


