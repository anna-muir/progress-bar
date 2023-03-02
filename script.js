// Selects all elements with class numbers and with class lines, creates an array
const numberList = document.querySelectorAll('.numbers');
const lines = document.querySelectorAll('.line');
// sets index for numbers to 0 and index for lines at 0
let index = 0;
let indexLine = 0;

// Defines variables for next and previous button
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')

// INCREMENT ON NEXT BUTTON
const next = () => {
    // INCREMENT THROUGH NUMBERLIST
    // If index is less than the length of numberList (at this time, it is 4), increment by 1
    if (index < numberList.length) {
        // Set numberElement equal to the items of numberList as we increment through the array (index determines which item we are on)
        const numberElement = numberList[index]
        // As we increment through each item, add a class of active to each one once we get to its index
        numberElement.classList.add('active')
        //Allows to increment by 1
        index++;
    }
    // INCREMENT THROUGH LINES
    // If indexLine is less than the length of lines (at this time, it is 3), increment by 1
    if (indexLine < lines.length) {
        // Set lineElement equal to the items on lines as we increment through the array (indexLine determines which item we are on)
        const lineElement = lines[indexLine];
        // As we increment, add a class of active-line to each item once we get to its index
        lineElement.classList.add('active-line');
        // Allows to increment by 1
        indexLine++;
    }
    // ENABLES/DISABLES PREV AND NEXT BUTTONS
    // As we click the next button -- if index is greater than 0, enable the previous button (ex: if we are on step 3, we should be able to go to the previous number)
    if (index > 0) {
        console.log(index)
        prevButton.disabled = false;
    }

    // As we click the next button -- if index is equal to the length of numbrtList, disable the next button (ex: if we are on the step 4, you should not be able to go forward by clicking next because we are at the end of the array/steps)
    if (index === numberList.length) {
        nextButton.disabled = true;
    }

}


//DECREMENT ON PREVIOUS BUTTON
const prev = () => {
    //DECREMENT THROUGH NUMBERLIST
    // If index is less than or equal to the length of number list and index is greater than 1...
    if (index <= numberList.length && index > 1) {
        // Allow to decrement
        index--;
        // Set numberElement to the items of numberList
        const numberElement = numberList[index]
        // As we decrement, remove the active class of each item once we get to it in the array
        numberElement.classList.remove('active')
    }

    // If indexLine is less than or equal to the length of lines and indexLine is greater than 0...
    if (indexLine <= lines.length && indexLine > 0) {
        // Allow to decrement
        indexLine--;
        // Set lineElement to the items of lines
        const lineElement = lines[indexLine];
        // As we decrement, remove the active class of each item once we get to it in the array
        lineElement.classList.remove('active-line');

    }
    //ENABLES/DISABLES THE PREV AND NEXT BUTTON
    // On click of previous button -- if index is equal to 1, disable the previous button (ex: if index is at 1, we are on the first element of the array and you can't go back anymore)
    if (index === 1) {
        prevButton.disabled = true;
    }
    // On click of the previous button -- if index is less than the length of number list length, enable the next button (ex: if index is less than the length of the array, we should be able to go forward if we wanted to back up because we are no longer at the end of the array or we were never at the end)
    if (index < numberList.length) {
        nextButton.disabled = false;
    }


}


// On click, complete defined functions
nextButton.addEventListener('click', next)
prevButton.addEventListener('click', prev)