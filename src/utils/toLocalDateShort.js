export default function toLocalDateShort(date){
    return new Date(date).toLocaleDateString("en-CA", {});
}