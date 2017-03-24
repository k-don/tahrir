package tahrir.spring.controllers.pojo;

public class RestBroadcastMessage {
    private String message;
    private String nickname;
    private long timeCreated;

    public RestBroadcastMessage() {}

    public RestBroadcastMessage(String message, long timeCreated) {
        this.message = message;
        this.timeCreated = timeCreated;
    }

    public RestBroadcastMessage(String message, String nickname, long timeCreated) {
        this.message = message;
        this.nickname = nickname;
        this.timeCreated = timeCreated;
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

    public long getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(long timeCreated) {
        this.timeCreated = timeCreated;
    }
}
