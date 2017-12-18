package com.lms.lmsservice;

import com.lms.lmsdomain.User;
import com.lms.lmsrepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 查询所有使用者
    public List<User> usersList() {
        return userRepository.findAll();
    }

    // 通过ID查询使用者
    public User userFindOne(Integer id) {
        return userRepository.findOne(id);
    }

    // 添加使用者
    public void userAdd(User user) {
        user.setUserId(user.getUserId());
        user.setSex(user.getSex());
        user.setAge(user.getAge());
        user.setName(user.getName());
        user.setType(user.getType());
        user.setPhone(user.getPhone());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setBook(user.getBook());
        userRepository.save(user);
    }

    // 删除使用者
    public void userDeleteById(Integer id) {
        userRepository.delete(id);
    }

    // 修改使用者
    public User userUpdate(User user) {
        user.setUserId(user.getUserId());
        user.setSex(user.getSex());
        user.setAge(user.getAge());
        user.setName(user.getName());
        user.setType(user.getType());
        user.setPhone(user.getPhone());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setBook(user.getBook());
        return userRepository.save(user);
    }
}
