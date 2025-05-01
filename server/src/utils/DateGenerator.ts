import moment  from "moment-timezone";


const DateGenerator = () =>{

    const currentDate = moment().tz('Africa/Nairobi').format('YYYY-MM-DD HH:mm:ss');

    return currentDate;

}


export { DateGenerator }