import { AddressController } from "../controllers/address-controller"
import { AddressService } from "./address-service"


export let addressService: AddressService
export let addressController: AddressController

export function createServices() {
    addressService = new AddressService()
    addressController = new AddressController(addressService)
}