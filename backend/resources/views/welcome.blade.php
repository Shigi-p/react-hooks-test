<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                margin: 0;
                min-height: 100vh;
                overflow-x: hidden;
                width: 100vw;
            }
        </style>
    </head>
    <body>
    <div>
        <div id="example"></div>
        <script src="{{mix('js/app.js')}}"></script>
    </div>
    </body>
</html>
