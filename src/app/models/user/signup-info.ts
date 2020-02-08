export class SignUpInfo {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  username: string;
  email: string;
  address: string;
  roles: string[];
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: Date,
    username: string,
    email: string,
    address: string,
    password: string
  )
    {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.username = username;
      this.email = email;
      this.address = address;
      this.password = password;
      this.roles= ['user'];

    }

}
