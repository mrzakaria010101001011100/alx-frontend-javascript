// 1. Teacher Interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // To allow any additional properties
  }
  
  // 2. Print Teacher Function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // 3. StudentClass Interfaces
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  // 4. Implementing StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
}  
