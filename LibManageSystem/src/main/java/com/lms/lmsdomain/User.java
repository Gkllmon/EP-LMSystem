package com.lms.lmsdomain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User {
    @Id
    private Integer userId;
    private String sex;
    private String age;
    private String name;
    private String type;
    private String phone;
    private String email;
    private String password;
    @ManyToMany(targetEntity = Book.class,cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    @JoinTable(name = "user_book", joinColumns = {@JoinColumn(name = "userId")}, inverseJoinColumns = {@JoinColumn(name = "id")})
    public Set<Book> book = new HashSet<Book>();

    public User() {

    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Book> getBook() {
        return book;
    }

    public void setBook(Set<Book> book) {
        this.book = book;
    }
}
