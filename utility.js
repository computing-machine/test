function addAtrribute(ele, attrValList){
    attrList=Object.keys(attrValList);
    var i;
    for(i=0; i<attrList.length; i++)
        ele.setAttribute(attrList[i], attrValList[attrList[i]]);
}//addAttribute()