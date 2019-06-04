package tahrir.io.net.broadcasts;

import com.google.common.base.Optional;
import nu.xom.*;
import org.testng.Assert;
import org.testng.annotations.Test;
import tahrir.TrNode;
import tahrir.io.crypto.TrCrypto;
import tahrir.io.net.broadcasts.broadcastMessages.ParsedBroadcastMessage;
import tahrir.tools.TrUtils;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import static tahrir.TrConstants.FormatInfo.*;

public class BroadcastMessageParserTest {
	/**
	 * Create a simple micoblog with nothing but text.
	 */



    @Test
	public void simpleTextTest() throws Exception {

        TrNode node = TrUtils.TestUtils.makeNode(9003, false, false, false, true, 0, 0);

		String xml = "<?xml version=\"1.0\"?>\n<bm><txt lang=\"en\">Hello there this is simple test.</txt></bm>\n" ;
        ParsedBroadcastMessage parsedBroadcastMessage = ParsedBroadcastMessage.createFromPlaintext("Hello there this is simple test.", "en", node.mbClasses.identityStore, System.currentTimeMillis());
		// convert back to XML and compare with original
		Assert.assertEquals(parsedBroadcastMessage.asXmlString(), xml);
	}

	/**
	 * Create a microblog with both text and mentions.
	 */
	@Test
	public void withMentionsTest() throws Exception {
        RSAPublicKey publicKey = TrCrypto.createRsaKeyPair().a;
        RSAPrivateKey privateKey = TrCrypto.createRsaKeyPair().b;
        TrNode node = TrUtils.TestUtils.makeNode(9005, false, false, false, true, 0, 0);
        String userNickname = "user1337";
        node.mbClasses.identityStore.addIdentityToUsersWithNickname(new UserIdentity(userNickname, publicKey, Optional.of(privateKey)));

		Element root = getRootWithTextMention(userNickname, publicKey);
		String xml = new Document(root).toXML();

        ParsedBroadcastMessage parsedBroadcastMessage = ParsedBroadcastMessage.createFromPlaintext("Hello, world! This is a very simple microblog!@user1337", "en", node.mbClasses.identityStore, System.currentTimeMillis());
        // convert back to XML and compare with original
        Assert.assertEquals(parsedBroadcastMessage.asXmlString(), xml);
	}

	/**
	 * Get a root element with an attached text element.
	 */
	private Element getRootWithTextMention(String userNickname, RSAPublicKey publicKey) {
		Element root = new Element(ROOT);
		Element textElement = new Element(PLAIN_TEXT);
		textElement.addAttribute(new Attribute(LANG_ATTRIBUTE, "en"));
		root.appendChild(textElement);

		String text = "Hello, world! This is a very simple microblog!";
		textElement.appendChild(text);

        Element mentionElement = new Element(MENTION);
        textElement.appendChild(mentionElement);
        // Append a mention. In accordance with FormatInfo then the mention is encoded an a String in base64.
        mentionElement.addAttribute(new Attribute(ALIAS_ATTRIBUTE, userNickname));
        String base64Mention = TrCrypto.toBase64(publicKey);
        mentionElement.appendChild(base64Mention);

		return root;
	}
}
