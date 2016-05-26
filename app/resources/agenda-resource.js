(function () {
  'use strict';
  function AgendaProvider() {
    function AgendaResource($resource, apiBase) {
        function transformDataSet(data){ 
                  return angular.fromJson(data).results;
        }
        var Agenda = $resource(apiBase + 'practicas/agenda/:id/', {id: '@id'}, {
        update: {
          method: 'PUT'
        },
        getActiveList: {
          method: 'GET',
          params: {status: 'Active'},
          isArray: true,
          transformResponse: transformDataSet          
        },
        getInactiveList: {
          method: 'GET',
          params: {status: 'Inactive'},
          isArray: true,
          transformResponse: transformDataSet
        },
        query:{
          method: 'GET',
          isArray: true,            
          transformResponse: transformDataSet
        },
        queryPaginated:{
          method: 'GET',
          isArray: false
        },
        getPaginatedActiveList:{
          method: 'GET',
          params:{status:'Active'},
          isArray: false
        }
      });

      return Agenda;
    }

    this.$get = ['$resource', 'apiBase', AgendaResource];
  }

  angular.module('turnos.resources').provider('Agenda', AgendaProvider);
})();
