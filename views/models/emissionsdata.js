const mongoose = require('mongoose');

async function main() {
    const url = "mongodb+srv://Georgian1:<test1234>@c02emmissions.qr3ng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    try {
        await clientInformation.connection();
        } catch (e) {
            console.error(e);
    } finally {
        await clientInformation.close();
    }
}

main().catch(console.error);
