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
public class PaymentCreateDTO {
    private String currency;
    private BigDecimal amount;

    private AppUser paymentUser;
    private AppOrder paymentOrder;

    public Payment toPayment(){
        return Payment.builder()
                .currency(this.currency)
                .amount(this.amount)
                .paymentUser(this.paymentUser)
                .paymentOrder(this.paymentOrder)
                .build();
    }

    public static PaymentCreateDTO of(Payment payment){
        return PaymentCreateDTO.builder()
                .currency(payment.getCurrency())
                .amount(payment.getAmount())
                .paymentUser(payment.getPaymentUser())
                .paymentOrder(payment.getPaymentOrder())
                .build();
    }
}
