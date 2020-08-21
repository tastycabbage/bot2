const OJS = require("owop-js");
const Client = new OJS.Client({
    reconnect: true,
    controller: true
});

Client.on("join", () => {
    Client.world.move(x = -319, y = 735);
});