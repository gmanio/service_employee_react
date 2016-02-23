package service.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.template.model.Employee;
import service.template.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Page<Employee> findAll(int employeeCount){
        Pageable pageable = new PageRequest(0, employeeCount, Sort.Direction.ASC, "empNo");

        return this.employeeRepository.findAll(pageable);
    }
}
