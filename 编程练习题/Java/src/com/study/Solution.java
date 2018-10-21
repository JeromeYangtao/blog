package com.study;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Stack;

public class Solution {
    //    快排
    void quickSort(int[] arr, int start, int end) {
        if (start >= end) {
            return;
        }
        int pivot = arr[start];
        int low = start;
        int height = end;
        while (low < height) {
            while (low < height && arr[height] >= pivot) {
                height--;
            }
            arr[low] = arr[height];
            while (low < height && arr[low] <= pivot) {
                low++;
            }
            arr[height] = arr[low];
        }
        arr[low] = pivot;
        quickSort(arr, start, low - 1);
        quickSort(arr, low + 1, end);
    }

    //136. 只出现一次的数字
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> numMap = new HashMap<>();
        for (int num : nums) {
            if (numMap.containsKey(num)) {
                numMap.put(num, 2);
            } else {
                numMap.put(num, 1);
            }
        }

        for (int num : numMap.keySet()) {
            if (numMap.get(num) == 1) {
                return num;
            }
        }
        return 0;
    }
}
