createPage();

		function createPage(){
			alert(100);
			row_div=document.createElement("div");
			row_div.setAttribute("class", "row");
			col_div=document.createElement("div");
			col_div.setAttribute("class", "col-md-2");
			sidebar_ele=document.createElement("nav");
			sidebar_ele.setAttribute("id", "sidebar");
			sidebar_head=document.createElement("div");
			sidebar_head.setAttribute("class", "sidebar-header");
			user_div=document.createElement("div");
			user_div.setAttribute("id", "user");
			user_div.setAttribute("class", "col-md-offset-2");
			
			img_div=document.createElement("div");
			img_div.setAttribute("id", "user_image");
			img_div.setAttribute("class", "col-md-offset-3");
			img_div.setAttribute("style", "font-size:5em");
			
			//sidebar header
				//user
			user_ele=document.createElement("h3");
			user_name=document.createTextNode(data["sidebar"]["header"][0]["user"]);
			
			user_ele.appendChild(user_name);
			//document.getElementById("user").appendChild(user_ele);
			user_div.appendChild(user_ele);//new

				//user image
			user_img_ele=document.createElement("i");
			user_img_class=document.createAttribute("class");
			user_img_class.value=data["sidebar"]["header"][0]["image"];
			user_img_ele.setAttributeNode(user_img_class);
			img_div.appendChild(user_img_ele);

			sidebar_head.appendChild(user_div);
			sidebar_head.appendChild(img_div);
			sidebar_ele.appendChild(sidebar_head);

			menu_div=document.createElement("div");
			menu_div.setAttribute("id", "menu");
	
			//sidebar menu
			head_list=document.createElement("ul");
			head_list_class=document.createAttribute("class");
			head_list.setAttributeNode(head_list_class);
			head_list.setAttribute("class", "list-unstyled components");
			head_items=data["sidebar"]["menu"]; //new
		
			for(i=0; i<head_items.length; i++){
				head_item=document.createElement("li");
				head_item_a=document.createElement("a");
				head_item_a.setAttribute("data-toggle", "collapse");
				head_item_a.setAttribute("data-target", "#"+i);
				head_item_a.setAttribute("aria-expanded", "false");
				head_item_b=document.createElement("b");
				head_item_name=document.createTextNode(Object.keys(data["sidebar"]["menu"][i]));
				head_item_b.appendChild(head_item_name);
				head_item_a.appendChild(head_item_b);
				head_item.appendChild(head_item_a);
				
				sub_list=document.createElement("ul");
				sub_list_class=document.createAttribute("class");
				sub_list.setAttributeNode(sub_list_class);
				sub_list.setAttribute("class", "collapse list-unstyled");
				sub_list.setAttribute("id", i);
				sub_items=data["sidebar"]["menu"][i][head_item_name.data];
				for(j=0; j<sub_items.length; j++){
					sub_item=document.createElement("li");
					sub_item_a=document.createElement("a");
					sub_item_a.setAttribute("href", "#");
					sub_item_name=document.createTextNode(data["sidebar"]["menu"][i][head_item_name.data][j]);
					sub_item_a.appendChild(sub_item_name);
					sub_item.appendChild(sub_item_a);
					sub_list.appendChild(sub_item);
				}//for
				head_item.appendChild(sub_list);
				head_list.appendChild(head_item);
			}//for
			menu_div.appendChild(head_list);
			sidebar_ele.appendChild(menu_div);
			col_div.appendChild(sidebar_ele);
			row_div.appendChild(col_div);

			document.body.appendChild(row_div);
		}//createPage()
		/*
		$.getJSON("accounting.json", {},function(database) {
				data=database;
			});

			$(document).ready(function () {

				$("#chart").click(function (e) {
					document.getElementById("realContent").innerHTML='<object type="text/html" data="dtable/dtable.html" style="height:600px; width:100%;" ></object>';
				});

				$("#journal").click(function (e) {
					document.getElementById("realContent").innerHTML='<object class="col-md-12" type="text/html" data="journal/journal.html" style="height:500px;"></object>';
				});
			});
			*/