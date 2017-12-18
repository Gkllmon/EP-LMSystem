package com.lms.lmsrepository;

import com.lms.lmsdomain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Integer> {

    //通过名称查询
    public List<Book> findByName(String name);
}
