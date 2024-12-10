import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicysService } from 'src/app/services/Policy/policys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  expense = {
    user: '',
    amount: null,
    date: '',
    category: '',
    description: '',
  };
  expenseList: any[] = []; // List of expenses

  constructor(
    private policyservice: PolicysService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load expenses from localStorage when the page loads
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      this.expenseList = JSON.parse(storedExpenses); // Parse the stored data into an array
    }
  }

  // Add Expense Logic
  onSubmit(form: any) {
    if (form.valid) {
      // Push new expense to the expenseList
      this.expenseList.push({ ...this.expense });

      // Save the updated expense list to localStorage
      localStorage.setItem('expenses', JSON.stringify(this.expenseList));

      console.log('Expense added to the list:', this.expense);

      // Reset the form after submission
      form.resetForm();
    } else {
      alert('Please fill all mandatory fields');
    }
  }

  // Delete Expense Logic
  deleteExpense(expense: any) {
    const index = this.expenseList.indexOf(expense);
    if (index > -1) {
      this.expenseList.splice(index, 1);

      // Update localStorage after deletion
      localStorage.setItem('expenses', JSON.stringify(this.expenseList));
    }
  }
}
