<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div id="app">
        <h1>Hello, <span>SCSS!</span></h1>
        <div class="bg-green-700 text-white">Hello, Vite!</div>
        <example-component name="Andre"></example-component>
        <div id="example-react" data-name="Andre"></div>
    </div>
</body>

</html>
