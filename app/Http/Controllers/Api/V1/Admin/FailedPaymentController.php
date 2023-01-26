<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreFailedPaymentResource;
use App\Http\Requests\Admin\UpdateFailedPaymentResource;
use App\Http\Requests\Admin\UpdatePaymentRequest;
use App\Http\Resources\FailedPaymentResource;
use App\Models\FailedPayment;
use App\Models\Organisation;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class FailedPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access failed_payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $failedPaymentsTableName = app(FailedPayment::class)->getTable();
        $paymentsTableName = app(Payment::class)->getTable();
        $organisationsTableName = app(Organisation::class)->getTable();

        return DB::table('failed_payments')
            ->where(function ($query) use (
                $request,
                $failedPaymentsTableName,
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $failedPaymentsTableName,
                ) {
                    $query->where($failedPaymentsTableName . '.status', '=', $s)
                        ->orWhere($failedPaymentsTableName . '.amount', 'like', '%' . $s . '%')
                        ->orWhere(
                            DB::raw('date_format(' .
                                $failedPaymentsTableName . '.attempt_date, "%d/$c/%Y")'),
                            'like',
                            '%' . $s . '%'
                        )
                        ->orWhere('payment.transaction_id', 'like', '%' . $s . '%')
                        ->orWhere('organisation.name', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('concat(user.first_name, " ", user.last_name)'), 'like', '%' . $s . '%');
                });
            })
            ->leftJoin($paymentsTableName . ' as payment', $failedPaymentsTableName . '.payment_id', '=', 'payment.id')
            ->leftJoin($organisationsTableName . ' as organisation', $failedPaymentsTableName . '.organisation_id', '=', 'organisation.id')
            ->leftJoin('users as user', $failedPaymentsTableName . '.user_id', '=', 'user.id')
            ->select([
                $failedPaymentsTableName . '.*',
                'payment.transaction_id as payment_transaction_id',
                'organisation.name as organisation',
                DB::raw('concat(user.first_name, " ", user.last_name) as user'),
            ])
            ->orderBy($failedPaymentsTableName . '.created_at', 'DESC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFailedPaymentResource $request)
    {
        \abort_if(!auth()->user()->can('store failed_payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $failed_payment = FailedPayment::create($request->validated());

        return (new FailedPaymentResource($failed_payment))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(FailedPayment $failed_payment)
    {
        \abort_if(!auth()->user()->can('show failed_payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        return (new FailedPaymentResource($failed_payment->load(['payment', 'user', 'organisation'])));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFailedPaymentResource $request, FailedPayment $failed_payment)
    {
        \abort_if(!auth()->user()->can('update failed_payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $failed_payment->update($request->validated());

        return (new FailedPaymentResource($failed_payment))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(FailedPayment $failed_payment)
    {
        \abort_if(!auth()->user()->can('destroy failed_payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $failed_payment->delete();

        return response()->json(['message' => 'failed payments deleted'], 204);
    }
}
