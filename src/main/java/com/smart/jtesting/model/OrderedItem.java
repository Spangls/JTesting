package com.smart.jtesting.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "ordered_item")
//@IdClass(OrderedItemId.class)
@NoArgsConstructor
@AllArgsConstructor
public class OrderedItem implements Serializable {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @Id
//    @JoinColumn(name = "order_id", referencedColumnName = "id")
//    @ManyToOne(optional = false, fetch = FetchType.LAZY)
//    private Order order;
//
//    @Id
//    @JoinColumn(name = "item_id", referencedColumnName = "id")
//    @ManyToOne(optional = false, fetch = FetchType.EAGER)
//    private Item item;

    @EmbeddedId
    private OrderedItemId id;

    @MapsId("item")
    @JoinColumn(name = "item_id", referencedColumnName = "id")
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Item item;

    @Column(name = "items_count", nullable = false)
    private Integer itemsCount;

    @Column(name = "item_price", nullable = false)
    private Double itemPrice;
}
