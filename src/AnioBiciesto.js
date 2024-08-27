function EsAnioBiciesto(numero)
{
    if(numero%4===0 && numero%100===0)
    {
        return "No es Anio Biciesto";
    }
    else if(numero%4===0)
    {
       return "Es Anio Biciesto";
    }
    
}

export default EsAnioBiciesto;