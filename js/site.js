/*
 ** 04-13-21 jdj: Taco Cat Reverse String Function.
 **              .Need to check and alert the user if this is a palindrome (same value if reversed)
 **              .requirements are to remove all non - alpha characters. see normalizeString() below.
 **              .HTML hook:
 **              "<script> document.getElementById(" tacoBtn ").addEventListener(" click ", tc_reverseString);" </script>
 **
 **      Logic: .make a copy of the passed string.
 **              .normalize the 1st copy witOUT reversing it.
 **              .make a second copy of the passed string; normalize then reverse it: see reverseString()
 **              .compare the 1st and 2nd string copies.  Set a user message if they're the same.
 **              .use the originally passed string to also reverse it and echo back to the user if successful including non-alpha.
 **
 **      Note:   .Careful for the differences between use of the document object's .innerText vs .innerHTML.
 **              .innterHTML was used in some cases to provide return HTML to add element highlighting depending
 **               on the message.
 */
function tc_reverseString() {

    let userWord = document.getElementById("tacoCat").value; // get the user input
    let output = document.getElementById("tacoOutput"); // get output field object once.
    let outputMsg = document.getElementById("tacoMsg"); // get the message field object once 
    let reverseWord = "";

    // reinitialize the output fields from any previous displays.
    output.innerText = "";
    outputMsg.innerText = "";

    let copyStr1NormalizedOnly = userWord; // copy the original word as-is


    // check something is there and alert them if empty.
    if (copyStr1NormalizedOnly == "") {
        outputMsg.innerHTML = `<span class="text-danger"><b>Please enter some text.</b></span>`;
        return;
    }

    // validate at least 2 characters were received.
    if (userWord.length < 2) {
        outputMsg.innerHTML = `<span class="text-danger"><b>Please enter at least 2 characters.</b></span>`;
        return;
    }

    let copystr2NormalizedReversed = userWord;

    copyStr1NormalizedOnly = normalizeString(userWord);

    copystr2NormalizedReversed = normalizeString(userWord);
    copystr2NormalizedReversed = reverseStringCopy(copystr2NormalizedReversed);


    /*
     ** If the text is a palindrome inject html in the return message to highlight the error.
     */
    if (copyStr1NormalizedOnly == copystr2NormalizedReversed) {
        output.innerHTML = `<span class="bg-danger"><b>I'm afraid [${userWord}] is a palindrome when reversed.</b></span>`;
        outputMsg.innerText = `Internally your word is the same forward[${copyStr1NormalizedOnly}] as it is reversed[${copystr2NormalizedReversed}]`;
        return;
    }

    // reverse the original untouched value as it passed the palindrome test.
    reverseWord = reverseStringCopy(userWord);
    output.innerText = reverseWord;
    //  outputMsg.innerHTML = `<span class="bg-success"><b>You're word passed the palindrome review and was reversed.</b></span>`;
    // outputMsg.innerHTML = `<span class="bg-info"><b>You're word passed the palindrome review and was reversed.</b></span>`;
    outputMsg.innerHTML = `<span class="bg-info"><b>You're word passed the palindrome review and was reversed.</b></span>`;

    return;
} // end of reverseString() called from the browser.

// do nothing more than to reverse the passed string.
function reverseStringCopy(passedString) {
    let returnString = "";

    for (x = passedString.length - 1; x >= 0; x--) {
        returnString = returnString + passedString[x];
    }
    return returnString;
}

// remove all non alpha characters from the string and only leave 'A-Z' and '0-9'.  return string will be all CAPS !!!
// white space and punctuation will be removed.
function normalizeString(passedString) {
    let tmpWorkString = "";
    let returnString = "";
    let lenStr = 0;

    tmpWorkString = passedString;
    tmpWorkString = tmpWorkString.toUpperCase();
    lenStr = tmpWorkString.length;

    for (let x = 0; x < lenStr; x++) {
        if (tmpWorkString[x] >= 'A' && tmpWorkString[x] <= 'Z') {
            returnString = returnString + tmpWorkString[x];
            continue;
        }
        if (tmpWorkString[x] >= '0' && tmpWorkString[x] <= '9') {
            returnString = returnString + tmpWorkString[x];
            continue;
        }
        continue; // here for clarity; skip the character
    }

    return returnString;
}
/*
 **  End of site.js
 */