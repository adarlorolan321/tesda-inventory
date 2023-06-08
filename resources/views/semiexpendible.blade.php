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
    <div class="title">INVENTORY CUSTODIAN SLIP</div>
    <table class="header border-none">
        <tr>
            <td class="logo-left">
                <!-- <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('img/tesda_logo.png'))) }}" alt="Logo Left" height="120"> -->
            </td>
            <td class="center">
                <div class="center-title">
                    <p class="m-0">Republic of the Philippines</p>
                    <p class="header-title m-0">Technical Education and Skills Development Authority</p>
                    <p class="mimaropa m-0">MIMAROPA Regional Office</p>
                    <p class="m-0">2nd Floor, TESDA Building, Dolce Casa, Tawiran, Calapan City</p>
                    <p class="m-0"> Telefax Nos.: (043) 288-9408</p>

                    <!-- <p class="m-0">Luna Bldg. III, Gov. Infantado St. , Calapan City, Oriental Mindoro</p>
                    <p class="m-0">Telefax Nos.: (043) 288-1717</p> -->
                </div>
            </td>
            <td class="logo-right">
                <!-- <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('img/r4b_logo.png'))) }}" alt="Logo Left" height="120"> -->
            </td>
        </tr>
    </table>
    <div class="header-details ">
        <table class="details border-none">
          
            <tr>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date"></td>
                <td class="date">ICS No.: </td>
            </tr>
        </table>
    </div>

    <table>
        <thead>
            <tr>

                <th>Qty.</th>

                <th>Description</th>
                <th>Item No.</th>

                <th>Unit Cost</th>
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

            <td>{{ $item['stocks'] * $item['unit_price'] }}</td>




        </tr>

        @php
        $totalAmount += $item['stocks'] * $item['unit_price']; // Accumulate the total amount
        @endphp
        @endforeach


        <tr>
            <td colspan="3" class="text-center">Total Amount</td>
            <td>{{ $totalAmount}}</td>





        </tr>


        <!-- table body content goes here -->
    </table>
    <table class="border-none">
        <tr>
            <td class="date ">Received by</td>
            <td class="date ">Issued by</td>
        </tr>
        <tr>
            <td class=" height-70 text-center">
            <p  class="m-0" style="padding-top: 20px;">_________________________</p>
                <p class="m-0">Signature over printed name </p>
                <p class="m-0" style="padding-top: 20px;">_________________________</p>
                <p class="m-0">Position</p>
                <p class="m-0" style="padding-top: 20px;">_________________________</p>
                <p class="m-0" >Official Workstation</p>
                <p>Date</p>
            </td>
            <td class=" height-70 text-center">
            <p  class="m-0" style="padding-top: 20px;">_________________________</p>
                <p   class="m-0">Signature over printed name</p>
                <p class="m-0" style="padding-top: 20px;">_________________________</p>
                <p class="m-0">Position</p>
                <p class="m-0" style="padding-top: 20px;">_________________________</p>
                <p class="m-0" >Official Workstation</p>
                <p>Date</p>
            </td>

        </tr>
    </table>


</body>

</html>