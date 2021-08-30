</script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function(){
            $('#demo-1').aCollapTable({
                startCollapsed: true,
                addColumn: false,
                plusButton: '<i class="glyphicon glyphicon-plus"></i> ', 
                minusButton: '<i class="glyphicon glyphicon-minus"></i> ' 
            });

            $('.table-demo-2').aCollapTable({
                startCollapsed: true,
                addColumn: true,
                plusButton: '<i class="glyphicon glyphicon-plus"></i> ', 
                minusButton: '<i class="glyphicon glyphicon-minus"></i> ' 
            });
        });
    