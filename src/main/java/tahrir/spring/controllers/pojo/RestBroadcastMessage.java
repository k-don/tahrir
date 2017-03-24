package tahrir.spring.controllers.pojo;

public class RestBroadcastMessage {
    private String message;
    private String nickname;

    public RestBroadcastMessage() {}

    public RestBroadcastMessage(String message) {
        this.message = message;
    }

    public RestBroadcastMessage(String message, String nickname) {
        this.message = message;
        this.nickname = nickname;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
