import { v4 as uuidv4 } from 'uuid'
import logger from './logger'

export class AddressService {

    getAddress(): { id: string, address: string } {

        const streetNumber = Math.floor(Math.random() * 1000) + 1
        const streets = ["Main", "Oak", "Pine", "Maple", "Cedar"]
        const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
        const street = streets[Math.floor(Math.random() * streets.length)]
        const city = cities[Math.floor(Math.random() * cities.length)]

        const randomAddress = `${streetNumber} ${street} St, ${city}`

        logger.info(`Generated random address: ${randomAddress}`)

        return {
            id: uuidv4(),
            address: randomAddress
        }
    }

}