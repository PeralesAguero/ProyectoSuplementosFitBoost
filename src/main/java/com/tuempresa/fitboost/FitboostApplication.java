package com.tuempresa.fitboost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.tuempresa.fitboost.model.Task;
import com.tuempresa.fitboost.repository.TaskRepository;

@SpringBootApplication
public class FitboostApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitboostApplication.class, args);
	}

	@Bean
	CommandLineRunner initData(TaskRepository taskRepository) {
		return args -> {
			taskRepository.save(new Task("Comprar proteína","Comprar 2kg de whey"));
			taskRepository.save(new Task("Comprar creatina","1 frasco de creatina 300g"));
		};
	}

}
