import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = 'abubakaribrahim'

     //Asynchronous Action Creator
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, tweets }) => {
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}