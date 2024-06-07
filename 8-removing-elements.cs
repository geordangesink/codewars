/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

using System.Linq;
  public static class Kata
    {
        public static object[] RemoveEveryOther(object[] arr)
        {
          return arr.Where((x,i)=> i%2 == 0).ToArray();
        }
    }