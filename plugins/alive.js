const aliveCommand = async (m, gss) => {
  try {
    const prefixMatch = m.body.match(/^[/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).trim().toLowerCase() : '';

    if (cmd === 'alive') {
      const imageUrl = 'https://i.ibb.co/xJTgFFZ/20241226-174100.jpg'; 
      

      const uptime = process.uptime();
      const days = Math.floor(uptime / (60 * 60 * 24));
      const hours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((uptime % (60 * 60)) / 60);
      const seconds = Math.floor(uptime % 60);

      const caption = `*🤖 DNX-MD BOT IS ONLINE*\n_________________________________________\n\n*📆 ${days} Day*\n*🕰️ ${hours} Hour*\n*⏳ ${minutes} Minute*\n*⏲️ ${seconds} Second*\n_________________________________________\n\n*⫷⫷⫷ \`DNX MD BEST BOT\` ⫸⫸⫸*`;

      await gss.sendMessage(m.from, {
        image: { url: imageUrl },
        caption: caption,
        contextInfo: {
          quotedMessage: m.message,
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363401928208566@newsletter',
            newsletterName: 'DNX MD FORWARD',
            serverMessageId: 143,
          },
        },
      }, { quoted: m });

    }
  } catch (err) {
    console.error(err);
  }
};

export default aliveCommand;
