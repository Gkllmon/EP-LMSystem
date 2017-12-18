package com.lms.lmsrepository;

import com.lms.lmsdomain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
