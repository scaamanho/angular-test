export class HomeService {
    listaDeUsuarios(filtro):Array<object>{
        return [{name: "sandino"}, {name: "paladino"}, {name: "masuterio"}, {name: "neisedes"}, {name: "malandrin"}, {name: "lutino"},
        {name: "sandino2"}, {name: "paladino2"}, {name: "masuterio2"}, {name: "neisedes2"}, {name: "malandrin2"}, {name: "lutino2"},
        {name: "sandino3"}, {name: "paladino3"}, {name: "masuterio3"}, {name: "neisedes3"}, {name: "malandrin3"}, {name: "lutino3"},
        {name: "persefone"}, {name: "algomotas"}, {name: "segismundo"}, {name: "recaredo"}, {name: "vintestunda"}, {name: "alanitomayor"}];
    }

    defaultEvent():object{
        return {name:null,counter:null,even:null};
    }
}