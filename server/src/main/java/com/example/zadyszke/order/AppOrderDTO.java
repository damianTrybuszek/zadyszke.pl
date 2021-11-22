package com.example.zadyszke.order;

import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppOrderDTO {
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

    private AppUser seller;
    private AppUser buyer;

    public AppOrder toOrder() {
        return AppOrder.builder()
                .id(this.id)
                .price(this.price)
                .commissionFee(this.commissionFee)
                .totalPrice(this.totalPrice)
                .orderAddress(this.orderAddress)
                .orderCreationTime(this.orderCreationTime)
                .status(this.status)
                .paymentMethod(this.paymentMethod)
                .paymentTime(this.paymentTime)
                .isPaid(this.isPaid)
                .isCompleted(this.isCompleted)
                .orderCompletionTime(this.orderCompletionTime)
                .requirements(this.requirements)
                .buyer(this.buyer)
                .seller(this.seller)
                .build();
    }
    public static AppOrderDTO of(AppOrder appOrder){
        return AppOrderDTO.builder()
                .id(appOrder.getId())
                .price(appOrder.getPrice())
                .commissionFee(appOrder.getCommissionFee())
                .totalPrice(appOrder.getTotalPrice())
                .orderAddress(appOrder.getOrderAddress())
                .orderCreationTime(appOrder.getOrderCreationTime())
                .status(appOrder.getStatus())
                .paymentMethod(appOrder.getPaymentMethod())
                .paymentTime(appOrder.getPaymentTime())
                .isPaid(appOrder.isPaid())
                .isCompleted(appOrder.isCompleted())
                .orderCompletionTime(appOrder.getOrderCompletionTime())
                .requirements(appOrder.getRequirements())
                .buyer(appOrder.getBuyer())
                .seller(appOrder.getSeller())
                .build();
    }
}
