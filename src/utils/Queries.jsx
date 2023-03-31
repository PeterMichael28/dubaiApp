


export const url = "https://api.arabianlens.com/activity-types"
export const url2 = "https://api.arabianlens.com/activities"


export  const fetchData = async (url) => {
    return await fetch(url).then(
     (res) => res.json()
    );
   };


