package com.smart.jtesting.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderId implements Serializable {

    private Integer id;
    private Integer customer;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderId orderId1 = (OrderId) o;
        return Objects.equals(id, orderId1.id) &&
                Objects.equals(customer, orderId1.customer);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, customer);
    }
}
