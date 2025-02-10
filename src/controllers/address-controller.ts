import { Request, Response } from 'express'
import { AddressService } from '../services/address-service'

export class AddressController {

    constructor(
        private addressService: AddressService) {
    }

    getAddress(req: Request, res: Response): void {
        const addressObj = this.addressService.getAddress()
        res.json(addressObj)
    }

}