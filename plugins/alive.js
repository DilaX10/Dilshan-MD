const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "alive",
    desc: "╭───〔 ✅ I'M ALIVE NOW 〕───⬣
│
│ 🔹 Bot Name: 🔮 DILSHAN-MD 🔮
│ 🔹 Status: Online & Active ✅ 
│ 🔹 Ping: 0 ms
│ 🔹 Uptime: 00:01:06
│ 🔹 Platform: linux
│ 🔹 CPU: AMD EPYC 7B13
│ 🔹 Owner: DILSHAN CHANUSHKA
│ 🔹 Version: 1.0.0
│
╰───────────────⬣

📡 Stay Connected with Me!
🎥 Watch & Learn Tech with Djz Dilshan X Jay
🔔 Subscribe Now: 
👉 
https://youtube.com/@djzdilshanxjay?si=9XdKXTq12AApPFMP
─────────────────────────
🚀 Powered By  DILSHAN CHANUSHKA 🔥
",
    category: "main",
    filename: __filename
},
async (dilshan, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        return await dilshan.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: config.ALIVE_MSG
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
