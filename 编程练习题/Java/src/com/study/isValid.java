package com.study;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Stack;

//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

public class IsValid {
    private HashMap<Character, Character> map;

    public IsValid() {
        this.map = new HashMap<>();
        this.map.put('(', ')');
        this.map.put('{', '}');
        this.map.put('[', ']');
    }

    public boolean solution(String s) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char node = s.charAt(i);
            if (this.map.containsKey(node)) {
                stack.push(node);
            } else {
                if (stack.empty()) {
                    return false;
                }
                char pop = stack.pop();
                if (this.map.get(pop) != node) {
                    return false;
                }
            }
        }
        return stack.empty();
    }
}
