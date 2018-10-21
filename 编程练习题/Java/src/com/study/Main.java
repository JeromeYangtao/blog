package com.study;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        // write your code here
        Solution solution = new Solution();
        System.out.println(solution.isValid("{()}"));
        System.out.println(solution.isValid(""));
        System.out.println(solution.isValid("{[]{"));
        System.out.println(solution.isValid("{}{()[]]"));
        System.out.println(solution.isValid("{}[]()"));
    }
}
