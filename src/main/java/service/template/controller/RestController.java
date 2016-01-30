package service.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.template.model.Employee;
import service.template.repository.EmployeeRepository;

/**
 * Created by gmanpark on 2016. 1. 31..
 */

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    @ResponseBody
    public Employee getEmployee(){

        return employeeRepository.findByEmpNo(10001);
    }

}
