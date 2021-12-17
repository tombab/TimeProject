import data from './data'

 const database: {
    title: string ;
    timeframes: {
        daily: {
            current: number;
            previous: number;
        };
        weekly: {
            current: number;
            previous: number;
        };
        monthly: {
            current: number;
            previous: number;
        };
    };
    image:any
}[] = data;

export default database