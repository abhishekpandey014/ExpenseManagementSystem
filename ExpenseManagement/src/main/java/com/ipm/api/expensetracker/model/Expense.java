package com.ipm.api.expensetracker.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user;

    private Double amount;

    @Temporal(TemporalType.DATE)
    private Date date;

    private String category;

    private String description;

    // Constructors, Getters, and Setters
    public Expense() {}

    public Expense(String user, Double amount, Date date, String category, String description) {
        this.user = user;
        this.amount = amount;
        this.date = date;
        this.category = category;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
