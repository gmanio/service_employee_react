package service.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.template.model.Employee;
import service.template.repository.EmployeeRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gmanpark on 2016. 1. 31..
 */

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    @ResponseBody
    public List<Employee> getEmployee(){

        List<Employee> empList = new ArrayList<Employee>();

        for (int i = 10001; i < 10051; i++) {
            empList.add(employeeRepository.findByEmpNo(i));
        }

        return empList;
    }

}
