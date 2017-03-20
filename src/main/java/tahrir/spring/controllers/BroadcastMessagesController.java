package tahrir.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tahrir.TrNode;
import tahrir.spring.controllers.pojo.RestBroadcastMessage;

@RestController
public class BroadcastMessagesController {

    private final TrNode node;

    @Autowired
    public BroadcastMessagesController(TrNode node) {
        this.node = node;
    }

    @RequestMapping(value = "/api/broadcastMessages", method = RequestMethod.POST)
    public ResponseEntity<?> postMessage(@RequestBody RestBroadcastMessage broadcastMessage) {
        return null;
    }

}