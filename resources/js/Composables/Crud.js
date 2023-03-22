import { useForm, router, usePage } from "@inertiajs/vue3";

import { debounce } from 'lodash'
import { ref, computed, onMounted } from 'vue'
import toastr from 'toastr'
import Swal from 'sweetalert2'

export function useCrud(formObject = {}, routeName) {

    const form = useForm(formObject)
    const formState = ref('create');
    const paginatedData = computed(() => usePage().props.data)
    const serverParams = computed(() => usePage().props.params)
    const isLoadingComponents = ref(false);
    const offCanvas = ref(null)

    const serverQuery = ref({
        perPage: 50,
        query: null,
        page: 1
    })

    onMounted(() => {
        if (serverParams.value.page) {
            serverQuery.value.page = serverParams.value.page
        }
        if (serverParams.value.perPage) {
            serverQuery.value.perPage = serverParams.value.perPage
        }
        if (serverParams.value.query) {
            serverQuery.value.query = serverParams.value.query
        }
        if (serverParams.value.sort) {
            serverQuery.value.sort = serverParams.value.sort
        }
        if (serverParams.value.order) {
            serverQuery.value.order = serverParams.value.order
        }
    })

    onMounted(() => {
            var myOffcanvas = document.getElementById('offCanvasForm')
            offCanvas.value = new bootstrap.Offcanvas(myOffcanvas)
        })
        // Promise
    const createPromise = async() => {
        form.clearErrors();
        form.post(route(`${routeName}.store`), {
            onSuccess: () => {
                toastr.success('Record saved')
                router.reload([])
                form.reset();
                offCanvas.value.hide();
            }
        })
    }

    const handleServerQuery = (key, value) => {
        if (key == 'perPage' || key == 'query') {
            serverQuery.value['page'] = 1
        }
        if (key == 'sort') {
            if (!serverQuery.value.sort) {
                serverQuery.value['sort'] = value;
                serverQuery.value['order'] = 'asc'
            } else {
                if (serverQuery.value.sort == value) {
                    if (serverQuery.value['order'] == 'asc') {
                        serverQuery.value['sort'] = value;
                        serverQuery.value['order'] = 'desc'
                    } else {
                        serverQuery.value['sort'] = null;
                        serverQuery.value['order'] = null
                    }
                } else {
                    serverQuery.value['sort'] = value;
                    serverQuery.value['order'] = 'asc'
                }
            }

        } else {
            serverQuery.value[key] = value
        }
        handleDeboundServerQuery();
    }

    const handleDeboundServerQuery = debounce(() => {
        router.get(route(`${routeName}.index`, serverQuery.value), {}, {
            only: [
                'data',
                'params'
            ]
        })
    }, 500);

    const updatePromise = async() => {
        form.clearErrors();
        form.patch(route(`${routeName}.update`, form.id), {
            preserveState: true,
            preventScroll: true,
            onSuccess: () => {
                toastr.success('Record saved')
                router.reload()
                form.reset();
                offCanvas.value.hide();
            }
        })
    }

    const deletePromise = async(id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete it!',
            customClass: {
                confirmButton: 'swal2-confirm',
            },
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                router.delete(route(`${routeName}.destroy`, id), {
                    onSuccess: () => {
                        toastr.success('Record deleted')
                    }
                });
            }
        })
    }

    // Actions
    const handleEdit = (item) => {
        item = JSON.parse(JSON.stringify(item))
        form.reset();
        form.clearErrors()

        for (const key in item) {
            const itemValue = item[key];
            form[key] = itemValue;
        }
        formState.value = "update"
        offCanvas.value.show();


        isLoadingComponents.value = false
        setTimeout(() => {
            isLoadingComponents.value = true
        }, 1000);

    }

    const resetForm = () => {
        form.reset();
        form.clearErrors()
    }

    const handleCreate = () => {
        resetForm()
        router.reload([])

        isLoadingComponents.value = false
        setTimeout(() => {
            isLoadingComponents.value = true
        }, 1000);
        formState.value = "create"
    }


    return {
        paginatedData,
        isLoadingComponents,
        form,
        createPromise,
        updatePromise,
        deletePromise,
        handleCreate,
        handleEdit,
        serverQuery,
        handleServerQuery,
        formState
    };
}