import { add } from '../../src/scripts/components/utils';

//import assert from 'assert';
// import { should, expect, assert } from 'chai';


describe('utils.js helper library', () => {

  describe('add method', () => {

    var total = 0;

    beforeEach(() => {
      total = add(1, 1);
    });

    it('should return 2 when 1, 1 provided', function () {
      expect(total).toBe(2);
    });

    // it('should return a number', function () {
    //   expect(total).to.be.a('number');
    // });

  });

  // describe('merge method', function () {

  //   let a = {
  //     forename: 'John'
  //   };

  //   let b = {
  //     surname: 'Smith'
  //   };

  //   let c = merge(a, b);

  //   it('should return an object', function () {
  //     expect(c).to.be.a('object');
  //   });

  //   it('should have a forename prop', function () {
  //     expect(c).to.have.property('forename');
  //   });

  //   it('should have a surname prop', function () {
  //     expect(c).to.have.property('surname');
  //   });

  // });
});
