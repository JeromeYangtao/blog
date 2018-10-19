package com.study;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        // write your code here
        WordCounter wordCounter = new WordCounter();
        HashMap test1 = wordCounter.count("");
        System.out.println(test1);
        HashMap test2 = wordCounter.count("ABCBA");
        System.out.println(test2);
        HashMap test3 = wordCounter.count("abcAB");
        System.out.println(test3);
        HashMap test4 = wordCounter.count("asdfghj");
        System.out.println(test4);
        HashMap test5 = wordCounter.count("aaaa");
        System.out.println(test5);

    }
}
