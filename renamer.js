//how to use: select objects that you want to rename, then run script
//note - new name may not display until you unselect objects
 
var docRef = activeDocument;
 
 
for (var i=0; i < docRef.pageItems.length; i++)
{
       if (docRef.pageItems[i].selected == true)
 
var newNum=i+1;      
       {
               docRef.pageItems[i].name = "id"+newNum;;
       }
}