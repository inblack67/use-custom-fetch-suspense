export default (url: RequestInfo, options: RequestInit | undefined) => {
    return fetch(url, options).then(res => res.json());
}