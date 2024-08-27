import EsAnioBiciesto from "/.AnioBiciesto"

describe("Anio Biciesto",()=>{
    it("deberia determinar si el anio ingresado es viciesto",()=>{
        expect(EsAnioBiciesto(2000).toEqual("Es Anio Biciesto"));
    });
})