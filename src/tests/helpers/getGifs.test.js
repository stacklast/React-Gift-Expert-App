import { getGifts } from "../../helpers/getGifs"

describe('test with getGifs', () => {
    
    test('should get 10 elements', async() => {

        const gifs = await getGifts('One Punch');

        expect( gifs.length ).toBe(10);
    });
    
    test('should get only  10 elements', async() => {

        const gifs = await getGifts('');

        expect( gifs.length ).toBe(0);
    });

});
