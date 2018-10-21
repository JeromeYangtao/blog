package com.study;

public class Main {

    public static void main(String[] args) {
        int[] arr = new int[]{5, 4, 8, 6, 3, 9, 0, 1, 7, 2};
        Solution solution = new Solution();
        solution.quickSort(arr, 0, arr.length - 1);
        printArray(arr);
    }


    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

}
