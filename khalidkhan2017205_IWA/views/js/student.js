// returns a number that represents the sum of all the selected student marks
// calculateMarks
function calculateMarks(idMarkTable) {
	var fMarkTotal = 0.0;  //fBillTotal
	var i=0;
	var aCBTags = document.querySelectorAll('input');
	for (i=0; i < aCBTags.length; i++) {
	// is this menu item selected? it is if the checkbox is checked
		if (aCBTags[i].checked) {
	// get the checkbox' parent table row
			var oTR = getParentTag(aCBTags[i],'TR');
	// retrieve the marks from the 4 subject columns, which is the 3rd,4th,5th,6th column in the table
			var oTDSubject = oTR.getElementsByTagName('TD')[4];
			var oTDSubject1 = oTR.getElementsByTagName('TD')[5];
			var oTDSubject2 = oTR.getElementsByTagName('TD')[6];
			var oTDSubject3 = oTR.getElementsByTagName('TD')[7];
	// the first child text node of the columns contains the marks
			fMarkTotal += parseFloat(oTDSubject.firstChild.data)+parseFloat(oTDSubject1.firstChild.data)+parseFloat(oTDSubject2.firstChild.data)+parseFloat(oTDSubject3.firstChild.data);

	// ===> calculating the percentage of each student marks
			var percentage = (fMarkTotal/400)*100;
			//alert(percentage);
			// calculate the grades of student
			var grades = "";
			if(percentage<=100 && percentage>=80){
			grades = 'A';
			}else if(percentage<=79 && percentage>=60){
			grades = 'B';
			}else if(percentage<=59 && percentage>=40){
			grades = 'C';
			}else{
			grades = 'F';
			}
			alert("Total Marks: " +fMarkTotal + "\n Percentage: "+percentage+ "\n Grade: "  + grades);

		};
	};
	// return the total marks as a decimal number with 2 decimal places
	return Math.round(fMarkTotal*100.0)/100.0;
};