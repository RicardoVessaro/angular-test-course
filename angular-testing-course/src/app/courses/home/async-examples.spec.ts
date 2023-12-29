import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

fdescribe("Async Testing Examples", () => {

    it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {

        let test = false;

        setTimeout(() => {
        
            console.log('running assertions');
            
            test = true;

            expect(test).toBeTruthy();

            done();

        }, 1000);

    });

    it("Asynchronous test example - setTimeout()", fakeAsync(() => {

        let test = false; 

        setTimeout(() => {
            console.log('running assertions setTimeout()');

            test = true;
        }, 1000);

        // tick(1000);

        // tick(500);

        // tick(499);

        // tick(1);

        flush();

        expect(test).toBeTruthy();
    }));

    it('Asyncronous test example - plain Promise', fakeAsync(() => {

        let test = false;

        console.log('Creating promise');

        // setTimeout(() => {

        //     console.log('setTimeout() first callback triggered');

        // });

        // setTimeout(() => {

        //     console.log('setTimeout() second callback triggered');

        // });

        Promise.resolve().then(() => {
            console.log('Promise first then() evaluated successfully')

            return Promise.resolve();
        })
        .then(() => {
            
            console.log('Promise second then() evaluated successfully')
            
            test = true;

            });

        flushMicrotasks();

        console.log('Running test assertions');

        expect(test).toBeTruthy();

    }));

    fit('Aynchronous test example - Promises + setTimeout()', fakeAsync(() => {

        let counter = 0;

        Promise.resolve()
            .then(() => {

                counter += 10;

                setTimeout(() => {

                    counter += 1;

                }, 1000);
            });

        expect(counter).toBe(0);

        flushMicrotasks();

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(11);
    }));

});