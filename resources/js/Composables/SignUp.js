import { useForm } from "@inertiajs/vue3";

export function useSignup() {
    const form = useForm({
        name:null,
        email: null,
        password: null,
        password_confirmation: null,
    });

    const signUp = async () => {
        form.post(route("register"), {
            onSuccess: (data) => {},
        });
    };

    return {
        form,
        
        signUp,
    };
}
