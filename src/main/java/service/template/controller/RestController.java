package service.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.template.model.Employee;
import service.template.service.EmployeeService;

/**
 * Created by gmanpark on 2016. 1. 31..
 */

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    EmployeeService employeeService;

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    @ResponseBody
    @Cacheable(value = "employees")
    public Page<Employee> getEmployee(
            @RequestParam("page") int page){
        return employeeService.findAll(page);
    }

}
