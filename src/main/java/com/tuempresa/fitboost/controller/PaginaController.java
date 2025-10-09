package com.tuempresa.fitboost.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginaController {

    @GetMapping("/login")
    public String login() {
        return "login"; 
    }

    
    @GetMapping("/")
    public String inicio() {
        return "index";
    }


    @GetMapping("/nosotros")
    public String nosotros() {
        return "nosotros";
    }

    @GetMapping("/productos")
    public String productos() {
        return "Productos";
    }


}
