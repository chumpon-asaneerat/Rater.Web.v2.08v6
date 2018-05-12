
function fatchData(callback) {
    callback('123');
}

describe('NLib', () => {
    test('work 1', () => {
        expect(1).toBe(1);
    });
    test('work 2', done => {
        function callback(data) {
            expect(data).toBe('123');
            done();
        };

        fatchData(callback);
    });
});