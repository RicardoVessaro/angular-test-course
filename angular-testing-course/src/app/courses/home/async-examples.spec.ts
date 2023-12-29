
fdescribe("Async Testing Examples", () => {

    it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {

        let test = false;

        console.log('running assertions');

        setTimeout(() => {

            test = true;

            expect(test).toBeTruthy();

            done();

        }, 1000);

    });

});