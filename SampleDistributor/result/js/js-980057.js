
	var arr = [1,2,3,1,5,1,1,9,2,3,4,5,6,7,8,4,1,3,4,5];
	//第一种方法
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i] === arr[j]){
				arr.splice(j,1);
				j--;
			}
		}
	}
	console.log(arr);

	//第二种方法
	var obj = {};
	var arr1 = [];
	for(var i=0;i<arr.length;i++){
		obj[arr[i]] ={
			value: arr[i],
			curIndex:i
		}
		
	}
	
	console.log(obj)


	//第三种方法  最少代码！！！
	console.log(arr.filter(function(elem, pos,self){return self.indexOf(elem)== pos;}))

	//第四种方法
	console.log(arr.map(function(value, index,self){
						if (self.indexOf(value)== index){
								return value;
						}
				}))

	//第五种方法
	function uniq(a) { 
		            var prims = {"boolean":{}, "number":{}, "string":{}}, objs = []; 
		            return a.filter(function(item) { 
		                var type = typeof item;
		                if(type in prims) 
		                    return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true); 
		                else 
		                    return objs.indexOf(item) >= 0 ? false : objs.push(item); 
		            }); 
		    }
		    uniq(arr);
