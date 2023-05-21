<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Tesda</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
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
            overflow: auto; /* Clear floats */
            margin-bottom: 20px;
        }

        .header .logo-left {
            text-align: center;
        }

        .footer {
            margin-top: 50px;
            text-align: left;
        }

        .footer p {
            margin: 5px 0;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="logo-left">
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('img/1678411.png'))) }}" alt="Logo Left" height="120">
        </div>
    </div>
    <h1>Stock History Report</h1>
    <table>
        <thead>
            <tr>
                <th>Label</th>
                <th>Stock By</th>
                <th>Date Stocked</th>
                <th>Quantity</th>
                <th>Unit Price</th>
            </tr>
        </thead>
        @foreach($data as $item)
        <tr>
            <td>{{ $item['supply']['label'] }}</td>
            <td>{{ $item['user']['name'] }}</td>
            <td>{{ (new DateTime($item['created_at']))->format('d/m/Y') }}</td>
            <td>{{ $item['quantity']}}</td>
            <td>{{ $item['unit_price']}}</td>
        </tr>
        @endforeach
    </table>

    <div class="footer">
        <p>Received By: _________________________</p>
        <p>Issued By: ____________________________</p>
    </div>
</body>

</html>




