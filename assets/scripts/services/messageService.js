'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {
    
      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( username, message ) {
        return $http.post('/messages', { username: username, message: message });
      }
    
  });
