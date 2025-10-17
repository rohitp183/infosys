import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../http-service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-comp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  styleUrl: './main-comp.css',
  templateUrl: './main-comp.html',
})

export class MainComp implements OnInit {

  roles: any;
  SinglRoles: any;
  controlTypes: any;
  caseCategory: any;
  caseSubCategory: any;
  AccessForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.AccessForm = this.fb.group({
      role: [''],
      accessControlType: [''],
      caseCategory: [''],
      caseSubCategory: ['']
    });
    this.processToInitialData();
   }

   processToInitialData() { 
    this.fethchRoles();
    this.fetchSingleRole();
    this.fetchAccessControlTpye();
    this.fetchCaseCategory();
    this.fetchCaseSubCategory();
   }

  fethchRoles() {
    this.httpService.getRoles().subscribe((res:any) => {
      if(res) {
        this.roles = res.data;
      }
    });
  }

  fetchSingleRole() { 
    this.httpService.getRoles().subscribe((res:any) => {
      if(res) {
        this.SinglRoles = res.data;
      }
    });
  }

  fetchAccessControlTpye () {
    this.httpService.getAccessControlTpye().subscribe((res:any) => {
      if(res) {
        this.controlTypes = res.data;
      }
    });
  }

  fetchCaseCategory () {
    this.httpService.getCaseCategory().subscribe((res:any) => {
      if(res) {
        this.caseCategory = res.data;
      }
    });
  }

  fetchCaseSubCategory () {
    this.httpService.getCaseSubCategory().subscribe((res:any) => {
      if(res) {
        this.caseSubCategory = res.data;
      }
    });
  }

  onSearch() {
    this.AccessForm.value;
    const obj = {
      role: this.SinglRoles,
      accessControlType: this.controlTypes,
      caseCategory: this.caseCategory,
      caseSubCategory: this.caseSubCategory
    };
    this.httpService.getSearchData(obj).subscribe((res:any) => {
      if(res) {
        console.log('search data', res);
      } 
    });
  }

}
