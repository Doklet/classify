'use strict';

angular.module('classifyApp')
  .controller('MainCtrl', function($scope, $q, $location, Client, UploadService, FileUploader) {

    $scope.events = [];

    var uploader = new FileUploader({
      // url: 'api/classify_upload/resnet50',
      // url: 'api/classify_upload?model=flower',
      queueLimit: 1
    });

    $scope.uploader = uploader;

    $scope.upload = function(newFile) {

      UploadService.upload(newFile).then(function(res) {
        // DO SOMETHING WITH THE RESULT!
        console.log('result', res);
      });
    };

    $scope.processResponse = function(models) {

      var results = [];

      for (var i = 0; i < models.length; i++) {
        var model = models[i];

        for (var j = 0; j < model.labels.length; j++) {
          var label = model.labels[j];
          var result = {
            name: label.label,
            score: label.score,
            model: model
          };
          results.push(result);
        }
      }

      return results;
    };

    $scope.processCommand = function(cmd) {

      var txt = cmd;

      var msg = {
        id: '0',
        user: {
          id: '0',
          username: 'Adam',
          firstName: 'Adam',
          lastname: 'Johansson'
        },
        created: '15:28',
        text: txt
      };

      $scope.events.push(msg);
      $scope.command = undefined;
    };

    $scope.performAction = function(action) {

      switch (action) {
        case 'submit':
          uploader.queue[0].upload();
          break;
        case 'cancel':
          uploader.queue[0].remove();
          $scope.events = [];
          break;
      }
    };

    uploader.onAfterAddingFile = function() {
      uploader.queue[0].upload();
      console.info('onAfterAddingFile', uploader.queue.length);
    };

    uploader.onBeforeUploadItem = function(item) {
      item.response = undefined;
      $scope.error = undefined;
      console.info('onBeforeUploadItem', item);
      var model = $location.search().model;
      if (model !== undefined) {
        item.url = 'api/classify_upload?model=' + model;
      }
      else {
        item.url = 'api/classify_upload?';
      }
    };

    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      fileItem.response = response;
      fileItem.results = $scope.processResponse(response);
      console.info('onSuccessItem', fileItem, response, status, headers);
      console.info('results', fileItem.results);
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
