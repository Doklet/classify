'use strict';

angular.module('classifyApp')
  .service('UploadService', function($http, $q) {

    function handleError(response, data) {
      if (!angular.isObject(response.data) || !response.data.message) {
        return ($q.reject('An unknown error occurred.'));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response);
    }

    function upload(uploadFile) {
      var upl = $http({
        method: 'POST',
        url: '/api/classify_upload', // /api/upload
        //IMPORTANT!!! You might think this should be set to 'multipart/form-data' 
        // but this is not true because when we are sending up files the request 
        // needs to include a 'boundary' parameter which identifies the boundary 
        // name between parts in this multi-part request and setting the Content-type 
        // manually will not set this boundary parameter. For whatever reason, 
        // setting the Content-type to 'false' will force the request to automatically
        // populate the headers properly including the boundary parameter.
        headers: { 'Content-Type': false },
        data: {
          file: uploadFile
        },
        transformRequest: function(data, headersGetter) {
          var formData = new FormData();
          angular.forEach(data, function(value, key) {
            formData.append(key, value);
          });

          return formData;
        }
      });
      return upl.then(handleSuccess, handleError);

    } // End upload function

    return ({
      upload: upload
    });

  });
