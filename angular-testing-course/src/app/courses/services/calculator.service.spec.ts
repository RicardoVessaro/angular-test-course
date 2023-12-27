import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {   // Declare the test suit

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {

        console.log("Calling beforeEach");

        // const logger = new LoggerService();

        // spyOn(logger, 'log');

        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

        calculator = new CalculatorService(loggerSpy);

    });

    it('should add two numbers', () => {

        console.log("add test");

        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        // expect(logger).toHaveBeenCalledTimes(1);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });   // Declare the test instruction


    it('should subtract two numbers', () => {

        console.log("subtract test");

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });  

});