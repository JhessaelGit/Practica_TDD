import EsAnioBiciesto from "./AnioBiciesto";
describe("Anio Biciesto",()=>{
    it("deberia determinar si el anio 1600 es viciesto",()=>{
        expect(EsAnioBiciesto(2008)).toEqual("Es Anio Biciesto");
    });
    it("deberia determinar si el anio 1700 es viciesto",()=>{
        expect(EsAnioBiciesto(2012)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar si el anio 1800 es viciesto",()=>{
        expect(EsAnioBiciesto(2016)).toEqual("No es Anio Biciesto");
    });
})