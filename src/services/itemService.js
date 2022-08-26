const baseUrl = 'https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/'


export const getAllItems = () => {
    return fetch(baseUrl)
        .then(res => res.json())
        .catch(e => console.error(e));
}