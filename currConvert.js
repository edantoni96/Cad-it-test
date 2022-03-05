

export default async function currConv(){
    const url = "https://free.currconv.com/api/v7/convert?q=IDR_USD&compact=ultra&apiKey=c791ebfae66b3c2ed425"
    const response = await fetch(url).then(response => 
        {
            console.log(response);
            return response
        }).catch(error => console.log('ERROR', error));
    const d = await response.json();
    const rate = d.IDR_USD;
    return rate
}