
 async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/PauloVictordSouza/PauloVictor-Portifolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
 }