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
    </style>
</head>

<body>
   
    <table class="header border-none">
        <tr>
            <td class="logo-left">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('img/tesda_logo.png'))) }}" alt="Logo Left" height="120">
            </td>
            <td class="center">
                <div class="center-title">
                    <p class="header-title m-0">PROPERTY ACKNOWLEDGMENT RECEIPT</p>
                     <p class="m-0 date">Technical Education and Skills Development Authority</p>
                    <p class="mimaropa m-0">Region IV-B [MIMAROPA]</p>
                    <!-- <p class="m-0">Luna Bldg. III, Gov. Infantado St. , Calapan City, Oriental Mindoro</p>
                    <p class="m-0">Telefax Nos.: (043) 288-1717</p> -->
                </div>
            </td>
            <td class="logo-right">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('img/r4b_logo.png'))) }}" alt="Logo Left" height="120">
            </td>
        </tr>
    </table>
    <div class="header-details ">
        <table class="details border-none">
            <tr>
                <td class="date">Entity Name: TESDA MIMAROPA REGIONAL OFFICE</td>

            </tr>
            <tr>
                <td class="date">FUND CLUSTER:</td>
                <td class="date">PAR No.: </td>
            </tr>
        </table>
    </div>

    <table>
        <thead>
            <tr>

                <th>Qty.</th>

                <th>Description</th>
                <th>Property No.</th>
                <th>Date Acq'd</th>
                <th>Amount</th>
            </tr>
        </thead>
        @php
        $totalAmount = 0; // Variable to store the total amount
        @endphp
        @foreach($data as $item)
        <tr>

            <td>{{ $item['stocks'] }}</td>
            <td>{{ $item['description'] }}</td>
            <td>{{ $item['item_code'] }}</td>
            <td>{{ $item['date_purchased'] }}</td>
            <td>{{ $item['stocks'] * $item['unit_price'] }}</td>




        </tr>

        @php
        $totalAmount += $item['stocks'] * $item['unit_price']; // Accumulate the total amount
        @endphp
        @endforeach


        <tr>
            <td colspan="4" class="text-center">Total Amount</td>
            <td>{{ $totalAmount}}</td>





        </tr>


        <!-- table body content goes here -->
    </table>
    <table>
        <tr>
            <td class="date height-50">Received by</td>
            <td class="date height-50">Issued by</td>
        </tr>
        <tr>
            <td class=" height-70 text-center"><p class="height-50">Signature over printed name </p>
        <p>Position/Office</p>
        <p>Date</p>
        </td>
            <td class=" height-70 text-center"><p class="height-50">Signature over printed name</p>
            <p>Position/Office</p>
            <p>Date</p></td>

        </tr>
    </table>
    

</body>

</html>