import server from "./api/express-api"
import { SERVER_PORT } from "./config"
import { createServices } from "./services"

createServices()

server.listen(SERVER_PORT, () => {
    console.log(`[express]: Server listening on port ${SERVER_PORT}`)
})