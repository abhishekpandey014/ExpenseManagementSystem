import { Injectable } from '@angular/core';
import { Policye } from 'src/app/classfile/Policy/policye'; // Correct import path for Policye
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PolicysService {
  policy!: Policye;

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policye[]> {
    return this.http.get<Policye[]>('http://localhost:8085/getpolicys');
  }

  getPolicyById(policyId: number): Observable<Policye> {
    return this.http.get<Policye>('http://localhost:8085/getpolicy/' + policyId);
  }

  // Add Expense to the Database
  addExpense(expense: any): Observable<any> {
    return this.http.post('http://localhost:8085/api/expenses/add', expense);
  }

  // Fetch expenses from backend
  getExpenses(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8085/api/expenses');
  }
}
