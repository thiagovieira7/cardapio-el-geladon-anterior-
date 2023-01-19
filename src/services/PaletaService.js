import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

export const PaletaService = {
    getLista: () =>
        fetch(Api.paletaLista(), { method: "GET" }).then(parseResponse),
    getById: (id) =>
        fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
    create: () =>
        fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateById(id), { method: "PUT" }).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteById(id), {method: "DELETE"}).then(parseResponse),
}
