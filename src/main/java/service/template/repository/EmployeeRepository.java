package service.template.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import service.template.model.Employee;

/**
 * Created by gmanpark on 2016. 1. 31..
 */
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
