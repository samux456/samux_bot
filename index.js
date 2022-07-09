const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if(message.content == "!youtube"){
       message.channel.send("Questo è il mio canale:https://www.youtube.com/channel/UC40Q_j4IhmQgIV8dcWhzezQ")
    }

    if(message.content == "!help"){
       message.channel.send("Questi sono tutti i comandi che potrai eseguire con questo Bot: !youtube,!ciao,!discord,!inviteBot,!help,!embed")
    }

    if(message.content == "!ciao"){
       message.channel.send("Ciao anche a te!")
    }

    if(message.content == "!discord"){
       message.channel.send("Questo è il link del SamuX's Server:https://discord.com/channels/992057313324171384/993122270639829042")
    }

    if(message.content == "!inviteBot"){
       message.channel.send("Questo è l'invito del SamuX's Bot:https://discord.com/api/oauth2/authorize?client_id=995080848950952027&permissions=0&scope=bot")
    }

    if(message.content == "!embed"){
       var embed = new Discord.MessageEmbed()
           .setTitle("Titolo embed")
           .setDescription(`${message.author.username} ha scritto il messaggio`)
           .setThumbnail("https://preview.redd.it/5hf7zvlte4x51.png?auto=webp&s=9ff92e4c12d8ea4c92f1ea03a42a21c96bfefa65")

        message.channel.send({embeds: [embed]})
    }

})