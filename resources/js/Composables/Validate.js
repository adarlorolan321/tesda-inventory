import {debounce} from "lodash";
import {router} from "@inertiajs/vue3";

export function validateForm() {
    const validateEmail = debounce((email) => {
        router.get(
            route(`user.validate`, 'email'),
            {email: email},
            {
                onSuccess: (response) => {
                    console.log(response)
                }
            }
        )
    }, 500);

    return {
        validateEmail
    }
}
