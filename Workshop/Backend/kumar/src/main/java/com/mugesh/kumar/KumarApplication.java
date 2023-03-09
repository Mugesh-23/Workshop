package com.mugesh.kumar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EnableAutoConfiguration
@EntityScan(basePackages = {"com.mugesh.kumar.models"})
public class KumarApplication {

	public static void main(String[] args) {
		SpringApplication.run(KumarApplication.class, args);
	}

}
