package com.example.zadyszke.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppOrderRepository extends JpaRepository<AppOrder, Long> {
}
