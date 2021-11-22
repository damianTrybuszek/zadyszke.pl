package com.example.zadyszke.payment;

import com.example.zadyszke.order.AppOrder;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Payment {

    @Id
    @GeneratedValue
    private long id;

    private LocalDateTime registeredTime;
    private String currency;
    private BigDecimal amount;
    private boolean isSuccessful;

    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private AppUser paymentUser;

    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "order_id")
    private AppOrder paymentOrder;

    public void modify(Payment payment) {
        this.setSuccessful(true);
    }
}
