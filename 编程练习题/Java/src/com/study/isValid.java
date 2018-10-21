package com.study;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Stack;

//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

public class isValid {
    public boolean isValid(String s) {
        String[] left = {"{", "[", "("};
        HashMap<String, String> map = new HashMap<>();
        map.put("(", ")");
        map.put("{", "}");
        map.put("[", "]");
        Stack<String> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            String node = String.valueOf(s.toCharArray()[i]);
            if (Arrays.asList(left).contains(node)) {
                stack.push(node);
            } else {
                if(stack.empty()){
                    return false;
                }
                String pop = stack.pop();
                String test = map.get(pop);
                if (!test.equals(node)) {
                    return false;
                }
            }
        }
        if (!stack.empty()) {
            return false;
        }
        return true;
    }
}
