const { Client } = require("klasa");
const { Client: IdioticAPI } = require("idiotic-api");
const permissionLevels = require("./PermissionLevels");
const { WebhookClient } = require("discord.js");

class PenguClient extends Client {

    constructor(options) {
        super({ ...options, permissionLevels });

        this.config = require("../config.json");
        this.functions = require("../utils/functions.js");
        this.lavalink = null;
        this.idiotic = new IdioticAPI(this.config.keys.idiotic, { dev: true });
        this.queue = new Map();
        this.whStatus = new WebhookClient("451318929814716426", this.config.webhooks.status);
    }

}

module.exports = PenguClient;
