import mainURL from '../module/mainFetchURL'

export default async function useFetchURL(fetchURL) {
    const data = await fetch(
        `${mainURL}${fetchURL}`
    )

    const request = await data.json();
    return request
}

