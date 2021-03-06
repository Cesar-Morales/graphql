import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { title } from 'process';
import { database } from '../data/data.store';

const mutation : IResolvers = {
    Mutation: {
        cursoNuevo(__:void, {curso}):any {
            const itemCurso = {
                id:String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if(database.cursos.filter(item => item.title === curso.title).length === 0) {
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            return {
                id:"-1",
                title: "El curso ya existe",
                description: "",
                clases: -1,
                time: 0.0,
                level: "TODOS",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            };

        },
        modificarCurso(__:void, { curso }): any {
            const elementoExiste = _.findIndex(database.cursos, function(o) {
                return o.id === curso.id
            });
            if (elementoExiste > -1 ) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;
                return curso;
            }
            return {
                id:"-1",
                title: "El curso no existe",
                description: "",
                clases: -1,
                time: 0.0,
                level: "TODOS",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            };
        },
        eleminarCurso(__:void, { id }): any {
            const borrarCurso = _.remove(database.cursos, function(o) {
                return o.id === id
            });

            if (borrarCurso[0] === undefined){
                return{
                    id:"-1",
                    title: "El curso no existe",
                    description: "",
                    clases: -1,
                    time: 0.0,
                    level: "TODOS",
                    logo: "",
                    path: "",
                    teacher: "",
                    reviews: []
                }
            } else {
                return {title: `Curso ${id} borrado exitosamente`}
            }
    }
}};


export default mutation;