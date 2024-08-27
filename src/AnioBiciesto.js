function EsAnioBiciesto(numero)
{
    if(numero%100===0)
    {
        if(numero%400===0)
        {
            return "Es Anio Biciesto";
        }
        else
        {
            return "No es Anio Biciesto";
    
        }
    }
    
}

export default EsAnioBiciesto;