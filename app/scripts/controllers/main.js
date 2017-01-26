'use strict';

angular.module('classifyApp')
  .controller('MainCtrl', function($scope, Client, UploadService, FileUploader) {

    $scope.upload = function(newFile) {

      UploadService.upload(newFile).then(function(res) {
        // DO SOMETHING WITH THE RESULT!
        console.log('result', res);
      });

    };

    var uploader = new FileUploader({
      url: 'api/classify_upload/resnet50',
      queueLimit: 1
    });

    $scope.uploader = uploader;

    uploader.onBeforeUploadItem = function(item) {
      item.response = undefined;
      $scope.error = undefined;
      console.info('onBeforeUploadItem', item);
    };

    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      fileItem.response = response;
      console.info('onSuccessItem', fileItem, response, status, headers);
    };

    uploader.onErrorItem = function(fileItem, response, status, headers) {
      $scope.error = response;
      console.info('onErrorItem', fileItem, response, status, headers);
    };

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      fileItem.progress = undefined;
      console.info('onCompleteItem', fileItem, response, status, headers);
    };

  });
