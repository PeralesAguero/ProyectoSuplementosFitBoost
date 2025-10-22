package com.tuempresa.fitboost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tuempresa.fitboost.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}