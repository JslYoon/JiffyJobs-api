import {
    handleNotFound,
	handleSuccess,
	handleServerError,
    handleBadRequest,
    } from "../utils/handler.js";
import { getProviders, getProviderByEmail, deleteProvider, updateProvider } from "./providerController.js";
import { getSeekers, getSeekerByEmail, deleteSeeker, updateSeeker } from "./seekerController.js"


// get user information when called
export const getUserinfo = async(req, res) => {
    const isjobseeker = true
    const isjobprovider = false
    // isjobseeker = boolean from the login database, get the user information.
    try {
        if (isjobseeker === true) {
            const user = await getSeekerByEmail(req, res);
            return handleSuccess(res, user);
        } else if (isjobprovider === true){
            const user = await getProviderByEmail(req, res);

            return handleSuccess(res, user);
        } else {

            return handleNotFound(res, "user not found")
        }
    } catch(error) {
        return handleServerError(res, error)
    }

}

