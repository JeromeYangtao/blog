package com.study;

import java.util.*;

public class TwoSum {


//     暴力穷举 n^2
//    public int[] twoSum(int[] nums, int target) {
//        int len = nums.length;
//        for (int i = 0; i < len; i++) {
//            for (int j = i + 1; j < len; j++) {
//                if (nums[i] + nums[j] == target) {
//                    return new int[]{i, j};
//                }
//            }
//        }
//        throw new IllegalArgumentException("No two sum solution");
//    }

//    两遍哈希表  n
//    public int[] twoSum(int[] nums, int target) {
//        Map<Integer, Integer> map = new HashMap<>();
//        for (int i = 0; i < nums.length; i++) {
//            map.put(nums[i], i);
//        }
//        for (int i = 0; i < nums.length; i++) {
//            int complement = target - nums[i];
//            if (map.containsKey(complement) && map.get(complement) != i) {
//                return new int[]{i, map.get(complement)};
//            }
//        }
//        throw new IllegalArgumentException("No two sum solution");
//    }

//    一遍哈希表  n
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[]{i, map.get(complement)};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
