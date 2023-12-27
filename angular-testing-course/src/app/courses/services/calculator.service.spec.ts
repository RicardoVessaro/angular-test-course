import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {   // Declare the test suit

    it('should add two numbers', () => {

        // const logger = new LoggerService();

        // spyOn(logger, 'log');

        const logger = jasmine.createSpyObj('LoggerService', ["log"]);

        const calculator = new CalculatorService(logger);

        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        // expect(logger).toHaveBeenCalledTimes(1);

        expect(logger.log).toHaveBeenCalledTimes(1);

    });   // Declare the test instruction


    it('should subtract two numbers', () => {

        const calculator = new CalculatorService(new LoggerService());

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");

    });  

});