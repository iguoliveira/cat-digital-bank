const URL = "http://localhost:3000/"

export const POST = (dataToSend) => {
    fetch(URL + "user/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}