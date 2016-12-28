$(document).ready(function(){
	$("#genCode").on('click', function(e){
		e.preventDefault();
		
		var textToEncode = $("#textToEncode").val();
		
		if(textToEncode){
			//remove error text (in case there is any)
			$("#codeMsg").html("");
			
			//also remove whatever qr code previously generated
			$("#code").html("");
			
			var options = {
				 // render method: 'canvas', 'image' or 'div'
				render: 'image',

				// version range somewhere in 1 .. 40
				minVersion: 1,
				maxVersion: 40,

				// error correction level: 'L', 'M', 'Q' or 'H'
				ecLevel: 'L',

				// offset in pixel if drawn onto existing canvas
				left: 0,
				top: 0,

				// size in pixel
				size: 200,

				// code color or image element
				fill: '#000',

				// background color or image element, null for transparent background
				background: null,

				// content
				text: textToEncode,

				// corner radius relative to module width: 0.0 .. 0.5
				radius: 0,

				// quiet zone in modules
				quiet: 0,

				// modes
				// 0: normal
				// 1: label strip
				// 2: label box
				// 3: image strip
				// 4: image box
				mode: 0,

				mSize: 0.1,
				mPosX: 0.5,
				mPosY: 0.5,

				label: 'no label',
				fontname: 'sans',
				fontcolor: '#000',

				image: null
			};
			
			//now generate and display barcode
			$("#code").qrcode(options);
			
			//display the encoded text below the generated barcode
			$("#encodedText").html(textToEncode);
			
			//remove the encoded text from the input
			$("#textToEncode").val("");
			
			//show the div where the barcode image is being displayed (in case it is hidden since it is hidden by default)
			$("#barcodeDiv").removeClass('hidden');
			
			
			//set up the button for downloading the barcode image
			setUpImageDownload();
		}
		
		else{
			//if no text is entered
			$("#codeMsg").css({color:'red', fontSize:'10px'}).html("No text found");
		}
	});
	
	/*
	********************************************************************************************************************************
	********************************************************************************************************************************
	********************************************************************************************************************************
	********************************************************************************************************************************
	********************************************************************************************************************************
	*/
	
});


/**
 * TO SET UP THE BUTTON TO BE CLICKED FOR DOWNLOADING THE GENERATED BARCODE
 */
function setUpImageDownload(){
	//get the img src, set it as the href of a tag with id 'downloadBarcode', then trigger the click event on the a tag
	var barCodeImgSrc = $('#code').children('img').prop('src');
	
	if(barCodeImgSrc){console.log(barCodeImgSrc);
		$("#downloadBarcode").prop('href', barCodeImgSrc);
	}
	
	else{
		console.log("Src not available");
	}
}