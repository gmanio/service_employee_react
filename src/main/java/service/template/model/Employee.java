package service.template.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name="employees")
@Getter
@Setter
public class Employee {
    @Id
    @Column(name = "emp_no", nullable = false)
    private int empNo;
    @Column(name = "birth_date", columnDefinition="DATETIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthDate;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name", nullable = false)
    private String lastName;
    @Column(name = "gender", nullable = false)
    private String gender;
    @Column(name = "hire_date", columnDefinition="DATETIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date hireDate;
}
