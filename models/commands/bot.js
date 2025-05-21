const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
 credits: "JOY",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await 
Users.getNameUser(event.senderID);
    var tl = ["আমি এখন জয় বস এর সাথে বিজি আছি", "what are you asking me to do?", "I love you baby meye hole chipay aso", "Love you 3000-😍💋💝", "ji bolen ki korte pari ami apnar jonno?","আমাকে না ডেকে আমার বস জয়কে ডাকেন! link: https://www.facebook.com/profile.php?id=100000121528628", "Ato daktasen kn bujhlam na 😡", "jan bal falaba,🙂","ask amr mon vlo nei dakben na🙂", "Hmm jan ummah😘😘","jang hanga korba 🙂🖤","iss ato dako keno lojja lage to 🫦🙈","suna tomare amar valo lage,🙈😽","জি তুমি কি আমাকে ডেকেছো 😇🖤🥀","আমাকে আমাকে না ডেকে আমার বসকে ডাকো এই নেও LINK :- https://www.facebook.com/profile.php?id=100000121528628","Hmmm sona 🖤 meye hoile kule aso ar sele hoile kule new 🫂😘","Yah This Bot creator : ITS,JOY ((J.T))     link => https://www.facebook.com/profile.php?id=100000121528628","হা বলো, শুনছি আমি 🤸‍♂️🫂","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🙈", "তুমি কি আমাকে ডাকলে বন্ধু 🤖?", "I love you 💝", "ভালোবাসি তোমাকে 🤖", "Hi, I'm massanger Bot i can help you.?🤖","Use callad to contact admin!", "Hi, Don't disturb 🤖 🚘Now I'm going to Feni,Bangladesh..bye", "Hi, 🤖 i can help you~~~~"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`╭────────────❍\n╰➤ 👤 𝐃𝐞𝐚𝐫 『${name}』,\n╰➤ 🗣️ ${rand}\n╰─────────────────➤`, event.threadID, event.messageID);
    const res = await axios.get(`http://65.109.80.126:20392/sim?type=ask&ask=${prompt}`);
    console.log(res.data);
    const respond = response.data.data.msg;

    return api.sendMessage({
        body: respond
    }, event.threadID, event.messageID);
};
