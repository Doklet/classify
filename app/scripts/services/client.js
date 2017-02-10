'use strict';

angular.module('classifyApp')
  .service('Client', function() {

    this.STATUS_TYPES = {
      AWAIT_UPLOAD: 0,
      SUBMIT_OR_CANCEL: 1,
      AWAIT_ACTION: 2
    };

    this._selectedModel = undefined;
    this._status = this.STATUS_TYPES.AWAIT_UPLOAD;

    this.getStatus = function() {
      return this._status;
    };

    this.setStatus = function(status) {
      this._status = status;
    };

    this.getSelectedModel = function() {
      return this._selectedModel;
    };

    this.setSelectedModel = function(model) {
      this._selectedModel = model;
    };

  });
