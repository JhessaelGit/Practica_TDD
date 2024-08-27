function EsAnioBiciesto(numero)
{
    if(numero%400===0)
    {
        return "Es Anio Biciesto";
    }
    return "No es Anio Biciesto";
}

export default EsAnioBiciesto;