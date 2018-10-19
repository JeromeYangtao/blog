package com.study;

import java.util.*;


//描述
//        给一个字符串 (只包含26个字母)，统计每个字母出现的次数 (返回类型为HashMap)
//
//        样例
//        给出 numbers = "alexyang", 返回一个HashMap counts, 里面包含所有26个字母出现的次数


public class WordCounter {
    public HashMap count(String input) {
        int len = input.length();
        char[] inputArray = input.toLowerCase().toCharArray();
        HashMap<Character, Integer> result = new HashMap<>();
        for (int i = 0; i < len; i++) {
            if (result.containsKey(inputArray[i])) {
                int number = result.get(inputArray[i]);
                result.put(inputArray[i], ++number);
            } else {
                result.put(inputArray[i], 1);
            }
        }
        return result;
    }
}
