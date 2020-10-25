package com.pencet.pennart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pencet.pennart.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
