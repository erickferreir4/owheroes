export async function useFetch(url, method, body) {
    if(method == 'GET') {
        let response = await fetch(url)

        return response.json()
    }
    else if(method == 'POST') {
        let response = await fetch(url, {
            method: method,
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(body)
        })

        return response.json()
    }

    return null
}
