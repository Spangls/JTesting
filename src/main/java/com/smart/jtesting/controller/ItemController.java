package com.smart.jtesting.controller;

import com.smart.jtesting.model.Item;
import com.smart.jtesting.model.ItemCategory;
import com.smart.jtesting.service.ItemService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Controller
@RequestMapping("/item")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }

    @ResponseBody
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public boolean createItem(@RequestParam String name, @RequestParam Double price, @RequestParam ItemCategory category){
        itemService.save(name, price, category);
        return true;
    }

    @ResponseBody
    @RequestMapping(value = "/loadItems")
    public Map<String, Set<Item>> loadItems(){
        Map<String, Set<Item>> output = new HashMap<>();
        output.put("items", itemService.findAll());
        return output;
    }

    @ResponseBody
    @RequestMapping(value = "/loadCategories")
    public Map<String, Map<ItemCategory, String>> loadItemCategories(){
        Map<ItemCategory, String> categories = new HashMap<>();
        for (ItemCategory category: ItemCategory.values()) {
            categories.put(category, category.getTitle());
        }
        Map<String, Map<ItemCategory, String>> output = new HashMap<>();
        output.put("categories", categories);
        return output;
    }

    @ResponseBody
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public boolean deleteItem(@RequestParam Item item){
        itemService.delete(item);
        return true;
    }

    @ResponseBody
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public boolean updateItem(@RequestParam Item item){
        itemService.save(item);
        return true;
    }
}
