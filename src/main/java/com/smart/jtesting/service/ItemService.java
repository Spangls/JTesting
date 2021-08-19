package com.smart.jtesting.service;

import com.smart.jtesting.model.Item;
import com.smart.jtesting.model.ItemCategory;
import com.smart.jtesting.repos.ItemRepo;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.Set;

@Service
public class ItemService {

    private final ItemRepo itemRepo;

    public ItemService(ItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }

    public Set<Item> findAll() {
        return itemRepo.findAll();
    }

    public Item find(Integer id){
        return itemRepo.findById(id).orElse(null);
    }

    public Item find(String code){
        return itemRepo.findItemByCode(code);
    }

    public Item save(Item item){
        return itemRepo.save(item);
    }

    public Item save(String name, Double price, ItemCategory category){
        String code;
        do {
            code = createCode();
        } while (itemRepo.findItemByCode(code) != null);
        return itemRepo.save(new Item(code, name, price, category));
    }

    public void delete(Item item){
        itemRepo.delete(item);
    }

    private String createCode(){
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        sb.append(new char[]{(char)(random.nextInt(10)+48), (char)(random.nextInt(10)+48)});
        sb.append('-');
        sb.append(new char[]{(char)(random.nextInt(10)+48), (char)(random.nextInt(10)+48), (char)(random.nextInt(10)+48), (char)(random.nextInt(10)+48)});
        sb.append('-');
        sb.append(new char[]{(char)(random.nextInt(26)+97), (char)(random.nextInt(26)+97), (char)(random.nextInt(10)+48), (char)(random.nextInt(10)+48)});
        return sb.toString();
    }
}
