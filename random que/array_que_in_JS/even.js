<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var n=prompt ("enter limit...");
        n=parseInt(n);
        var a= [];
      console.log(n)
        for ( var i=0;i<n;i++)
        {

            a.push(prompt("enter number"));
            console.log(a[i])
        }
        let s=0;
        
        document.write(a.sort());
   
        </script>
</body>
</html>