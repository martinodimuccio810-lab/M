const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Cuando el bot se enciende
client.on('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

// Comando simple con prefijo (!hola)
client.on('messageCreate', (message) => {
    if (message.content === '!hola') {
        message.reply('¡Hola! ¿Cómo estás? 😄');
    }
});

// Iniciar bot (acá va tu token)
client.login('MTQ0MTE5OTI4NTI4MTQ5MzE5NA.Gy6wLE.LMSq6St-iC4kTLb3yp6EQE4EUqSkipHXh2Ppsw');
client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!hola") {
        message.reply("¡Hola! ¿Todo bien?");
    }
});
client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!ping") {
        message.reply("Pong!");
    }
});
const { joinVoiceChannel } = require("@discordjs/voice");
const { joinVoiceChannel } = require("@discordjs/voice");

client.on("messageCreate", (message) => {
    if (message.content === "!unirme") {
        const canal = message.member.voice.channel;
        if (!canal) return message.reply("Tenés que estar en un canal de voz.");

        joinVoiceChannel({
            channelId: canal.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });

        message.reply("Me uní al canal de voz 👌");
    }
});
