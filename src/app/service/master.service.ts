import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/Employee';
import { Observable, observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getParentDept(){
   return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment")
  }
  getchildDeptByParentId(id:number) :Observable<IApiResponse>{
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllChildDepartmentByParentId?deptId=" +id)
   }
}
