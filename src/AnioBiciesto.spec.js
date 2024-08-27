import EsAnioBiciesto from "./AnioBiciesto";
describe("Anio Biciesto",()=>{
    it("deberia determinar si el anio 1600 es viciesto",()=>{
        expect(EsAnioBiciesto(1600)).toEqual("Es Anio Biciesto");
    });
    it("deberia determinar si el anio 1700 es viciesto",()=>{
        expect(EsAnioBiciesto(1700)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar si el anio 1800 es viciesto",()=>{
        expect(EsAnioBiciesto(1800)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar si el anio 1900 es viciesto",()=>{
        expect(EsAnioBiciesto(1900)).toEqual("No es Anio Biciesto");
    });
    it("deberia determinar si el anio 2000 es viciesto",()=>{
        expect(EsAnioBiciesto(2000)).toEqual("Es Anio Biciesto");
    });
})