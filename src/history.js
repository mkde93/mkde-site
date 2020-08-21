import { createBrowserHistory } from 'history'

export default createBrowserHistory({
    basename: '', // The base URL of the app (see below)
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
})