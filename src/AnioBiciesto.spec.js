import EsAnioBiciesto from "./AnioBiciesto";
describe("Anio Biciesto",()=>{
    it("deberia determinar que el anio 2017 no es Biciesto",()=>{
        expect(EsAnioBiciesto(2017)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar que el anio 2018 no es Biciesto",()=>{
        expect(EsAnioBiciesto(2018)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar que el anio 2019 no es Biciesto",()=>{
        expect(EsAnioBiciesto(2019)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar que el anio 2000 es Biciesto",()=>{
        expect(EsAnioBiciesto(2000)).toEqual("Es Anio Biciesto");
    });
    
})