// Get Button From HTML Page
let btn = document.getElementById('btn');
// Check If The User Click On Button [Listen To Event]
btn.addEventListener('click', (e) => {
    // Prevent Default Submit Event
    e.preventDefault(); 
    // Create New Element [Paragraph]
    let pElement = document.createElement('p');
    // Get Input Value 
    let inputValue = document.getElementById('item').value;
    // Check If The Length > 20
    if(inputValue.length > 20){
        // [p] Content = Value Of Input
        pElement.innerHTML = inputValue;
        // Counters
        let numberCnt = 0, alphaSmallCnt = 0, alphaCapitalCnt = 0, specialCnt = 0;
        // Loop Through To Check Each Character 
        for(let i = 0; i < inputValue.length; i++)
        {
            // Check if it Number
            if(inputValue[i] >= '0' && inputValue[i] <= '9')
            {
                numberCnt++;
            } else if(inputValue[i] >= 'a' && inputValue[i] <= 'z') { // Check if it Small Letter
                alphaSmallCnt++;
            } else if(inputValue[i] >= 'A' && inputValue[i] <= 'Z') { // Check if it Capital Letter
                alphaCapitalCnt++;
            } else { // Check if it Special Character
                specialCnt++;
            }
        }
        // Create Array Contains Values Of Counters
        let counters = [numberCnt, alphaSmallCnt, alphaCapitalCnt, specialCnt];
        // Create Array Contains Text 
        let counterName = ['Numbers', 'Small Letter', 'Capital Letter', 'Special Characters'];
        // Create Container For The Result
        let resultContainer = document.createElement('div');
        // Add Class To Container [result]
        resultContainer.classList.add('result');
        // Create Unordered List
        let ulElement = document.createElement('ul');
        // Loop Through Array To Create [li's] and Add The Values
        for(let i = 0; i < counters.length; i++){
            // Create li Element
            let liElement = document.createElement('li');
            // Add Content Of li
            liElement.innerHTML = `${counterName[i]} : ${counters[i]}`;
            // Append li to ul
            ulElement.appendChild(liElement);
        }
        // Append [p] Which Contains The Value Of Input To Result Container
        resultContainer.appendChild(pElement);
        // Append [ul] Which Contains the Values Of Counters
        resultContainer.appendChild(ulElement);
        // Append Result Container To Body
        document.body.appendChild(resultContainer);
    } else { // If Length Of Input Value < 20
        // Create Div Element
        let divError = document.createElement('div');
        // Add Class [result-dng] To Div
        divError.classList.add('result-dng');
        // Add Text Content To Div
        divError.textContent = 'Length Less Than 20 Characters';
        // Append Div To Body
        document.body.appendChild(divError);
    }
    // Empty Input Field
    document.getElementById('item').value = "";
});