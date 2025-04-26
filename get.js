
async function fetchX() {
    try {
        const url = "http://localhost:9090/resetPassword?email=twlmed212@gmail.com"
    const response = await fetch(url);
    return await response.json();
    } catch (err) {
        console.log(err);
    }
}

const x = await fetchX()
console.log(x);
