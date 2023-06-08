<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Tesda</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            margin: 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table th,
        table td {
            border: 1px solid #000;
            padding: 5px;
        }

        table th {
            background-color: #f2f2f2;
        }

        h1 {
            text-align: center;
            margin-bottom: 50px;
        }

        .header {
            width: 100%;
        }

        .logo-left,
        .logo-right {
            width: 25%;
            text-align: center;
        }

        .center {
            width: 50%;
            text-align: center;
        }

        .footer {
            margin-top: 50px;
            text-align: left;
        }

        .footer p {
            margin: 5px 0;
        }

        .title {
            text-align: center;
            font-size: 25px;
            font-weight: 800;
        }

        .center-title {
            margin-top: 20px;
            text-align: center;
        }

        .header-title {
            font-size: 16px;
            color: #094aff;
            font-weight: 800;
        }

        .mimaropa {
            font-size: 16px;
            color: #ff0403;
            font-weight: 800;
        }

        .m-0 {
            margin: 0;
        }

        .border-none td {
            border: none;

        }

        .date {
            font-weight: 800;
            margin-left: 20px;
        }

        .text-center {
            text-align: center;
        }

        .height-50 {
            padding-bottom: 50px;


        }

        .text-left {
            text-align: left;
        }
    </style>
</head>

<body>

    <h1>Stock Card</h1>
    <div class="header-details ">
        <table class="details border-none">
            <tr>
                <td class="date text-left">Entity Name: TESDA MIMAROPA REGIONAL OFFICE</td>
                <td class="date text-left">Fund Cluster: _________________</td>


            </tr>

        </table>
    </div>
    <table>
        <thead>
            <tr>

                <th colspan="5" class="text-left">Item : </th>

                <th colspan="2" class="text-left">Stock No. : </th>

            </tr>
            <tr>

                <th colspan="5" class="text-left">Description : </th>

                <th colspan="2" class="text-left">Re-order Point : </th>

            </tr>
            <tr>

                

                <th colspan="5" class="text-left">Unit of Measurement :  </th>
                <th colspan="2" class="text-left"></th>

            </tr>

            <tr>
                <th>Date</th>
                <th>Reference
                </th>

                <th>
                    <p>Receipt</p>

                    <p style="border-top: #000 1px solid;">Qty</p>
                </th>
                <th colspan="2">
                    <p>Issue</p>
                    <p style="border-top: #000 1px solid;">Qty</p>
                </th>
                <th>Balance</th>
                <th>No. of Days to Consume</th>
            </tr>
        </thead>
        @foreach($data as $item)
        <tr>
            <td>{{ (new DateTime($item['created_at']))->format('d/m/Y') }}</td>
            <td>{{ $item['supply']['label'] }}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        @endforeach
    </table>

    
</body>

</html>