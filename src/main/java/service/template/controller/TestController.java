package service.template.controller;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class TestController{
    @RequestMapping(value = "/index")
    public String index() {
        return "index";
    }

//    @ResponseStatus
//    @ExceptionHandler
//    public String error() {
//        return "index";
//    }

    @ResponseStatus(value= HttpStatus.NOT_FOUND)
    @ExceptionHandler
    public String notFound(){
        return "index";
    }
}
