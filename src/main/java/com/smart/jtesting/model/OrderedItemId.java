package com.smart.jtesting.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OrderedItemId implements Serializable {

    private Integer id;
    private Integer order;
    private Integer item;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        OrderedItemId that = (OrderedItemId) o;

        if (!Objects.equals(id, that.id)) return false;
        if (!Objects.equals(order, that.order)) return false;
        return Objects.equals(item, that.item);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(id);
        result = 31 * result + (Objects.hashCode(order));
        result = 31 * result + (Objects.hashCode(item));
        return result;
    }
}
