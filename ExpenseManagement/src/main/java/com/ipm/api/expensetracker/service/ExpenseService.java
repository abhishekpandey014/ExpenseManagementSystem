package com.ipm.api.expensetracker.service;

import com.ipm.api.expensetracker.model.Expense;
import com.ipm.api.expensetracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    // Add a new expense
    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // Get all expenses
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
}
