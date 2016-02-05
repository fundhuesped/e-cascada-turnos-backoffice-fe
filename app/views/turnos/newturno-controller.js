(function(){
    'use strict';
    
    function newTurnoController () {

		this.especialidades = [
    		{
	    		id: 1,
	    		name: 'Pediatria',
                createdAt: '2016-01-02',
                lastModifiedAt: null,
                description: 'Especialidad dedicada a menores de 15 años',
                createdBy: {
                    id:1,
                    name: 'Admin'
                },
                lastModifiedBy:null
    		},
    		{
	    		id: 2,
	    		name: 'Infectologia',
                description: 'Se encarga del estudio, la prevención, el diagnóstico, tratamiento y pronóstico de las enfermedades producidas por agentes infecciosos',
                createdAt: '2016-01-02',
                lastModifiedAt: null,
                createdBy: {
                    id:1,
                    name: 'Admin'
                },
                lastModifiedBy:null

    		}
    	];

		this.medicos = [
			{
				id: 'fernandez',
				name: 'Fernandez',
				color: '#ee8505',
				selected: false

			},
			{
				id: 'ramirez',
				name: 'Ramirez',
				color: '#3a87ad',
				selected: false

			},
			{
				id: 'perez',
				name: 'Perez',
				color: '#3a87ad',
				selected: false
			}
		];
		this.prestaciones = [
    		{
	    		id: 1,
	    		name: 'Turno infecto primera vez',
                createdAt: '2016-01-02',
                lastModifiedAt: null,
                duration: '40m', 
                description: 'Turno doble por primera vez infectologia',
                createdBy: {
                    id:1,
                    name: 'Admin'
                },
                notes : 'Se debera empadronar, acercarse con 30 minutos de anterioridad',
                lastModifiedBy:null
    		},
    		{
	    		id: 2,
	    		name: 'Turno infectologia',
                description: 'Turno infectologia',
                duration: '20m',
                createdAt: '2016-01-02',
                lastModifiedAt: null,
                createdBy: {
                    id:1,
                    name: 'Admin'
                },
                notes: '',
                lastModifiedBy:null

    		}
    	];

	    this.recomendations = [
	    		{
		    		id: 1,
		    		firstname: 'Nicolas',
	                othernames: 'Juan',
	                fathersurname: 'Perez',
	                mothersurname: 'Cortes', 
	                docType: {
	                	id: 1,
	                	name: 'DNI'
	                },
	                docNumber: '43355679',
	                birthdate: '1967-02-01'
	    		},
	    		{
		    		id: 5,
		    		firstname: 'Guadalupe',
	                othernames: 'Carla',
	                fathersurname: '',
	                mothersurname: 'Salvatierra', 
	                docType: {
	                	id: 1,
	                	name: 'DNI'
	                },
	                docNumber: '28556279',
	                birthdate: '1988-12-12'
	    		},
	    		{
		    		id: 2,
		    		firstname: 'Roberto',
	                othernames: '',
	                fathersurname: 'Kitos',
	                mothersurname: '', 
	                docType: {
	                	id: 1,
	                	name: 'DNI'
	                },
	                docNumber: '33556279',
	                birthdate: '1988-03-25'
	    		},
	    		{
		    		id: 4,
		    		firstname: 'Analia',
	                othernames: '',
	                fathersurname: 'Barros',
	                mothersurname: 'Cuca', 
	                docType: {
	                	id: 3,
	                	name: 'LC'
	                },
	                docNumber: '8556279',
	                birthdate: '1937-04-12'
	    		}
	    	];


	    this.turnos = [
			{
				id: 123156,
				date : '2016-03-25',
				hour: '9:30',
				hourTo: '9:50',
				especialidad: {
					id: 1,
					name: 'Infectologia',
				},
				prestacion: {
					id: 1,
					name: 'Turno Infectologia',
				},
				medic : {
					id: 4,
					name: 'Fernandez'
				}
			},
			{
				id: 53453,
				date : '2016-03-25',
				hour: '9:50',
				hourTo: '11:10',
				especialidad: {
					id: 1,
					name: 'Infectologia',
				},
				prestacion: {
					id: 1,
					name: 'Turno Infectologia',
				},
				medic : {
					id: 4,
					name: 'Fernandez'
				}
			},
	    ];

	    this.showTurnos = function showTurnos(){
	    	console.log()
	    	return (this.selectedPrestacion && this.selectedEspecialidad && this.newTurno.turnDate && this.selectedMedico);
	    }

    }
    angular.module('turnos.turnos').controller('NewTurnoController',[newTurnoController]);
})();