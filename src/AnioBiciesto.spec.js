import EsAnioBiciesto from "./AnioBiciesto";
describe("Anio Biciesto",()=>{
    it("deberia determinar si el anio 2008 es viciesto",()=>{
        expect(EsAnioBiciesto(2008)).toEqual("Es Anio Biciesto");
    });
    it("deberia determinar si el anio 2012 es viciesto",()=>{
        expect(EsAnioBiciesto(2012)).toEqual("Es Anio Biciesto");
    });
    it("deberia determinar si el anio 2016 es viciesto",()=>{
        expect(EsAnioBiciesto(2016)).toEqual("Es Anio Biciesto");
    });
    it("deberia determinar si el anio 2000 es viciesto",()=>{
        expect(EsAnioBiciesto(2000)).toEqual("No es Anio Biciesto");
    });
    
})