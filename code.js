function quicksort(array) {
    qSort(array,0,(array.length - 1))
    return array;
}

function qSort(arr, low, high) 
    { 
        if (low < high) {
            let partIndex = part(arr, low, high); 
            qSort(arr, low, partIndex - 1); 
            qSort(arr, partIndex + 1, high); 
        } 
    }

function part(arr, low, high) //n^2
{
    let tempArray;
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            tempArray = arr[i];
            arr[i] = arr[j];
            arr[j] = tempArray;
        }
    }
    tempArray = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tempArray;
    return i + 1;
}

