var carController = function($scope){
    $scope.data = [
        {
            id:1000,
            name:'iphone6s',
            count:3,
            price:5400
        },
         {
            id:32123,
            name:'iphone6s plus',
            count:4,
            price:6400
        },
        {
            id:123123,
            name:'imac',
            count:1,
            price:13400
        },
        {
            id:24534,
            name:'ipad',
            count:6,
            price:1400
        },
    ];


    $scope.carModule = {
        totalCount : function(){
            var count = 0;
            angular.forEach($scope.data, function(item, key){
                count += item.count;
            });
            return count;
        },
        findIndex : function(id){
            var index = -1;
            angular.forEach($scope.data, function(item, key){
                if(item.id == id){
                    index = key;
                    return;
                }
            });
            return index;
        },
        add : function(id){
            var index = this.findIndex(id);
            $scope.data[index].count++;
        },
        reduce : function(id){
            var index = this.findIndex(id);
            $scope.data[index].count--;
            if( $scope.data[index].count<0){
                $scope.data[index].count = 0;
                var dele = confirm("是否确认删除所选商品");
                if(dele){
                    this.remove(id);
                }
            }
        },
        remove : function(id){
            var index = this.findIndex(id);
            if(index !== -1){
                $scope.data.splice(index,1);
            }
        },
        clearData : function(){
            $scope.data = [];
        },
    };


    $scope.priceModule = {
        totalPrice : function(){
            var total = 0;
            angular.forEach($scope.data, function(item, key){
                total += item.count*item.price;
            });
            return total;
        }
    }
    
   /* // 监听数量 如果小于 1 则让用户判断是否要删除产品
    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function(item,key){
            if(item.quantity < 1){
                var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
    },true);*/

}

