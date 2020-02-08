export class SignUpInfo {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  username: string;
  email: string;
  residence: string;
  roles: string[];
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: Date,
    username: string,
    email: string,
    residence: string,
    password: string
  )
    {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.username = username;
      this.email = email;
      this.residence = residence;
      this.password = password;
      this.roles= ['user'];

    }

}
