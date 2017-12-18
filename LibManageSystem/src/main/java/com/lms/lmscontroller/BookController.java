package com.lms.lmscontroller;

import com.lms.lmsdomain.Book;
import com.lms.lmsservice.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    // 查询所有图书
    @GetMapping(value = "/api/books")
    public List<Book> bookList() {
        return this.bookService.bookList();
    }

    // 通过ID查询图书
    @GetMapping(value = "/api/books/id/{id}")
    public Book bookFindOne(@PathVariable("id") Integer id) {
        return this.bookService.bookFindOne(id);
    }

    // 通过名称查询图书
    @GetMapping(value = "/api/books/{name}")
    public List<Book> bookListByName(@PathVariable("name") String name) {
        return this.bookService.bookListByName(name);
    }

    // 添加图书
    @ResponseBody
    @PostMapping(value = "/api/books")
    public Map<String, Object> bookAdd(@RequestBody Book book) {
        return this.bookService.bookAdd(book);
    }

    // 删除图书
    @DeleteMapping("/api/books/{id}")
    public void bookDeleteById(@PathVariable("id") Integer id) {
        this.bookService.bookDeleteById(id);
    }

    // 修改图书
    @ResponseBody
    @PutMapping("/api/books/{id}")
    public Map<String, Object> bookUpdate(@RequestBody Book book) {
        return this.bookService.bookUpdate(book);
    }
}
