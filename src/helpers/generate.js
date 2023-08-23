import dayjs from "dayjs";
const MAX = 1440 * 2;
const generateTimeRange = (timeSlot =40 )=>{
    let ranges = [];
    let currentTime = 0;
    let num_page = MAX / timeSlot;
    let i = 0;
    let startTime = dayjs().minute(0).hour(0);
    let endTime = dayjs().minute(0).hour(0);
    endTime = endTime.add(timeSlot,"minute");
    for(let i =0; i < num_page; i ++){
//        a.add(timeSlot,"minute")
        ranges.push({
            value: `${startTime.format("HH:mm")}-${endTime.format("HH:mm")}`,
            label: `De ${startTime.format("HH:mm")} a ${endTime.format("HH:mm")}`,
        })
        i ++;
        startTime = endTime;
        endTime = endTime.add(timeSlot,"minute");
    }
    return ranges;
}
export default generateTimeRange;