// Dependencies
const { MessageEmbed, Message } = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'help', // Command name
	description: 'Afficher la liste des commandes.', // Command description

    /**
     * Command exetute
     * @param {Message} message The message sent by user
     */
	execute(message) {
		const { commands } = message.client; // Get commands from the client
        
        message.channel.send(
            new MessageEmbed()
            .setColor(config.color.default)
            .setTitle('listes des comande')
            .setDescription(commands.map(c => `**\`${config.prefix}${c.name}\`**: ${c.description ? c.description : '*No description provided*'}`).join('\n')) // Mapping the commands
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	}
};
