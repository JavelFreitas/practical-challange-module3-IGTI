const formatter = Intl.NumberFormat(`pt-BR`, {style:'currency', currency:'BRL'});
export default function formatNumber(number){
    return formatter.format(number);
}