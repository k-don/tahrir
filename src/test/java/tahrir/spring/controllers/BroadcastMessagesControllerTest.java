package tahrir.spring.controllers;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import tahrir.TrNode;
import tahrir.io.net.broadcasts.broadcastMessages.BroadcastMessage;
import tahrir.spring.controllers.pojo.RestBroadcastMessage;
import tahrir.tools.TrUtils;

import java.net.SocketException;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BroadcastMessagesControllerTest {

    @Autowired
    private MockMvc mvc;
    @Autowired
    private TrNode node;

    @Test
    public void postValidBroadcastMessage() throws Exception {
        String message = "<mb><txt>This is a valid message.</txt></mb>";
        String json = TrUtils.gson.toJson(new RestBroadcastMessage(message));
        mvc.perform(MockMvcRequestBuilders.post("/api/broadcastMessages")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isCreated());
        verify(node.mbClasses.incomingMbHandler).handleInsertion(any(BroadcastMessage.class));
    }
}