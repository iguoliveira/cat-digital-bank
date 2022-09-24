const URL = "http://localhost:3000/"

export const GET = async (endpoint) => {
    const rawRes = await fetch(URL + endpoint)
    if (!rawRes.ok) {
        throw new Error(rawRes.statusText)
    }else{
        return rawRes.json()
    }
}

export const POST = (endpoint, dataToSend) => {
    fetch(URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
        .then((res) => res.json())
        .then((data) => { return data })
        .catch((err) => console.log(err))
}

export const AUTH = async (dataToSend) => {
    const responseRaw = await fetch(URL + "user/tryLogin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    const res = await responseRaw.json()

    if (res.statusCode == 401) {
        return { ok: false }
    }

    return { ok: true, user: res.user }
}