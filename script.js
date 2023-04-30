(() => {
    const body = document.querySelector('body');
    const reset = document.querySelectorAll('body *');
    reset.forEach(element => {
        element.style.margin = '0';
        element.style.padding = '0';
    });
    body.setAttribute('style', 'margin: 0; padding: 0');
    const wrapContent = document.createElement('div');
    wrapContent.setAttribute('style', 'max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; box-sizing: border-box');
    body.append(wrapContent);
    const area = document.createElement('textarea');
    area.setAttribute('id', 'textPlace');
    area.setAttribute('rows', '5');
    area.setAttribute('style', 'display: inline-block; width: 100%; margin-top: 100px; margin-bottom: 15px');
    wrapContent.append(area);
    const keyboard = document.createElement('div');
    keyboard.setAttribute('style', 'padding: 10px; border: 1px solid black; width: 100%; box-sizing: border-box');
    wrapContent.append(keyboard);


    function addRow() {
        let n = 0;
        let tmp
        const keyRow = document.createElement('div');
        while (n !== 5) {
            keyRow.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; height: 10px; background-color: rgb(59, 35, 35); margin-bottom: 10px; box-sizing: border-box');
            keyRow.setAttribute('id', `row${n}`);
            if (n === 4) {
                keyRow.style.marginBottom = '0';
            }
            keyboard.append(keyRow);
            tmp = keyboard.innerHTML;
            keyboard.innerHTML = tmp;
            n++
        }
    }

    addRow();

    const keysRowFirst = [
        {one: ['\`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace']},
        {sub: ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '']}
    ];
    const keysRowSecond = [
        {one: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL']},
        {sub: ['', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '']}
    ];
    const keysRowThird = [
        {one: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER']},
        {sub: ['', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '']}
    ];
    const keysRowFourth = [
        {one: ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'L', ',', '.', '/', ``, 'Shift']},
        {sub: ['', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '']}
    ];
    const keysRowFifth = [{one: ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'B', 'N', 'M']}];

    console.log(keysRowFirst[0].one[0]);
    console.log(keysRowSecond[0].one[keysRowSecond[0].one.length - 2]);
    console.log(keysRowFourth[0].one[keysRowSecond[0].one.length - 2]);

    function addKey() {

    }
})();
