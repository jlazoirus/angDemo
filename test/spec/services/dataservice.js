'use strict';

describe('Service: dataService', function () {

  // load the service's module
  beforeEach(module('rock3rlabsApp'));

  // instantiate service
  var dataService;
  beforeEach(inject(function (_dataService_) {
    dataService = _dataService_;
  }));

  it('should do something', function () {
    expect(!!dataService).toBe(true);
  });

});