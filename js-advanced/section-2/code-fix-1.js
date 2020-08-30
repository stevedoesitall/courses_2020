    //fill array with 60000 elements
     
    function removeItemsFromList() {
        const list = new Array(60000).join('1.1').split('.');
        var item = list.pop();
     
        if (item) {
            setTimeout(removeItemsFromList, 0);
        }
        console.log(list)
    };
     
    removeItemsFromList();
