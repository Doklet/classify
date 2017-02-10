'use strict';

angular.module('classifyApp')
  .controller('TaskCtrl', function($scope, UploadService, FileUploader) {

    $scope.events = [];

    var uploader = new FileUploader({
      url: 'api/classify_upload/resnet50',
      //url: 'api/classify_upload',
      queueLimit: 1
    });

    $scope.uploader = uploader;

    $scope.upload = function(newFile) {

      UploadService.upload(newFile).then(function(res) {
        // DO SOMETHING WITH THE RESULT!
        console.log('result', res);
      });

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

      var msg = {
        id: '0',
        user: {
          id: '0',
          username: 'Adam',
          firstName: 'Adam',
          lastname: 'Johansson'
        },
        created: '15:28',
        text: action,
        links: [{
          name: 'Google',
          url: 'http://www.google.com'
        }]
      };

      $scope.events.push(msg);

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

    uploader.onBeforeUploadItem = function(item) {
      item.response = undefined;
      $scope.error = undefined;
      console.info('onBeforeUploadItem', item);

      var msg = {
        id: '0',
        bot: {
          name: 'MyBot'
        },
        created: '15:28',
        text: 'Hold on, processing ...'
      };

      $scope.events.push(msg);
    };

    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      fileItem.response = response;
      console.info('onSuccessItem', fileItem, response, status, headers);

      var image = {
        id: '0',
        bot: {
          name: 'MyBot'
        },
        created: '15:28',
        image: fileItem,
        response: response
      };

      $scope.events.push(image);
    };

    uploader.onErrorItem = function(fileItem, response, status, headers) {
      $scope.error = response;
      console.info('onErrorItem', fileItem, response, status, headers);

      var msg = {
        id: '0',
        bot: {
          name: 'MyBot'
        },
        created: '15:28',
        text: 'Oops, classification failed'
      };

      $scope.events.push(msg);
    };

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      fileItem.progress = undefined;
      console.info('onCompleteItem', fileItem, response, status, headers);
    };

  });
