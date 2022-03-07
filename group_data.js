const url = "./sensor_data.json";
const jsontxt = "./output/grouped_sensor.json"

export default async function groupData() {
    const RES = await fetch(url);
    const sensor_collection = await RES.json();
    console.log(sensor_collection);
    var grouped_collection = {};
    //const date_group = {};
    const room_group = {}
    //var gd = []

    for (const sensor_data of sensor_collection.array) {
        const room = sensor_data.roomArea;
        if (!room_group[room]) {
            room_group[room] = [];
        }
        room_group[room].push(sensor_data);
        //grouped_collection[room] = sensor_data;
    }

    grouped_collection = room_group;
    for (const key in grouped_collection){
        const date_group = {};
        for (const sensor_data of grouped_collection[key]) {
            const timestamp = new Date(sensor_data.timestamp);
            const date = `${timestamp.getDate()}-${timestamp.getMonth()}`;
            if (!date_group[date]) {
                date_group[date] = [];
            }
            date_group[date].push(sensor_data);
            
            //console.log(sensor_data)
        }
        grouped_collection[key] = date_group;
        //grouped_collection[key] = date_group;
    }
    //const timestamp = new Date(sensor_data.timestamp);
    //const date = `${timestamp.getDate()}-${timestamp.getMonth()}`;
    //if (!date_group[date]) {
    //    date_group[date] = [];
    //}
    //date_group[date].push(sensor_data)
    console.log(grouped_collection);
    //console.log(grouped_collection);
    
}

function nestGroup(array) {

}