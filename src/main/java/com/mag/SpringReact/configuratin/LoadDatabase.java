package com.mag.SpringReact.configuratin;

import com.mag.SpringReact.Entity.Employee;
import com.mag.SpringReact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private EmployeeRepository employeeRepository;

    @Autowired
    public LoadDatabase(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
        employeeRepository.save(new Employee("Amine","GHARBI","GHARBI@gmail.com"));
        employeeRepository.save(new Employee("SALAH","SASSI","GHARBI@gmail.com"));
    }
}
