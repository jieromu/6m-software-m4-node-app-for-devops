const targetFn = require("./controller");

describe("the print function", ()=>{

    // standard best practice
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello Universe!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello Universe!"); // If you change this value, the test will fail.
    })
})
