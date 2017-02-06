/**
Write a function:

that, given a non-empty zero-indexed array A of N integers, 
returns the minimal positive integer (greater than 0) that 
does not occur in A.
For example, given:
  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.
Assume that:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

1. sort the array 1,1,2,3,4,6
2. if the first element is greater than 1, 
3. the minimal positive integer is 1 
4. compare the current element to the next element
5. if the difference is greater than 0
6. then the minimal positve integer is first element - 1
7. go to step 4 and repeat moving to the next element
*/
function solution(a) {
  a.sort(function compare(a, b) {
    return a - b;
  });
  
  var last = a[0];
  
  //this is a special case when first number > 1
  if (last > 1) {
    return 1;
  } 
  
  for (var i = 0; i < a.length; i++) {
    if(last >= 0 && a[i] - last > 1) break;
    last = a[i];
  }
  //negative
  if (last < 1){
    return 1;
  } else {
    return last + 1;
  }

}
//all negatives
solution([-1,-3,-6,-4,-1,-2]); //--> 1
//all positives
solution([1,3,6,4,1,2]); //-->5
//negatives and positives
solution([-1,-10,-5,1,3]); //--> 2
//single negative
solution([-5]); //-->1
//single positive
solution([2]); //-->1
solution([1]); //-->2
//first number > 1
solution([10,20,30,40,50]);

