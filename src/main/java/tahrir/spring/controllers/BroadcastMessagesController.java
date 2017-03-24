package tahrir.spring.controllers;

import com.google.common.collect.Lists;
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

import java.util.List;
import java.util.SortedSet;

@RestController
public class BroadcastMessagesController {

    private final TrNode node;

    @Autowired
    public BroadcastMessagesController(TrNode node) {
        this.node = node;
    }

    @RequestMapping(value = "/api/broadcastMessages", method = RequestMethod.POST)
    public ResponseEntity<?> postMessage(@RequestBody RestBroadcastMessage restBroadcastMessage) {
        ParsedBroadcastMessage parsedBroadcastMessage = ParsedBroadcastMessage.createFromPlaintext(restBroadcastMessage.getMessage(), "en", node.mbClasses.identityStore, System.currentTimeMillis());
        SignedBroadcastMessage signedBroadcastMessage = new SignedBroadcastMessage(parsedBroadcastMessage, node.getConfig().currentUserIdentity);
        BroadcastMessage broadcastMessage = new BroadcastMessage(signedBroadcastMessage);
        node.mbClasses.incomingMbHandler.handleInsertion(broadcastMessage);
        return new ResponseEntity<String>("Success", HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/broadcastMessages", method = RequestMethod.GET)
    public ResponseEntity<?> getMessages() {
        SortedSet<BroadcastMessage> microblogSet = node.mbClasses.mbsForViewing.getMicroblogSet();
        List<RestBroadcastMessage> broadcastMessages = Lists.newArrayList();
        for (BroadcastMessage broadcastMessage : microblogSet) {
            String message = broadcastMessage.signedBroadcastMessage.parsedBroadcastMessage.getPlainTextBroadcastMessage();
            String nickname = broadcastMessage.signedBroadcastMessage.getAuthor().getNick();
            long timeCreated = broadcastMessage.signedBroadcastMessage.parsedBroadcastMessage.getTimeCreated();
            broadcastMessages.add(new RestBroadcastMessage(message, nickname, timeCreated));
        }

        // TODO remove this, only for testing
        addTestMicroblogs(broadcastMessages);

        return new ResponseEntity<List<RestBroadcastMessage>>(broadcastMessages, HttpStatus.OK);
    }

    private void addTestMicroblogs(List<RestBroadcastMessage> broadcastMessages) {
        broadcastMessages.add(new RestBroadcastMessage("Hello world", "sanity", System.currentTimeMillis()));
        broadcastMessages.add(new RestBroadcastMessage("Foo bar", "sanity", System.currentTimeMillis() - 60 * 1000));
        broadcastMessages.add(new RestBroadcastMessage("nomel7 lol", "sanity", System.currentTimeMillis() - 2 * 60 * 60 * 1000));
    }



}