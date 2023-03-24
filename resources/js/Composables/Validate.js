import {debounce} from "lodash";
import {router} from "@inertiajs/vue3";
import {useCrud} from "@/Composables/Crud";

export function useValidateForm() {
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

    const filterNonNumeric = (evt) => {
        console.log('sssss')
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();
        }
        else if(charCode == 46 || charCode == 190){
            evt.preventDefault();
        } else {
            return true;
        }
    }

    const validateForm = (validationRule, form, value, key) => {
        if(validationRule.indexOf('required') >= 0){
            if(!value || value == "")
            {
                form.errors[key] = 'This is a required field';
            }
        }
        if(validationRule.indexOf('number') >= 0){
            if(isNaN(value))
            {
                form.errors[key] = `The ${key} must be a number`;
            }
        }

    }

    return {
        validateEmail,
        filterNonNumeric,
        validateForm
    }
}
