package com.lms.lmscontroller;

import com.lms.lmsdomain.User;
import com.lms.lmsservice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // 查询所有使用者
    @GetMapping(value = "/api/users")
    public List<User> usersList() {
        return userService.usersList();
    }

    // 通过ID查询使用者
    @GetMapping(value = "/api/users/{id}")
    public User userFindOne(@PathVariable("id") Integer id) {
        return userService.userFindOne(id);
    }

    // 插入使用者
    @ResponseBody
    @PostMapping(value = "/api/users")
    public Map<String, Object> userAdd(@RequestBody User user) {
        this.userService.userAdd(user);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("user", user);
        return map;
    }

    // 删除使用者
    @DeleteMapping("/api/users/{id}")
    public void userDeleteById(@PathVariable("id") Integer id) {
        userService.userDeleteById(id);
    }

    // 修改使用者
    @ResponseBody
    @PutMapping("/api/users/{id}")
    public Map<String, Object> userUpdate(@RequestBody User user) {
        this.userService.userUpdate(user);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("user", user);
        return map;
    }
}
