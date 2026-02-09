/*
Exercice 1 — Médiane de deux tableaux triés

Énoncé :
On te donne deux tableaux de nombres triés nums1 et nums2.
Retourner la médiane de l'ensemble des valeurs des deux tableaux réunis.

Rappel :
- Total impair -> élément du milieu
- Total pair -> moyenne des 2 éléments du milieu
*/

function findMedianSortedArrays(nums1, nums2) {

  let fusion = nums1.concat(nums2);

  function sort(a,b){
    return a - b;
  }


  fusion.sort();




  let nombre = fusion.length;

  if(nombre % 2 !== 0){
    return fusion[Math.floor(nombre/2)];
  }else{
    let moyenneMilieu1 = fusion[nombre/ 2 - 1];
    let moyenneMilieu2 = fusion[nombre/ 2];
    return (moyenneMilieu1 + moyenneMilieu2) / 2;

  }
} 


// Tests 

console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
