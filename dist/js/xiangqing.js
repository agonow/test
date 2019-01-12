


		$.ajax({
			url:`https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=233,266,267`,
			dataType:"jsonp",
			success:function(res){
				
//				console.log(res.block_266)
				let arrRes=res.block_266[0].floorAllocations;
				let str="";
				let n=0;
				for(let i=0;i<arrRes.length;i++){
					str+=`<li>
						<img src="${arrRes[i].img}" alt="" />
						<em>${arrRes[i].name}</em>
					</li>`;
				}
				$("ul").html(str)
				
				$(".btn").on("click",function(){
					if(n>2){
						n=0;
					}
					$.ajax({
						url:`https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=233,266,267`,
						dataType:"jsonp",
						success:function(resMore){
							console.log(resMore)
							
							$(".loading").remove();
							let arrRes2=resMore.block_266[n];
						
							for(let i=0;i<arrRes2.floorAllocations.length;i++){
								str+=`<li>
									<img src="${arrRes2.floorAllocations[i].img}" alt="" />
									<em>${arrRes2.floorAllocations[i].name}</em>
								</li>`;
							}
							$("ul").html(str)
						},
						beforeSend:function(){
							$("body").append(`<div class="loading">
									<div class="box">加载中！！</div>
								</div>`)
						}
					})
					n++;



				})
			}
		})
