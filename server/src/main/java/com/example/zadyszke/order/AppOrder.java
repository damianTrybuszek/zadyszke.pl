package com.example.zadyszke.order;

import com.example.zadyszke.user.AppUser;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private BigDecimal price;
    private BigDecimal commissionFee;
    private BigDecimal totalPrice;
    private String orderAddress;
    private LocalDateTime orderCreationTime;
    private OrderStatus status;
    private PaymentMethod paymentMethod;
    private LocalDateTime paymentTime;
    private boolean isPaid;
    private boolean isCompleted;
    private LocalDateTime orderCompletionTime;
    private String requirements;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}) //TODO do not cascade the deletes
    @JoinColumn(name = "seller_id")
    private AppUser seller;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}) //TODO do not cascade the deletes
    @JoinColumn(name = "buyer_id")
    private AppUser buyer;


    public void modify(AppOrder modifiedAppOrder) {
        modifyRequirements(modifiedAppOrder);
    }

    public void modifyRequirements(AppOrder modifiedAppOrder) {
        if (StringUtils.isNotBlank(modifiedAppOrder.getRequirements())){
            this.setRequirements(modifiedAppOrder.getRequirements());
        }
    }
}
