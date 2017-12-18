package com.lms.lmsdomain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Book {
    @Id
    private Integer id;
    private String name;
    private String type;
    private String price;
    private String author;
    private String cencern;
    private String borrowSum;
    private Date startTime;
    private Date endTime;
    @ManyToMany(targetEntity = User.class,cascade = CascadeType.PERSIST, fetch = FetchType.EAGER,mappedBy="book")
    @JsonIgnore
    private Set<User> user = new HashSet<>();

    public Book() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCencern() {
        return cencern;
    }

    public void setCencern(String cencern) {
        this.cencern = cencern;
    }

    public String getBorrowSum() {
        return borrowSum;
    }

    public void setBorrowSum(String borrowSum) {
        this.borrowSum = borrowSum;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> user) {
        this.user = user;
    }
}
