import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, {id}): any {
            const result = database.estudiantes.filter(estudiante => estudiante.id === id)[0]
            return (result === undefined) ? {
                id:'-1', name:'no existe este alumno', email:'no existe este alumno', website:'no existe este alumno', courses:[]
                } : result;
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, {id}): any {
            const result = database.cursos.filter(each => each.id === id)[0]
            return (result === undefined) ? {
                id: '-1',
                title: "No existe este curso",
                desctiption: "",
                clases: -1,
                time: 0.0,
                logo: "",
                level: "TODOS",
                path: "",
                teacher: "",
                reviews: []
                } : result;
        }
    }
};

export default query;