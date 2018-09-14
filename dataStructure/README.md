# 数据结构和算法(Data Structure & algorithm)

[1.数组](#1array)

[2.栈](#2stack)

[3.队列](#3queue)

[4.链表](#4list)

[5.集合](#5set)

[6.字典](#6map)

[7.树](#7tree)

[8.图](#8graph)

[9.排序](#9sort)

&nbsp;

1 - 8 (待补)

&nbsp;

## 9.Sort

### 冒泡排序 - O(n²)

```javascript
let arr = []

function bubbleSort(arr){
    let temp,length = arr.length
    for(let i = 0;i<length;i++){
        for(let j=0;j<length-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}
```

### 选择排序 - O(n²)

```javascript
function selectionSort(arr) {
    var length = arr.length, indexMin,temp
    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j< length ; j++) {
            if (arr[indexMin] < arr[j]) {
                indexMin = j
            }
        }
        if(i !== indexMin){
            temp = arr[i]
            arr[i] = arr[indexMin]
            arr[indexMin] = temp
        }
    }

    return arr
}
```

### 插入排序 - O(n²)

```javascript
function insertSort(arr) {
    let temp, length = arr.length,j
    for (let i = 1; i < length; i++) {
        j = i
        temp = arr[i]
        while(j>0 && arr[j-1]>temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
}
```

### 二分(也叫归并)排序 - O(nlogn)

其基本思想是**分治**

![归并排序](https://images2015.cnblogs.com/blog/1024555/201612/1024555-20161218163120151-452283750.png)

```javascript
function mergesort(arr){
    if(arr.length<2) return arr
    var mid = parseInt(arr.length/2)
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)
    return merge(mergesort(left),mergesort(right))
}

function merge(l,r){
    var res = []
    while(l.length && r.length){
        if(l[0] > r[0]){
        res.push(r.shift())
        }else{
        res.push(l.shift())
        }
    }

    if(l.length){
        res = res.concat(l)
    }else{
        res = res.concat(r)
    }
    return res
}

console.log(mergesort([3,2,1,5])) //测试数据
```

```javascript
var mergeSortRec = function (array) {
    var length = array.length
    if(length == 1){
        return array
    }
    var mid = Math.floor(length/2),left = array.slice(0,mid),right = array.slice(mid,length)
    console.log('Rec',left,right)
    return merge(mergeSortRec(left),mergeSortRec(right))
}

function merge(left,right) {
    var result = [],il = 0,ir = 0

    console.log('Mer',left,right)

    while(il<left.length && ir<right.length){
        if(left[il] < right[ir]){
            result.push(left[il++])
        }else{
            result.push(right[ir++])
        }
    }

    while(il<left.length){
        result.push(left[il++])
    }

    while(ir < right.length){
        result.push(right[ir++])
    }
    return result
}


function merges(arr) {
    if(arr.length === 1) return arr
    var mid = Math.round(arr.length/2)
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)
    return mer(merges(left),merges(right))
}

function mer(left,right){
    var res = [], i= 0, j=0
    while(i< left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }

    while(i< left.length){
        res.push(left[i])
    }

    while(j< right.length){
        res.push(right[j])
    }

    return res
}
```

### 快速排序 - O(nlogn)

```javascript
function quickSort(array,left,right){
    quick(array,0,array.length-1)
}

var quick = function(array,left,right){

    var index

    if(array.length>1){

        index = partition(array,left,right)

        if(left < index -1){
            quick(array, left , index - 1)
        }

        if(index < right){
            quick(array,index,right)
        }

    }
}

var partition = function (array,left,right) {

    var pivot = array[Math.floor((right+left)/2)],i=left,j=right,temp

    while(i <= j){
        while(arr[i] < pivot){
            i++
        }
        while(array[j] > pivot){
            j--
        }
        if(i<=j){
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        }
    }
    return i
}
```

```javascript
function quickSort(arr, l, r){
    if(l >= r) return
    var p = partition(arr,l,r)
    quickSort(arr,l,p-1)
    quickSort(arr,p+1,r)
}

function partition(arr, l, r){
    var v = arr[l]
    var i = l+1, j = r

    while (true) {

    while (i <= j && arr[i] < v) i++

    while (i <= j && arr[j] > v) j--

    if(i > j) break

    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++
    j--
}

    var temp = arr[l]
    arr[l] = arr[j]
    arr[j] = temp

    return j
}

var arr = [2,3,5,0,8,1,9]

quickSort(arr,0,arr.length-1)

console.log(arr)
```

&nbsp;

## 三路快排(针对重复元素较多的数组)

```javascript
function quicksort3ways(arr, l, r){
    if(l>=r) return
    var v = arr[l]
    var i = l,j= r + 1
    var cur = i + 1
    while(cur<j){
        if(arr[cur] > v){
            var temp = arr[cur]
            arr[cur] = arr[j-1]
            arr[j-1] = arr[cur]
            j--
        }else if(arr[cur] < v){
            var temp = arr[cur]
            arr[cur] = arr[i+1]
            arr[i+1] = temp
            i++
            cur++
        }else{
            cur++
        }
    }

    var temp = arr[i]
    arr[i] = arr[l]
    arr[l] = temp

    quicksort3ways(arr,l,i-1)
    quicksort3ways(arr,j,r)
}
```

&nbsp;

## 计数排序(O(n+k))

```javascript
// 计数排序
function sort(arr){
    var C = []
    for(var i=0;i<arr.length;i++){
        if(C[arr[i]]) C[arr[i]]++
        else C[arr[i]]=1
    }

    var result = []
    for(var j=0,i=C.length-1;i>=0;i--){
        while(C[i]){
        result.push(i)
        C[i]--
        }
        j++
    }
    return result
}

var a = [8,3,2,1,2]
console.log(sort(a))
```

&nbsp;

(不断完善中....)

参考:

***学习Javascript数据结构与算法(第二版)***

***算法***

博客:

[归并排序](https://www.cnblogs.com/chengxiao/p/6194356.html)