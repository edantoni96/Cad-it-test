async function loadData(url, path, table) {
    //const tabHead = table.querySelector("thead");
    const tabBody = table.querySelector("tbody");
    const response = await fetch(url); //.then(result => result.json()).then((output) => {console.log(output)});
    const res_json = await response.json();
    const salary = await fetch(path);
    const {array} = await salary.json();
    const Sdata = [];
    tabBody.innerHTML = "";
    for (const salaryData of array) {
        var i = salaryData.id - 1;
        Sdata[i] = salaryData.salaryInIDR;
    }
    for (const object of res_json) {
        //console.log(object);
        const {id,name,username,email,address,phone} = object;
        const addressStr = address.street + ', ' + address.suite + ', '+address.city + ', '+ address.zipcode ;
        //console.log(Sdata[id-1]);
        var dataElement = 
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${addressStr}</td>
            <td>${phone}</td>
            <td>${Sdata[id-1]}</td>
        </tr>`;
        tabBody.innerHTML += dataElement;
    }
}

loadData("http://jsonplaceholder.typicode.com/users","./salary_data.json", document.querySelector("table"));