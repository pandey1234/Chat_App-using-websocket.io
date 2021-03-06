let expect= require('expect');

var {generateMessage, generateLocationMessage} = require('./utils/message');

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        let from = "Aakash Pandey",
            text = "Hello how are you all ",
            message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('Generate location message', () => {
    it("should generate locstion object", () => {
        let from = 'Aakash', 
            lat = 15,
            lng = 56
            url = `https://www.google.com/maps?q=${lat},${lng}`,
            message = generateLocationMessage(from, lat, lng);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    })
});