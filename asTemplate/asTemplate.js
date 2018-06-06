		function createPage(data){
			//create a container for page content
			container=document.createElement("div");
			container.setAttribute("class", "container-fluid full_height");

			//create a singel major row
			major_row=document.createElement("div");
			major_row.setAttribute("class", "row full_height");

			//partition row for a sidebar
			sidebar_space=document.createElement("div");
			sidebar_space.setAttribute("class", "col-md-3 full_height");

			//create the sidebar
			sidebar_ele=document.createElement("nav");
			sidebar_ele.setAttribute("id", "sidebar");
			sidebar_ele.setAttribute("class", "full_height");
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
			head_list.setAttribute("id", "head_list");
			head_list_class=document.createAttribute("class");
			head_list.setAttributeNode(head_list_class);
			head_list.setAttribute("class", "list-unstyled components");
			head_items=data["sidebar"]["menu"]; //new
		
			for(i=0; i<head_items.length; i++){
				head_item=document.createElement("li");
				head_item_a=document.createElement("a");
				head_item_a.setAttribute("data-toggle", "collapse");
				head_item_a.setAttribute("data-target", "#options"+i);
				head_item_a.setAttribute("aria-expanded", "false");
				head_item_a.addEventListener("click", closeHeadListItems);
				head_item_b=document.createElement("b");
				head_item_name=document.createTextNode(Object.keys(data["sidebar"]["menu"][i]));
				head_item_b.appendChild(head_item_name);
				head_item_a.appendChild(head_item_b);
				head_item.appendChild(head_item_a);
				
				sub_list=document.createElement("ul");
				sub_list_class=document.createAttribute("class");
				sub_list.setAttributeNode(sub_list_class);
				sub_list.setAttribute("class", "collapse list-unstyled");
				sub_list.setAttribute("id", "options"+i);
				sub_items=data["sidebar"]["menu"][i][head_item_name.data];
				for(j=0; j<sub_items.length; j++){
					sub_item=document.createElement("li");
					sub_item_a=document.createElement("a");
					sub_item_a.setAttribute("href", "#");
					//sub_item_a.addEventListener("click", aLinks[i][j]);//added line
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
			sidebar_space.appendChild(sidebar_ele);
			major_row.appendChild(sidebar_space);

			//partition major row for right-side content
			right_side=document.createElement("div");
			right_side.setAttribute("class", "col-md-9");

			//partition right-side content with a row for realContent
			real_cont_row=document.createElement("div");
			real_cont_row.setAttribute("class", "row");

			//give realContent space
			real_cont_space=document.createElement("div");
			real_cont_space.setAttribute("class", "col-md-12");

			//create content dive
			content_div=document.createElement("div");
			content_div.setAttribute("id", "realContent");
			content_div.setAttribute("class", "table-responsive");

			real_cont_space.appendChild(content_div);
			real_cont_row.appendChild(real_cont_space);

			right_side.appendChild(real_cont_row);
			major_row.appendChild(right_side);

			container.appendChild(major_row);
			
			document.body.appendChild(container);
		}//createPage()


		function closeHeadListItems(){
			var selected_option_list=this.getAttribute("data-target");
			var head_item_a=document.querySelectorAll("#head_list>li>a");
			head_item_a.forEach(function(a){
				if(this!=a){
					$(a.getAttribute("data-target")).collapse("hide");
				}//if
			});
			//var i=0;
			//for(i=0;i<head_item_a.length;i++)
		}//function