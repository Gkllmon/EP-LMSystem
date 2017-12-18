package com.lms.lmsservice;

import com.lms.lmsdomain.Book;
import com.lms.lmsrepository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // 查询图书列表
    public List<Book> bookList() {
        return bookRepository.findAll();
    }

    // 通过图书ID查询图书
    public Book bookFindOne(Integer id) {
        return bookRepository.findOne(id);
    }

    // 通过图书名称查询图书
    public List<Book> bookListByName(String name) {
        return bookRepository.findByName(name);
    }

    // 添加图书
    public Map<String, Object> bookAdd(Book book) {
        book.setId(book.getId());
        book.setName(book.getName());
        book.setType(book.getType());
        book.setPrice(book.getPrice());
        book.setAuthor(book.getAuthor());
        book.setCencern(book.getCencern());
        book.setBorrowSum(book.getBorrowSum());
        book.setStartTime(book.getStartTime());
        book.setEndTime(book.getEndTime());
        this.bookRepository.save(book);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("book", book);
        return map;
    }

    // 通过ID删除图书
    public void bookDeleteById(Integer id) {
        bookRepository.delete(id);
    }

    // 修改图书
    public Map<String, Object> bookUpdate(Book book) {
        book.setId(book.getId());
        book.setName(book.getName());
        book.setType(book.getType());
        book.setPrice(book.getPrice());
        book.setAuthor(book.getAuthor());
        book.setCencern(book.getCencern());
        book.setBorrowSum(book.getBorrowSum());
        book.setStartTime(book.getStartTime());
        book.setEndTime(book.getEndTime());
        this.bookRepository.save(book);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("book", book);
        return map;
    }

}
