function EsAnioBiciesto(numero)
{
    if(numero%100===0 && numero%400===0)
    {
        return "Es Anio Biciesto";
        
    }
    else
    {
        if(numero%100===0)
        {

            return "No es Anio Biciesto";
        }
    }
    
}

export default EsAnioBiciesto;