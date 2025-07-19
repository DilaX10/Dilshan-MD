const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DilaX10/Dilshan-MD/blob/main/images/20250719_115945.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DILSHAN-MD Is Alive Now😍*",
BOT_OWNER: '94743376317',  // Replace with the owner's phone number



};
