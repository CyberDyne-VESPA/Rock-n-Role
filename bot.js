const Discord = require('discord.js')

const client = new Discord.Client()

require('dotenv').config()

const EventEmitter = require('events')

const bot = new EventEmitter()

// Event handlers go here

// BOT_TOKEN is set in .env file
client.login(process.env.BOT_TOKEN)
