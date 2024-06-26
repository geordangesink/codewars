/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

using System;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps){
    int number = 0;
    foreach(bool sheep in sheeps){
      if (sheep){
        number += 1;
      }
    }
    return number;
  }
}