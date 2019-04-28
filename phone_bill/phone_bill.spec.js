const phoneBill = require('./phone_bill.js');

describe("Phone Bill Tests", () => {
    it("getSeconds should return correct seconds", () => {
        expect(phoneBill.getSeconds('00:00:10')).toEqual(10);
        expect(phoneBill.getSeconds('00:00:00')).toEqual(0);
        expect(phoneBill.getSeconds('00:10:10')).toEqual(610);
        expect(phoneBill.getSeconds('10:00:10')).toEqual(36010);
    })
})