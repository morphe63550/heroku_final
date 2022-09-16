const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { type: String, default: "!" },
    logChannel: { type: String, default: "905156673491070998" },
    ticketCategory: { type: String, default: "1015000401046679743" },
    ticketChannel: { type: String, default: "1015562617919643759" },
    testChannel: { type: String, default: "1020097935461064836" }
});

module.exports = mongoose.model("Guild", guildSchema);