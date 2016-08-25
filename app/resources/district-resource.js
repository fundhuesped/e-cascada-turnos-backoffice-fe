(function () {
    'use strict';
    function DistrictProvider() {
        function DistrictResource($resource, apiBase) {
            function transformDataSet(data, headersGetter, status){
                if(status === 200 && data){
                    return angular.fromJson(data).results;  
                }else{
                    return [];
                }
            }
            var District = $resource(apiBase + 'comun/district/:id/', {id: '@id'}, {
                update: {
                    method: 'PUT'
                },
                getFullActiveList: {
                  method: 'GET',
                  params: {status: 'Active', all: true},
                  isArray: true
                },
                getActiveList:{
                    method: 'GET',
                    params:{status:'Active',page_size:99},
                    isArray: true,
                    transformResponse: transformDataSet
                  },
                getInactiveList:{
                    method: 'GET',
                    params:{status:'Inactive',page_size:99},
                    isArray: true,
                    transformResponse: transformDataSet
                },
                query:{
                    method: 'GET',
                    isArray: true,
                    transformResponse: transformDataSet
                }
            });

            return District;
        }

        this.$get = ['$resource', 'apiBase', DistrictResource];
    }

    angular.module('turnos.resources').provider('District', DistrictProvider);
})();