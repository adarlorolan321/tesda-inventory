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
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .header .title {
            font-size: 24px;
            font-weight: bold;
        }

        .header .date {
            text-align: right;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="title">Tesda</div>
        <div class="date">Date: {{ date('F d, Y') }}</div>
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
</body>

</html>