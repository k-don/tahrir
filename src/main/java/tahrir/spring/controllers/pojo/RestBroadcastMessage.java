package tahrir.spring.controllers.pojo;

public class RestBroadcastMessage {
    private String message;

    public RestBroadcastMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
