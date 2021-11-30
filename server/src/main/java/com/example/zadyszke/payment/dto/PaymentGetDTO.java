package com.example.zadyszke.payment.dto;

import com.example.zadyszke.order.AppOrder;
import com.example.zadyszke.payment.Payment;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PaymentGetDTO {
    private long id;
    private LocalDateTime registeredTime;
    private String currency;
    private BigDecimal amount;
    private boolean isSuccessful;

    private AppUser paymentUser;
    private AppOrder paymentOrder;

    public Payment toPayment(){
        return Payment.builder()
                .id(this.id)
                .registeredTime(this.registeredTime)
                .currency(this.currency)
                .amount(this.amount)
                .isSuccessful(this.isSuccessful)
                .paymentUser(this.paymentUser)
                .paymentOrder(this.paymentOrder)
                .build();
    }

    public static PaymentGetDTO of(Payment payment){
        return PaymentGetDTO.builder()
                .id(payment.getId())
                .registeredTime(payment.getRegisteredTime())
                .currency(payment.getCurrency())
                .amount(payment.getAmount())
                .isSuccessful(payment.isSuccessful())
                .paymentUser(payment.getPaymentUser())
                .paymentOrder(payment.getPaymentOrder())
                .build();
    }
}
