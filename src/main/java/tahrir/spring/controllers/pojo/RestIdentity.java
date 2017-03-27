package tahrir.spring.controllers.pojo;

public class RestIdentity {
    private String nickname;

    public RestIdentity() {}

    public RestIdentity(String nickname) {
        this.nickname = nickname;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
