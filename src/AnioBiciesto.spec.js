import EsAnioBiciesto from "./AnioBiciesto";
describe("Anio Biciesto",()=>{
    it("deberia determinar si el anio ingresado es viciesto",()=>{
        expect(EsAnioBiciesto(1700)).toEqual("Es Anio Biciesto");
    });
})