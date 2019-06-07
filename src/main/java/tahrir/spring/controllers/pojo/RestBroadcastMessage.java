package tahrir.spring.controllers.pojo;

public class RestBroadcastMessage {
    private String message;
    private String nickname;
    private long timeCreated;
    private String xmlSource;

    public RestBroadcastMessage() {}

    public RestBroadcastMessage(String message, long timeCreated, String xmlSource) {
        this.message = message;
        this.timeCreated = timeCreated;
        this.xmlSource = xmlSource;
    }

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

    public String getXmlSource() {
        return xmlSource;
    }

    public void setXmlSource(String xmlSource) {
        this.xmlSource = xmlSource;
    }
}
