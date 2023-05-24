package uy.com.hachebackend.settle.infrastructure.mongo.persistence;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import uy.com.hachebackend.settle.application.mapper.CurrencyMapper;
import uy.com.hachebackend.settle.domain.model.CurrencyDomain;
import uy.com.hachebackend.settle.domain.repository.ICurrencyPersist;
import uy.com.hachebackend.settle.infrastructure.mongo.entity.CurrencyISOEntity;

@Component
@RequiredArgsConstructor
public class CurrencyRepositoryImpl implements ICurrencyPersist {

    private final ICurrencyRepository currencyRepository;

    @Override
    public Mono<CurrencyDomain> saveCurrency(final String code, final String name, final Integer num, final String country) {
        CurrencyISOEntity currency = CurrencyISOEntity.builder().codeISO(code).name(name).numISO(num).country(country).build();
        return currencyRepository.save(currency).map(CurrencyMapper.INSTANCE::convertEntityToDomain);
    }

    @Override
    public Flux<CurrencyDomain> getAllCurrency() {
        return currencyRepository.findAll().map(CurrencyMapper.INSTANCE::convertEntityToDomain);
    }
}