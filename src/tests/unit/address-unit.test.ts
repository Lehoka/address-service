import { AddressService } from "../../services/address-service";

describe("AddressService Unit Tests", () => {
    let addressService: AddressService;

    beforeEach(() => {
        addressService = new AddressService();
    });

    it("getAddress() - gets back an address with an id and an address field", () => {
        const result = addressService.getAddress();
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("address");
        expect(typeof result.id).toBe("string");
        expect(typeof result.address).toBe("string");
    });
});