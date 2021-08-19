package com.smart.jtesting.repos;

import com.smart.jtesting.model.Item;
import com.smart.jtesting.model.ItemCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface ItemRepo extends CrudRepository<Item, Integer> {
    Set<Item> findAll();
    Item findItemByCode(String code);
    Set<Item> findAllByCategory(ItemCategory category);
}
