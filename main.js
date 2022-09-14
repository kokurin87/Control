function myControl(){

    let main = document.querySelector('main');

    let header = document.createElement('div');
    header.className = 'header';
    main.appendChild(header);

    let inputName = document.createElement('input');
    inputName.className = 'input';
    inputName.placeholder = 'Name'
    header.appendChild(inputName);

    let inputAge = document.createElement('input');
    inputAge.className = 'input';
    inputAge.type = 'number';
    inputAge.min = 1;
    inputAge.placeholder = 'Age';
    header.appendChild(inputAge);

    let arrCountries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']
    let SelectList = document.createElement('select');
    let item = document.createElement('option');
    SelectList.name = 'myList';
    for (let i = 0; i < arrCountries.length; i++) {
        item.text = arrCountries[i];
        item.value = arrCountries[i];
        SelectList.appendChild(item.cloneNode(true));
        SelectList.value = '';        
    }
    header.appendChild(SelectList);

    let buttonNewPerson = document.createElement('button');
    buttonNewPerson.className = "button";
    buttonNewPerson.innerHTML = 'Create';
    header.appendChild(buttonNewPerson);
    buttonNewPerson.onclick = newPerson;

    function newPerson(){
            if (!inputName.value || !inputAge.value){
            alert('Fill in all the fields')
            return false;
        } else if (inputAge.value < 1){
            alert('enter a positive number')
        }
        let createdMan = {};
        createdMan.name = inputName.value;
        createdMan.country = SelectList.value;
        createdMan.age = inputAge.value;
        
        peoples.push(createdMan);
        render (peoples);
        inputName.value = '';
        inputAge.value = '';
        SelectList.value = '';
    }

    let content = document.createElement('div');
    content.className = 'content';
    main.appendChild(content);

    let footer = document.createElement('div');
    footer.className = 'footer';
    main.appendChild(footer);

    let buttonConfirm = document.createElement('button');
    buttonConfirm.className = "button";
    buttonConfirm.innerHTML = 'Confirm';
    footer.appendChild(buttonConfirm);
    buttonConfirm.onclick = myConfirm;

    function myConfirm(){
        if(!ulRight.childNodes.length){
            return false
        } else {
            ulLeft.innerHTML = '';
            buttonDel.classList.add('deactivate');
            buttonNewPerson.classList.add('deactivate');
        }
    }

    let buttonReset = document.createElement('button');
    buttonReset.className = "button";
    buttonReset.innerHTML = 'Reset';
    footer.appendChild(buttonReset);
    buttonReset.onclick = myReset;

    function myReset(){        
        peoples.length = 7;
        render (peoples);
        buttonNewPerson.classList.remove('deactivate');
        buttonDel.classList.remove('deactivate');
        inputName.value = '';
        inputAge.value = '';
        SelectList.value = '';
    }

    let ulLeft = document.createElement('ul');
    ulLeft.className = 'list left';
    content.appendChild(ulLeft);

    let controls = document.createElement('div')
    controls.className = 'controls';
    content.appendChild(controls);

    let ulRight = document.createElement('ul');
    ulRight.className = 'list right';
    content.appendChild(ulRight);

    let peoples = [
        {name: 'John', country : 'Argentina', age: 30,},
        {name: 'Sandra', country : 'England', age: 37,},
        {name: 'Bill', country : 'Poland', age: 27,},
        {name: 'Anna', country : 'Austria', age: 25,},
        {name: 'Bred', country : 'China', age: 28,},
        {name: 'Daniel', country : 'Japan', age: 41,},
        {name: 'Jassie', country : 'Germany', age: 18,},
    ];

    function render(arr){
        ulLeft.innerHTML = '';
        ulRight.innerHTML = '';
        for (const people of arr) {
            const li = document.createElement('li');
            li.className = 'item';
            li.setAttribute("data-age", people.age);
            li.setAttribute("data-name", people.name);
            li.textContent = people.name + ',   age: ' + people.age + ',   country: ' + people.country;
            ulLeft.appendChild (li);
        }
    }
    render (peoples)

    let buttonSortAgeDown = document.createElement('button');
    buttonSortAgeDown.className = "button";
    buttonSortAgeDown.insertAdjacentHTML("afterbegin", "\u2193 Age");
    controls.appendChild(buttonSortAgeDown);
    buttonSortAgeDown.onclick = mySortAgeDown;

    function mySortAgeDown(){
        for (let i = 0; i < ulLeft.children.length; i++) {
            for (let j = i; j < ulLeft.children.length; j++) {
                if (+ulLeft.children[i].getAttribute('data-age') > +ulLeft.children[j].getAttribute('data-age')){
                    let replacedNode = ulLeft.replaceChild(ulLeft.children[j], ulLeft.children[i]);
                    insertAfter(replacedNode, ulLeft.children[i]);
                }
            }
        }

        for (let i = 0; i < ulRight.children.length; i++) {
            for (let j = i; j < ulRight.children.length; j++) {
                if (+ulRight.children[i].getAttribute('data-age') > +ulRight.children[j].getAttribute('data-age')){
                    let replacedNode = ulRight.replaceChild(ulRight.children[j], ulRight.children[i]);
                    insertAfter(replacedNode, ulRight.children[i]);
                }
            }
        }
    }

    let buttonSortAgeUp = document.createElement('button');
    buttonSortAgeUp.className = "button";
    buttonSortAgeUp.insertAdjacentHTML("afterbegin", "\u2191 Age");
    controls.appendChild(buttonSortAgeUp);
    buttonSortAgeUp.onclick = mySortAgeUp;

    function mySortAgeUp(){
        for (let i = 0; i < ulLeft.children.length; i++) {
            for (let j = i; j < ulLeft.children.length; j++) {
                if (+ulLeft.children[i].getAttribute('data-age') < +ulLeft.children[j].getAttribute('data-age')){
                    let replacedNode = ulLeft.replaceChild(ulLeft.children[j], ulLeft.children[i]);
                    insertAfter(replacedNode, ulLeft.children[i]);
               }
            }
        }

        for (let i = 0; i < ulRight.children.length; i++) {
            for (let j = i; j < ulRight.children.length; j++) {
                if (+ulRight.children[i].getAttribute('data-age') < +ulRight.children[j].getAttribute('data-age')){
                    let replacedNode = ulRight.replaceChild(ulRight.children[j], ulRight.children[i]);
                    insertAfter(replacedNode, ulRight.children[i]);
                }
            }
        }
    }

    let buttonSortNameDown = document.createElement('button');
    buttonSortNameDown.className = "button";
    buttonSortNameDown.insertAdjacentHTML("afterbegin", "\u2193 Name");
    controls.appendChild(buttonSortNameDown);
    buttonSortNameDown.onclick = mySortNameDown;

    function mySortNameDown(){
        for (let i = 0; i < ulLeft.children.length; i++) {
            for (let j = i; j < ulLeft.children.length; j++) {
                if (ulLeft.children[i].getAttribute('data-name') > ulLeft.children[j].getAttribute('data-name')){
                    let replacedNode = ulLeft.replaceChild(ulLeft.children[j], ulLeft.children[i]);
                    insertAfter(replacedNode, ulLeft.children[i]);
                }
            }
        }

        for (let i = 0; i < ulRight.children.length; i++) {
            for (let j = i; j < ulRight.children.length; j++) {
                if (ulRight.children[i].getAttribute('data-name') > ulRight.children[j].getAttribute('data-name')){
                    let replacedNode = ulRight.replaceChild(ulRight.children[j], ulRight.children[i]);
                    insertAfter(replacedNode, ulRight.children[i]);
                }
            }
        }
    }

    let buttonSortNameUp = document.createElement('button');
    buttonSortNameUp.className = "button";
   buttonSortNameUp.insertAdjacentHTML("afterbegin", "\u2191 Name");
    controls.appendChild(buttonSortNameUp);
    buttonSortNameUp.onclick = mySortNameUp;

    function mySortNameUp(){
        for (let i = 0; i < ulLeft.children.length; i++) {
            for (let j = i; j < ulLeft.children.length; j++) {
                if (ulLeft.children[i].getAttribute('data-name') < ulLeft.children[j].getAttribute('data-name')){
                    let replacedNode = ulLeft.replaceChild(ulLeft.children[j], ulLeft.children[i]);
                    insertAfter(replacedNode, ulLeft.children[i]);
                }
            }
        }

        for (let i = 0; i < ulRight.children.length; i++) {
            for (let j = i; j < ulRight.children.length; j++) {
                if (ulRight.children[i].getAttribute('data-name') < ulRight.children[j].getAttribute('data-name')){
                    let replacedNode = ulRight.replaceChild(ulRight.children[j], ulRight.children[i]);
                    insertAfter(replacedNode, ulRight.children[i]);
                }
            }
        }
    }

    function insertAfter(elem, refElem){
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    let buttonAdd = document.createElement('button');
    buttonAdd.className = "button";
    buttonAdd.innerHTML = 'Add';
    controls.appendChild(buttonAdd);
    if (buttonAdd) {
        buttonAdd.classList.add('disabled');
        buttonAdd.onclick = onClickAdd;
    }

    let buttonDel = document.createElement('button');
    buttonDel.className = "button";
    buttonDel.innerHTML = 'Remove';
    controls.appendChild(buttonDel);
    if (buttonDel) {
        buttonDel.classList.add('disabled');
        buttonDel.onclick = onClickDel;
    }

    if (ulLeft) ulLeft.onclick = onClickList;
    if (ulRight) ulRight.onclick = onClickList;

    let selectedLeftItem;
    let selectedRightItem;


    function onClickList(event){
        let currentSelectedItems = this.querySelectorAll('.item.selected');
        for (let i = 0; i < currentSelectedItems.length; i++){
            currentSelectedItems[i].classList.remove('selected');
        }
        let clickedItem = event.target;
        if (clickedItem &&
            clickedItem.classList.contains('item')){
            clickedItem.classList.add('selected');
            } else {
                clickedItem = undefined;
            }

        if (this.classList.contains('left')){
            selectedLeftItem = clickedItem;
            disableButton(buttonAdd, !clickedItem);
        } else {
            selectedRightItem = clickedItem;
            disableButton(buttonDel, !clickedItem);
        }
    }

    function onClickAdd (event){
        ulRight.appendChild(selectedLeftItem);
        selectedLeftItem.classList.remove('selected');
        buttonAdd.classList.add("disabled");
    }

    function onClickDel (event){
        ulLeft.appendChild(selectedRightItem);
        selectedRightItem.classList.remove('selected');
        buttonDel.classList.add("disabled");
    }

    function disableButton(button, disable) {
        if (button) {
            if (disable === true) {
                if (!button.classList.contains("disabled")) {
                    button.classList.add("disabled");
                }
            } else {
                if (button.classList.contains("disabled")) {
                    button.classList.remove("disabled");
                }
            }
        }
    }
}

myControl()

