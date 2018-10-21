package com.study;

public class Main {

    public static void main(String[] args) {
        // write your code here
        IsValid solution = new IsValid();
        System.out.println(solution.solution("{()}"));
        System.out.println(solution.solution(""));
        System.out.println(solution.solution("{[]{"));
        System.out.println(solution.solution("{}{()[]]"));
        System.out.println(solution.solution("{}[]()"));
    }
}
