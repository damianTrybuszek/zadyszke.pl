package com.example.zadyszke.payment.dto;

import com.example.zadyszke.order.AppOrder;
import com.example.zadyszke.payment.Payment;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PaymentModifyDTO {
    private boolean isSuccessful;

    public Payment toPayment(){
        return Payment.builder()
                .isSuccessful(this.isSuccessful)
                .build();
    }

    public static PaymentModifyDTO of(Payment payment){
        return PaymentModifyDTO.builder()
                .isSuccessful(payment.isSuccessful())
                .build();
    }
}
