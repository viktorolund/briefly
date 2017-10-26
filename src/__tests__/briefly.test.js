import { hhmm, leadZeroes } from '../briefly';

describe('briefly methods', () => {
    describe('method leadZeroes', () => {
        it('should add a 0 when variable is a empty string', () => {
            const inputData = '';
            expect(leadZeroes(inputData)).toEqual('0');
        });
        it('should not add a 0 when variable has context', () => {
            const inputData = 'foodcourt';
            expect(leadZeroes(inputData)).toEqual('foodcourt');
        });
    });
    describe('method hhmm', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 20:24', () => {
            expect(hhmm(time)).toEqual('20:24');
        });
    });
});
