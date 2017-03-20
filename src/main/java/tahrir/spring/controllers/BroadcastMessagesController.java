package tahrir.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tahrir.TrNode;
import tahrir.io.net.broadcasts.broadcastMessages.BroadcastMessage;
import tahrir.io.net.broadcasts.broadcastMessages.ParsedBroadcastMessage;
import tahrir.io.net.broadcasts.broadcastMessages.SignedBroadcastMessage;
import tahrir.spring.controllers.pojo.RestBroadcastMessage;

@RestController
public class BroadcastMessagesController {

    private final TrNode node;

    @Autowired
    public BroadcastMessagesController(TrNode node) {
        this.node = node;
    }

    @RequestMapping(value = "/api/broadcastMessages", method = RequestMethod.POST)
    public ResponseEntity<?> postMessage(@RequestBody RestBroadcastMessage restBroadcastMessage) {
        //TODO: get the language from config or settings page.
        ParsedBroadcastMessage parsedBroadcastMessage = ParsedBroadcastMessage.createFromPlaintext(restBroadcastMessage.getMessage(), "en", node.mbClasses.identityStore, System.currentTimeMillis());
        SignedBroadcastMessage signedBroadcastMessage = new SignedBroadcastMessage(parsedBroadcastMessage, node.getConfig().currentUserIdentity);
        BroadcastMessage broadcastMessage = new BroadcastMessage(signedBroadcastMessage);
        node.mbClasses.incomingMbHandler.handleInsertion(broadcastMessage);
        return new ResponseEntity<String>("Success", HttpStatus.CREATED);
    }

}