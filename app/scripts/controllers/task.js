'use strict';

angular.module('classifyApp')
  .controller('TaskCtrl', function($scope, UploadService, FileUploader) {

    $scope.events = [];

    // $scope.events = [{
    //   id: '0',
    //   user: {
    //     id: '0',
    //     username: 'Adam',
    //     firstName: 'Adam',
    //     lastname: 'Bengtsson'
    //   },
    //   created: '15:28',
    //   text: 'Hi'
    // }, {
    //   id: '1',
    //   user: {
    //     id: '0',
    //     username: 'Bot',
    //     firstName: 'Bot',
    //     lastname: 'Botterson'
    //   },
    //   created: '15:31',
    //   text: 'Hi how are you'
    // }];

    var uploader = new FileUploader({
      url: 'api/classify_upload/resnet50',
      queueLimit: 1
    });

    $scope.uploader = uploader;

    $scope.upload = function(newFile) {

      UploadService.upload(newFile).then(function(res) {
        // DO SOMETHING WITH THE RESULT!
        console.log('result', res);
      });

    };

    $scope.performAction = function(action) {

      var msg = {
        id: '0',
        user: {
          id: '0',
          username: 'Adam',
          firstName: 'Adam',
          lastname: 'Bengtsson'
        },
        created: '15:28',
        text: action
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
    };

    uploader.onErrorItem = function(fileItem, response, status, headers) {
      $scope.error = response;
      console.info('onErrorItem', fileItem, response, status, headers);
    };

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      fileItem.progress = undefined;
      console.info('onCompleteItem', fileItem, response, status, headers);

      var msg = {
        id: '0',
        bot: {
          name: 'MyBot'
        },
        created: '15:28',
        text: 'There you go, classification completed'
      };

      $scope.events.push(msg);
    };

  });
