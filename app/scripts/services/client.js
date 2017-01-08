'use strict';

angular.module('classifyApp')
  .service('Client', function () {
    
  	this.STATUS_TYPES = {
  		AWAIT_UPLOAD: 0,
  		SUBMIT_OR_CANCEL: 1,
  		AWAIT_ACTION: 2
  	};

  	this._status = this.STATUS_TYPES.AWAIT_UPLOAD;

  	this.getStatus = function() {
  		return this._status;
  	};

  	this.setStatus = function(status) {
  		this._status = status;
  	};

  });
