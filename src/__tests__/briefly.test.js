import {
    leadZeroes,
    formatISO,
    hhmm,
    hhmmss,
    hhmmddmm,
    ddmm,
    ddmmyyyy,
    ddmmyyISO,
    weekDayFull
} from '../briefly';

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
    describe('method formatISO', () => {
        let time;
        beforeEach(() => {
            time = '2017-10-26';
        });
        it('should return the time 2017-10-26T00:00:00.000Z', () => {
            expect(formatISO(time)).toEqual('2017-10-26T00:00:00.000Z');
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
    describe('method hhmmss', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 20:24:52', () => {
            expect(hhmmss(time)).toEqual('20:24:52');
        });
    });
    describe('method hhmmddmm', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 20:24', () => {
            expect(hhmmddmm(time)).toEqual('20:24 26/10');
        });
    });
    describe('method ddmm', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 26/10', () => {
            expect(ddmm(time)).toEqual('26/10');
        });
    });
    describe('method ddmmyyyy', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 26/10/2017', () => {
            expect(ddmmyyyy(time)).toEqual('26/10/2017');
        });
    });
    describe('method ddmmyyISO', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time 2017-10-26', () => {
            expect(ddmmyyISO(time)).toEqual('2017-10-26');
        });
    });
    describe('method weekDayFull', () => {
        let time;
        beforeEach(() => {
            time = 'Thu Oct 26 2017 20:24:52 GMT+0200 (CEST)';
        });
        it('should return the time jeudi', () => {
            expect(weekDayFull(time, 'fr')).toEqual('jeudi');
        });
    });
});
