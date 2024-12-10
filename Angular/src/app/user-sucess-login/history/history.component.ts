import { Component, OnInit } from '@angular/core';
import { PolicysService } from 'src/app/services/Policy/policys.service'; // Correct import path for PolicysService

export class HistoryEntry {
  user!: string;
  startDate!: string;
  endDate!: string;
  period!: string;
  totalAmount!: number;
  generatedDate!: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  entries: HistoryEntry[] = []; // Stores the table entries
  newEntry: HistoryEntry = new HistoryEntry(); // Holds the new entry details
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
  ]; // Sample users, this should come from your backend or a service

  constructor(private policysService: PolicysService) {} // Inject PolicysService

  ngOnInit(): void {
    // Fetch the policies or expenses from backend
    this.policysService.getExpenses().subscribe(
      (data) => {
        console.log('Fetched expenses:', data);
        // Make sure that 'data' contains both 'id' and 'name' for each user
        this.users = data.map((expense: any, index: number) => ({
          id: expense.id || index + 1, // Ensure 'id' exists, otherwise assign a default value
          name: expense.user || expense.name, // Assuming 'user' or 'name' exists in the fetched data
        }));
      },
      (error) => {
        console.error('Error fetching expenses', error);
      }
    );
  }

  // Adds a new entry to the table
  addHistory() {
    const startDate = new Date(this.newEntry.startDate);
    const endDate = new Date(this.newEntry.endDate);

    if (endDate < startDate) {
      alert('End date must be after the start date!');
      return;
    }

    const periodInDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const totalAmount = periodInDays * 100; // Example calculation: 100 units/day

    const generatedDate = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    const newHistoryEntry: HistoryEntry = {
      user: this.newEntry.user,
      startDate: this.newEntry.startDate,
      endDate: this.newEntry.endDate,
      period: `${periodInDays} days`,
      totalAmount: totalAmount,
      generatedDate: generatedDate,
    };

    this.entries.push(newHistoryEntry);

    // Reset the form
    this.newEntry = new HistoryEntry();
  }

  // Deletes an entry from the table
  deleteEntry(entry: HistoryEntry) {
    const index = this.entries.indexOf(entry);
    if (index > -1) {
      this.entries.splice(index, 1);
    }
  }
}
