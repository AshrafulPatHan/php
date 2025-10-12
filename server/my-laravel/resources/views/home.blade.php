<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <!-- link css -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <h1 class="text-3xl font-bold text-amber-500">Home</h1>

    <br>
    <!-- form input -->
    <form action="{{ url('fromuser') }}" method="post">
        @csrf
        <p>type your name</p>
        <input type="text" placeholder="Type your name" name="fullname" id="fullname">
        <br>
        <button type="submit">submit</button>
    </form>

    <!-- link javascript -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>