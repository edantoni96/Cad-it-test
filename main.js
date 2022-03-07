import currConv from './currConvert.js'

async function loadData(url, path, table) {
    const rate = await currConv();
    const tabBody = table.querySelector("tbody");
    const response = await fetch(url).then(response => {return response}).catch(error => console.log('ERROR'));
    const res_json = await response.json();
    const salary = await fetch(path);
    const {array} = await salary.json();
    const Sdata = [];
    tabBody.innerHTML = "";
    for (const salaryData of array) {
        var i = salaryData.id - 1;
        const data = {};
        data.idr = Math.round(salaryData.salaryInIDR *100)/100;
        data.usd = Math.round(data.idr * rate * 100)/100;
        Sdata[i] = data;
    }
    for (const object of res_json) {
        const {id,name,username,email,address,phone} = object;
        const addressStr = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}` ;
        const us = Intl.NumberFormat('en-US',{
            style: "currency",
            currency: "USD"
        });
        const idr = Intl.NumberFormat('id-ID',{
            style: "currency",
            currency: "IDR"
        });
        var dataElement = 
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${addressStr}</td>
            <td>${phone}</td>
            <td>${idr.format(Sdata[id-1].idr)}</td>
            <td>${us.format(Sdata[id-1].usd)}</td>
        </tr>`;
        tabBody.innerHTML += dataElement;
    }
}

loadData("http://jsonplaceholder.typicode.com/users","./salary_data.json", document.querySelector("table"));