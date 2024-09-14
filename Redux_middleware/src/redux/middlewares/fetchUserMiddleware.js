import userSlice from "../userSlice"

// i need to feacth the data
// if data is correct need to dipatch

const userActions=userSlice.actions

const fetchUser=(param)=>{
return async (dispatch)=>{
    try{
// attamept to make a network reruest
dispatch(userActions.setLoading())
        const resp= await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
        if(resp.status === 404){
            return dispatch(userActions.notFound())
        }
        const user=await resp.json()
        dispatch(userActions.setUser(user))
    }
    catch(e){
        dispatch(userActions.setError())
    }
}
}

export default fetchUser