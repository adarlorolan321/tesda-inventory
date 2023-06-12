import { useForm, router, usePage } from "@inertiajs/vue3";
import axios from 'axios'
import { debounce } from "lodash";
import { ref, computed, onMounted } from "vue";
import toastr from "toastr";
import { data, error } from "jquery";
// import Swal from "sweetalert2";

export function useCrud(
    formObject = {},
    routeName,
    printRoute,
    routeIndex = null,
    redirect = null
) {
    const modalOff = ref(false);

    const form = useForm(formObject);
    const formState = ref("create");
    const paginatedData = computed(() => usePage().props.data);
    const serverParams = computed(() => usePage().props.params);
    const isLoadingComponents = ref(false);
    const offCanvas = ref(null);

    const serverQuery = ref({
        perPage: 50,
        query: null,
        page: 1,
        query_date_from: null,
        query_date_to: null
    });
    const getSuppliers = async () => {
        try {
            const response = await axios.get('/user/suppliers/')
            return response.data
        } catch (error) {
            console.error(error)
            return []
        }
    }
    onMounted(() => {
        getSuppliers().then((data) => {
            console.log(data)
        })
        if (serverParams.value) {
            if (serverParams.value.page) {
                serverQuery.value.page = serverParams.value.page;
            }
            if (serverParams.value.perPage) {
                serverQuery.value.perPage = serverParams.value.perPage;
            }
            if (serverParams.value.query) {
                serverQuery.value.query = serverParams.value.query;
            }
            if (serverParams.value.sort) {
                serverQuery.value.sort = serverParams.value.sort;
            }
            if (serverParams.value.order) {
                serverQuery.value.order = serverParams.value.order;
            }
            if (serverParams.value.role) {
                serverQuery.value.role = serverParams.value.role;
            }

            if (serverParams.value.coach_filter) {
                serverQuery.value.coach_filter =
                    serverParams.value.coach_filter;
            }
            if (serverParams.value.service_filter) {
                serverQuery.value.service_filter =
                    serverParams.value.service_filter;
            }
            if (serverParams.value.query_date_from) {
                serverQuery.value.query_date_from =
                    serverParams.value.query_date_from;
            }
            if (serverParams.value.query_date_to) {
                serverQuery.value.query_date_to =
                    serverParams.value.query_date_to;
            }
        }
    });

    onMounted(() => {
        var myOffcanvas = document.getElementById("offCanvasForm");
        if (myOffcanvas) {
            offCanvas.value = new bootstrap.Offcanvas(myOffcanvas);
        }
    });

    const hideOffCanvas = () => {
        if (offCanvas.value) {
            offCanvas.value.hide();
        }
    };
    const showOffCanvas = () => {
        if (offCanvas.value) {
            offCanvas.value.toggle();
        }
    };

    const handleServerQuery = (key, value) => {
        if (key == "perPage" || key == "query") {
            serverQuery.value["page"] = 1;
        }
        if (key == "sort") {
            if (!serverQuery.value.sort) {
                serverQuery.value["sort"] = value;
                serverQuery.value["order"] = "asc";
            } else {
                if (serverQuery.value.sort == value) {
                    if (serverQuery.value["order"] == "asc") {
                        serverQuery.value["sort"] = value;
                        serverQuery.value["order"] = "desc";
                    } else {
                        serverQuery.value["sort"] = null;
                        serverQuery.value["order"] = null;
                    }
                } else {
                    serverQuery.value["sort"] = value;
                    serverQuery.value["order"] = "asc";
                }
            }
        } else {
            serverQuery.value[key] = value;
        }
        handleDebouncedServerQuery();
    };

    const handleDebouncedServerQuery = debounce(() => {
        let routeValue = route(`${routeName}.index`, serverQuery.value);

        if (routeIndex) {
            routeValue = route(routeIndex.routeName, {
                id: routeIndex.routeId,

            });
        }

        let params = {};

        for (const key in serverQuery.value) {
            if (serverQuery.value[key] && serverQuery.value[key] != "") {
                params[key] = serverQuery.value[key];
            }
        }

        router.get(routeValue, params, {
            preserveState: true,
            preventScroll: true,
            only: ["data", "params", "props"],

        });

    }, 500);


    // Promise
    const createPromise = async () => {
        form.clearErrors();
        form.post(route(`${routeName}.store`), {
            preserveState: true,
            preventScroll: true,
            only: ["data", "params", "errors"],
            onSuccess: () => {
                toastr.success("Record saved");
                if (redirect) {
                    form.reset();
                    router.visit(route(redirect.redirectTo, redirect.id));
                } else {
                    hideOffCanvas();
                }
            },
        });
    };
    const updateStocksPromise = async () => {
        form.clearErrors();
        console.log(form.id)
        form.patch(route(`${routeName}.addStocks`, form.id), {
            preserveState: true,
            preventScroll: true,
            only: ["data", "params", "errors", "auth"],
            onSuccess: () => {
                toastr.info("Record updated");
                modalOff.value = false;
                if (redirect) {
                    router.visit(route(redirect.redirectTo, redirect.id));
                } else {
                    form.reset();
                    hideOffCanvas();
                }
            },
            onError: (error) => {
                toastr.error(`An error occurred: ${error.unit_price}`);
            }
        });
    };
    const updatePromise = async () => {
        form.clearErrors();

        form.patch(route(`${routeName}.update`, form.id), {
            preserveState: true,
            preventScroll: true,
            only: ["data", "params", "errors", "auth"],
            onSuccess: () => {
                toastr.info("Record updated");

                if (redirect) {
                    router.visit(route(redirect.redirectTo, redirect.id));
                } else {
                    form.reset();
                    hideOffCanvas();
                }
            },
        });
    };
    const print = async () => {
        console.log('print');
        // const print = () => {
        axios
            .post(
                `/${printRoute}`,
                {
                    paginatedData: usePage().props.data.data,
                },
                {
                    responseType: "blob", // set response type to blob
                }
            )
            .then((response) => {
                // Create a URL for the blob object
                const url = URL.createObjectURL(
                    new Blob([response.data], { type: "application/pdf" })
                );

                // Open the URL in a new tab
                window.open(url, "_blank");

                // Release the URL object when it's no longer needed
                setTimeout(() => URL.revokeObjectURL(url), 0);
            })
            .catch((error) => {
                console.log(error);
            });

    };
    const deletePromise = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel it!",
            customClass: {
                confirmButton: "btn btn-primary me-3",
                cancelButton: "btn btn-label-danger",
            },
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                router.delete(route(`${routeName}.destroy`, id), {
                    preserveState: true,
                    preventScroll: true,
                    only: ["data", "params"],
                    onSuccess: () => {
                        toastr.error("Record deleted");
                    },
                });
            }
        });
    };

    // Actions
    const handleCreate = () => {
        resetForm();
        router.reload([]);

        isLoadingComponents.value = false;
        setTimeout(() => {
            isLoadingComponents.value = true;
        }, 1000);
        formState.value = "create";
    };

    const handleEditStocks = (item) => {
        item = JSON.parse(JSON.stringify(item));
        form.reset();
        form.clearErrors();

        for (const key in item) {
            const itemValue = item[key];

            if (key === "stocks" || key === "unit_price") {
                form[key] = 0; // Set the value to 0
            } else {
                form[key] = itemValue; // Use the original value
            }
        }

        isLoadingComponents.value = false;
        setTimeout(() => {
            isLoadingComponents.value = true;
        }, 1000);
    };

    const handleEdit = (item) => {
        item = JSON.parse(JSON.stringify(item));
        form.reset();
        form.clearErrors();

        for (const key in item) {
            const itemValue = item[key];
            form[key] = itemValue;
        }
        formState.value = "update";
        showOffCanvas();

        isLoadingComponents.value = false;
        setTimeout(() => {
            isLoadingComponents.value = true;
        }, 1000);
    };

    const resetForm = () => {
        form.reset();
        form.clearErrors();
    };

    return {
        paginatedData,
        isLoadingComponents,
        form,
        handleEditStocks,
        createPromise,
        updatePromise,
        deletePromise,
        handleCreate,
        handleEdit,
        serverQuery,
        handleServerQuery,
        formState,
        print,
        updateStocksPromise,
        getSuppliers,

    };
}
