//$(function(){
//
//
//		$.ajax({
//			url:`https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=233,266,267`,
//			dataType:"jsonp",
//			success:function(res){
//				console.log(res)
//				console.log(res.block_266)
//				let arrRes=res.block_266[0].floorAllocations;
//				let str="";
//				let n=0;
//				for(let i=0;i<arrRes.length;i++){
//					str+=`<li>
//						<img src="${arrRes[i].img}" alt="" />
//						<em>${arrRes[i].name}</em>
//					</li>`;
//				}
//				$("ul").html(str)
//				$(".btn").on("click","em",function(){	
//					
//				})
//			}
//		})
//		
//		
//		
//	})