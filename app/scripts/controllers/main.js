'use strict';


angular.module('classifyApp')
  .controller('MainCtrl', function($scope, FileUploader) {

    var uploader = new FileUploader({
      url: 'api/classify_upload'
    });

    $scope.uploader = uploader;

    uploader.onBeforeUploadItem = function(item) {
      item.response = undefined;
      console.info('onBeforeUploadItem', item);
    };

    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      fileItem.response = response;
      console.info('onSuccessItem', fileItem, response, status, headers);
    };

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      fileItem.progress = undefined;
      console.info('onCompleteItem', fileItem, response, status, headers);
    };

  });
