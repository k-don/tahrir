package tahrir.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tahrir.TrNode;
import tahrir.io.net.broadcasts.UserIdentity;
import tahrir.spring.controllers.pojo.RestIdentity;

import static org.springframework.http.HttpStatus.OK;

@RestController
public class IdentityController {

    private final TrNode node;

    @Autowired
    public IdentityController(TrNode node) {
        this.node = node;
    }

    @RequestMapping(value = "/api/identity", method = RequestMethod.GET)
    public ResponseEntity<RestIdentity> getIdentity() {
        UserIdentity currentUserIdentity = node.getConfig().currentUserIdentity;
        RestIdentity restIdentity = new RestIdentity(currentUserIdentity.getNick());
        return new ResponseEntity<RestIdentity>(restIdentity, HttpStatus.OK);
    }

}