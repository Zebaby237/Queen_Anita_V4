require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER.split('237680333605,'); 
global.anitav4 = process.env.BOT_NAME || "𓊈♛𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒♛𓊉";
global.ownername = process.env.OWNER_NAME || "♛𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒♛";
global.packname = process.env.PACK_NAME || "♛𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒♛";
global.author = process.env.AUTHOR || "𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'false'; 
global.autoRecord = process.env.AUTO_RECORD === 'false';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "🇨🇲";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'false';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split('237680333605,').map(user => `${237680333605}@s.whatsapp.net`); 

global.public = process.env.PUBLIC === 'false';

global.ANTIDELETE = process.env.ANTIDELETE === 'false';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'false';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'false';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'false';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '_';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'false';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins idiot !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When ♛𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒♛ Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner dude!*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat bro!*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat bro!*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Grey*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
