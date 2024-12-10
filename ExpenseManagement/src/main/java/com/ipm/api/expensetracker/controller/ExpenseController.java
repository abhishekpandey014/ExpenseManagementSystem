package com.ipm.api.expensetracker.controller;

import com.ipm.api.expensetracker.model.Expense;
import com.ipm.api.expensetracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:4200") // Enable CORS for Angular
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Add a new expense
    @PostMapping("/add")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        Expense savedExpense = expenseService.saveExpense(expense);
        return ResponseEntity.ok(savedExpense);
    }

    // Get all expenses
    @GetMapping
    public ResponseEntity<List<Expense>> getAllExpenses() {
        List<Expense> expenses = expenseService.getAllExpenses();
        return ResponseEntity.ok(expenses);
    }
}

