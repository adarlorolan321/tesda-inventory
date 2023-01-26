<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StorePaymentRequest;
use App\Http\Requests\Admin\UpdatePaymentRequest;
use App\Http\Resources\PaymentResource;
use App\Models\Organisation;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $organisationTableName = app(Organisation::class)->getTable();
        $paymentTableName = app(Payment::class)->getTable();

        return DB::table('payments')
            ->where(function ($query) use ($request, $organisationTableName, $paymentTableName) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use ($s) {
                    $query->where('payments.status', '=', $s)
                        ->orWhere('payments.amount', 'LIKE', '%' . $s . '%')
                        ->orWhere('payments.description', 'LIKE', '%' . $s . '%')
                        ->orWhere(DB::raw('date_format(payments.amount, "%d/%c/%Y")'), 'LIKE', '%' . $s . '%')
                        ->orWhere(DB::raw('date_format(payments.process_date, "%d/%c/%Y")'), 'LIKE', '%' . $s . '%')
                        ->orWhere(DB::raw('case when payments.refund = 0 then "false" else "true" end'), 'LIKE', '%' . $s . '%') // might change as requirements gets clear
                        ->orWhere('payments.refund_amount', 'LIKE', '%' . $s . '%')
                        ->orWhere('payments.refund_reason', 'LIKE', '%' . $s . '%')
                        ->orWhere('payments.credits_used', 'LIKE', '%' . $s . '%')
                        ->orWhere('payments.transaction_id', 'LIKE', '%' . $s . '%')

                        ->orWhere(DB::raw('concat(processor.first_name, " ", processor.last_name)'), 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('concat(user.first_name, " ", user.last_name)'), 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('concat(refunder.first_name, " ", refunder.last_name)'), 'like', '%' . $s . '%');
                });
            })
            ->leftJoin('users as processor', $paymentTableName . '.process_by', '=', 'processor.id')
            ->leftJoin('users as user', $paymentTableName . '.user_id', '=', 'user.id')
            ->leftJoin('users as refunder', $paymentTableName . '.refund_by', '=', 'refunder.id')
            ->leftJoin($organisationTableName, $paymentTableName . '.organisation_id', '=', $organisationTableName . '.id')
            ->select([
                $paymentTableName . '.*',
                DB::raw('concat(processor.first_name, " ", processor.last_name) as processor'),
                DB::raw('concat(user.first_name, " ", user.last_name) as user'),
                DB::raw('concat(refunder.first_name, " ", refunder.last_name) as refunder'),
                $organisationTableName . '.name as organisation',
            ])
            ->orderBy('user.name')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentRequest $request)
    {
        \abort_if(!auth()->user()->can('store payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $payment = Payment::create($request->validated());

        return (new PaymentResource($payment))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        \abort_if(!auth()->user()->can('show payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new PaymentResource($payment->load(['processor', 'refunder', 'user', 'organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        \abort_if(!auth()->user()->can('update payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $payment->update($request->validated());

        return (new PaymentResource($payment))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        \abort_if(!auth()->user()->can('destroy payment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $payment->delete();

        return response()->json(['message' => 'payment deleted'], 204);
    }
}
