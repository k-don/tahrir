package tahrir.spring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebpageController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}
