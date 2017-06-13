
function syncList(listName,config){
	//////////////////////////////////////////////
	//First, figure out if the list already exists
	//////////////////////////////////////////////


	console.log(config);


	$().SPServices({
		operation: "GetListCollection",
		completefunc: function(xData, status){

			var listExists = false;

			$(xData.responseXML).find('List').each(function(){

				var listTitle = $(this).attr('Title');
				if( listTitle == listName ){
					listExists = true;
					console.log("List Exists!");
				}
			});

			if (listExists) {
				//////////////////////////////////////////////
				//It does exist! Now, we need to check to make sure the list
				//has the right columns.
				//////////////////////////////////////////////
				verifyList(listName,config,function(status){
					alert("Verify Status: " + status);
				});

			} else {
				createList(listName,function(createdStatus){
					if (createdStatus){
						console.log("List Created! Cool.");
						verifyList(listName,config,function(status){
							alert("Verify Status: " + status);
						});
					} else {
						console.log("List NOT created. Ending script" );
					}
				});
			}


		}
	});
}

function createList(listName,callback){
		$().SPServices({
			operation: "AddList",
			async: true,
			webURL:ROOTSITE,
			listName:listName,
			description:"",
			templateID:100,//100 is the code for a basic custom list
			completefunc: function(xData, status){
				// error handling for AddList
				var isError = checkError( 'add', $(xData.responseXML) );
				if ( isError ){
					console.log("An error occured adding the list!")
					callback(false);
				} else {
					callback(true);
				}
			}
		});
}


function verifyList(listName,config,callback){


	var fullConfig = $.extend({},config);

	getFieldInfo(listName,false,function(jsonList){

		var newColumnXML = "";
		var updateColumnXML = "";

		$.each(jsonList,function(index,field){

			var innerName = field.innername;

			if ( config[innerName] ){
				delete config[innerName]; //remove the columns that already exist
			}




			//console.log(newColumnXML);

		});//end each

		newColumnXML = getXMLForInnerNames(config);
		updateColumnXML = getXMLForDisplayNames(config);

		
		
		//Columns are first created using the innernames as the display names.
		//We will changed the display names after the columns are created
		$().SPServices({
			operation: "UpdateList",
			listName: listName,
			listProperties:"",
			//updateFields: false,//maybe
			newFields: newColumnXML,
			deleteFields: "",
			listVersion: "",
			async: true,
			completefunc: function (xData, Status){
				// error handling for UpdateList
				var isError = checkError( 'add', $(xData.responseXML) );
				if( isError ){
					console.log('An error has occured updating innernames on the '+listname+' list.');
					console.log ("error: ", $(xData.responseXML).find("errorstring").text() );
				} else {

					console.log("Add columns Good!");

				}

				$().SPServices({
					operation: "UpdateList",
					listName: listName,
					listProperties:"",
					updateFields: updateColumnXML,
					//newFields: newColumnXML,
					deleteFields: "",
					listVersion: "",
					async: true,
					completefunc: function (xData, Status){
						// error handling for UpdateList
						var isError = checkError( 'add', $(xData.responseXML) );
						if( isError ){
							console.log('An error has occured updating innernames on the '+listname+' list.');
							console.log ("error: ", $(xData.responseXML).find("errorstring").text() );
						} else {

							console.log("Update DisplayName columns Good!");
					

							var viewfields = getViewFields(fullConfig);

							updateView(listName,"All Items",viewfields);

						}
					}
				});
			}
		});//end SPServices

	});
}

//run first to add
function getXMLForInnerNames (columns) {

	//console.log("getXML");

	var fieldsToAddXML = '<Fields>';
	var countID = 1;

	$.each(columns,function(index,column){

		var type = column.sharePointType;
		var displayName = column.displayName;
		var required = "FALSE";
		var innerName = column.innerName;

		var formatAttr = "";

		if (type == "DateTime"){

			formatAttr = 'format="DateOnly"';
		}
		
		
		fieldsToAddXML += '<Method ID="'+countID+'"><Field Type="'+type+'" DisplayName="'+innerName+'" Name="'+innerName+'" Required="'+required+'" '+formatAttr+'><Default></Default></Field></Method>';
		countID++;
	});

	fieldsToAddXML += '</Fields>';

	//console.log(fieldsToAddXML);

	return fieldsToAddXML;



}

//then run this to change the column names
function getXMLForDisplayNames (columns) {

	var fieldsToAddXML = '<Fields>';
	var countID = 1;
	
	$.each(columns,function(index,column){


		var choicesXML = "";

		var textAreaXML = "";

		var type = column.sharePointType;
		var displayName = column.displayName;
		var required = "FALSE";
		var innerName = column.innerName;

		if (column.sharePointType == "Choice"){

			choicesXML = getXMLForChoices(column);

		}
		
		

		fieldsToAddXML += '<Method ID="'+countID+'"><Field Type="'+type+'" DisplayName="'+displayName+'" Name="'+innerName+'" Required="'+required+'" Viewable="TRUE" ><Default></Default>'+choicesXML+'</Field></Method>';
		countID++;
	});

	fieldsToAddXML += '</Fields>';
	return fieldsToAddXML;

}

function getXMLForChoices(column){

	var choicesXML = "<CHOICES>";

	$.each(column.options,function(index,option){

			choicesXML += "<CHOICE>"+option.name+"</CHOICE>";

	});

	choicesXML += "</CHOICES>";
}


function checkError( updateType, xmlResponse ){
	var error = false;
	// creating lists
	if( updateType == 'add' ){
		var errorCode = xmlResponse.SPFilterNode( 'errorcode' ).text();
		var errorText = xmlResponse.SPFilterNode( 'errorstring' ).text();
	}
	// updating/adding list items
	else {
		var errorCode = xmlResponse.SPFilterNode( 'ErrorCode' ).text();
		var errorText = xmlResponse.SPFilterNode( 'ErrorText' ).text();
	}
	if(errorCode != '0x00000000' && errorCode != '') {
		// console.log('Error adding: ' + $(xData.responseXML).SPFilterNode("z:row").attr("ows_Title") + ' ' + errortext);
		console.log('Error adding list: '+ errorCode + ' | ' + errorText);
		error = true;
	}

	return error;
}

function getViewFields(config){

	var viewfields = '<ViewFields>';

	$.each(config,function(index,column){


		viewfields += '<FieldRef Name="'+column.innerName+'" />';
	});

	viewfields += '</ViewFields>';

	return viewfields;
}


function updateView(listname,view,viewfields){
	var viewname = "";  // view GUID container var

	//console.log(viewfields);

    $().SPServices({
        operation: "GetViewCollection",
        webURL: ROOTSITE,
        async: false,
        listName: listname,
        completefunc: function (xData, Status){
            $(xData.responseXML).SPFilterNode( 'View' ).each(function(){
                 var viewdisplayname = $(this).attr("DisplayName");
                 if (viewdisplayname==view){
                       viewname = $(this).attr("Name");
                       return false;
                 }
        	});
    	}
    });

	console.log( listname, viewname, viewfields );




	$().SPServices({
		operation: "UpdateView",
		webURL: ROOTSITE,
		async: false,
		listName: listname,
		viewName: viewname,
		viewFields: viewfields,
		completefunc: function (xData, Status){
			var isError = checkError( 'update', $(xData.responseXML) );
			if( isError ){ alert('An error has occured setting the view for the '+listname+' list.'); } else {
				console.log("View updated!")

			}
		}
	});

}
