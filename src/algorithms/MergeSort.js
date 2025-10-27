export const MergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
  
    const auxArray = array.slice();
    const sortedArray = array.slice();
    
    mergeSortHelper(sortedArray, 0, sortedArray.length - 1, auxArray, animations);
    return animations;
  };
  

  let count =1;
  const mergeSortHelper = (sortedArray, startInd, endIdx, auxArray, animations) => {
    if (startInd === endIdx) return;
     count++;
    const middleIdx = Math.floor((startInd + endIdx) / 2);
    mergeSortHelper(auxArray, startInd, middleIdx, sortedArray, animations);
    mergeSortHelper(auxArray, middleIdx + 1, endIdx, sortedArray, animations);
    console.log(count)
      console.log(auxArray, sortedArray)
    doMerge(sortedArray, startInd, middleIdx, endIdx, auxArray, animations);
    console.log(count)
    console.log(auxArray, sortedArray)

  };
  
  const doMerge = (sortedArray, startInd, middleIdx, endIdx, auxArray, animations) => {
    let k = startInd;
    let i = startInd;
    let j = middleIdx + 1;
  
    while (i <= middleIdx && j <= endIdx) {
      // Push two indices that are being compared
      animations.push([i, j]);
      // Push two indices second time  to change their color back
      animations.push([i, j]);
  
      if (auxArray[i] <= auxArray[j]) {
        // Push index and its new height
        animations.push([k, auxArray[i]]);
        sortedArray[k++] = auxArray[i++]; // Update the sortedArray copy
      } else {
        // Push index and its new height
        animations.push([k, auxArray[j]]);
        sortedArray[k++] = auxArray[j++]; // Update the sortedArray copy
      }
    }
  
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
  
      animations.push([k, auxArray[i]]);
      sortedArray[k++] = auxArray[i++]; 
    }
  
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
  
      animations.push([k, auxArray[j]]);
      sortedArray[k++] = auxArray[j++]; // Update the sortedArray copy
    }
  };
  