export class Employee{
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role: string;
    createdDate: Date;

    constructor(){
      this.employeeId = 0;
      this.deptId = 0;
      this.employeeName = '';
      this.gender = '';
      this.emailId = '';
      this.contactNo = '';
      this.password = '';
      this.role = '';
      this.createdDate = new Date();
    }
}

export interface IParentDept{
    departmentId:number;
    departmentName: string;
    departmentLogo: string;
}

export interface IChildDept{
  childDeptId:number;
  parentDeptId: string;
  departmentName: string;
}

export interface IApiResponse {

  message: string;
  result : boolean;
  data: any
}
