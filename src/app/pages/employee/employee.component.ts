import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Employee, IApiResponse, IChildDept, IParentDept } from '../../model/Employee';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'], // Fixed typo
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
})
export class EmployeeComponent implements OnInit {
  parentDeptList: IParentDept[] = [];
  childDeptList: IChildDept[] = [];
  deptId: number = 0;

  employeeObj: Employee = new Employee();
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getParentDeptList();
  }

  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList = res.data;
    });
  }

  onDeptChange() {
    this.masterService.getchildDeptByParentId(this.deptId).subscribe((res: IApiResponse) => {
      this.childDeptList = res.data;
    });
  }
}
