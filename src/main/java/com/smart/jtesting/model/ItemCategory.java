package com.smart.jtesting.model;

public enum ItemCategory {
    BOOK("книга"), PEN("ручка"), PENCIL("карандаш"), NOTE("блокнот");

    private String title;

    ItemCategory(String title) {
        this.title = title;
    }

    public String getTitle(){
        return title;
    }
}
