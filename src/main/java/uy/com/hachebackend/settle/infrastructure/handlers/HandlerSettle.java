package uy.com.hachebackend.settle.infrastructure.handlers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import uy.com.hachebackend.settle.application.mapper.mongo.BillMapper;
import uy.com.hachebackend.settle.application.mapper.mongo.MeetMapper;
import uy.com.hachebackend.settle.application.services.SettleService;
import uy.com.hachebackend.settle.infrastructure.dto.BillDto;
import uy.com.hachebackend.settle.infrastructure.dto.BillRequest;
import uy.com.hachebackend.settle.infrastructure.dto.ErrorDto;
import uy.com.hachebackend.settle.infrastructure.dto.MeetRequest;
import uy.com.hachebackend.settle.infrastructure.mongo.persistence.SettleRepositoryImpl;

import java.util.Objects;

import static uy.com.hachebackend.settle.infrastructure.handlers.HandlerUtils.createErrorResponse;
import static uy.com.hachebackend.settle.infrastructure.handlers.HandlerUtils.createSuccessResponse;

@Component
@RequiredArgsConstructor
@Slf4j
public class HandlerSettle {

    private final SettleRepositoryImpl mongoRepository;
    private final SettleService settleService;

    public Mono<ServerResponse> addMeetSettle(final ServerRequest request) {
        System.out.println("En Add Meet");
        return request.bodyToMono(MeetRequest.class)
                .flatMap(meetRequest -> {
                    String idUser = meetRequest.getIdUser();
                    String idMeet = meetRequest.getMeet().getIdMeet();

                    log.info("Parametros add meet: {} - {}", idUser, idMeet);

                    return settleService.addMeetSettle(idUser, MeetMapper.INSTANCE.convertDtoToDomainMongo(meetRequest.getMeet()), mongoRepository)
                            .flatMap(user -> createSuccessResponse("Encuentro agregado."))
                            .switchIfEmpty(createErrorResponse("No hubo cambios."))
                            .onErrorResume((error) -> {
                                log.error(">>>>> Error 1: {}", error.getMessage());
                                return createErrorResponse(error.getMessage());
                            });
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return createErrorResponse(error.getMessage());
                });
    }

    public Mono<ServerResponse> updateMeetSettle(final ServerRequest request) {
        System.out.println("En Update Meet");
        return request.bodyToMono(MeetRequest.class)
                .flatMap(meetRequest -> {
                    String idUser = meetRequest.getIdUser();
                    String idMeet = meetRequest.getMeet().getIdMeet();

                    log.info("Parametros update meet: {} - {}", idUser, idMeet);

                    return settleService.updateMeetSettle(idUser, MeetMapper.INSTANCE.convertDtoToDomainMongo(meetRequest.getMeet()), mongoRepository)
                            .flatMap(user -> createSuccessResponse("Encuentro modificado."))
                            .switchIfEmpty(createErrorResponse("No hubo cambios."))
                            .onErrorResume((error) -> {
                                log.error(">>>>> Error 1: {}", error.getMessage());
                                return createErrorResponse(error.getMessage());
                            });
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return createErrorResponse(error.getMessage());
                });

    }

    public Mono<ServerResponse> closeMeetSettle(final ServerRequest request) {
        System.out.println("En close Meet");
        return request.bodyToMono(MeetRequest.class)
                .flatMap(meetRequest -> {
                    String idUser = meetRequest.getIdUser();
                    String idMeet = meetRequest.getMeet().getIdMeet();

                    log.info("Parametros close meet: {} - {}", idUser, idMeet);

                    if (Objects.nonNull(idUser) && Objects.nonNull(idMeet)) {
                        return settleService.closeMeetSettle(idUser, idMeet, mongoRepository)
                                .flatMap(user -> ServerResponse.ok().body(Mono.just("Encuentro cerrado."), String.class))
                                .switchIfEmpty(ServerResponse.ok()
                                        .body(Mono.just(ErrorDto.builder()
                                                .message("No hubo cambios.")
                                                .codeError(0).build()), ErrorDto.class))
                                .onErrorResume((error) -> {
                                    log.error(">>>>> Error 1: {}", error.getMessage());
                                    return ServerResponse.badRequest()
                                            .body(Mono.just(ErrorDto.builder().message(error.getMessage()).codeError(0).build()),
                                                    ErrorDto.class);
                                });
                    } else {
                        return ServerResponse.badRequest()
                                .body(Mono.just(ErrorDto.builder().message("Usuario no encontrado").codeError(0).build()),
                                        ErrorDto.class);
                    }
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return ServerResponse.badRequest()
                            .body(Mono.just(ErrorDto.builder().message(error.getMessage()).codeError(0).build()),
                                    ErrorDto.class);
                });

    }

    public Mono<ServerResponse> removeMeetSettle(final ServerRequest request) {
        System.out.println("En Remove Meet");
        return request.bodyToMono(MeetRequest.class)
                .flatMap(meetRequest -> {
                    String idUser = meetRequest.getIdUser();
                    String idMeet = meetRequest.getMeet().getIdMeet();


                    log.info("Parametros remove meet: {} - {}", idUser, idMeet);


                    if (Objects.nonNull(idUser) && Objects.nonNull(idMeet)) {
                        return settleService.removeMeetSettle(idUser, idMeet, mongoRepository)
                                .flatMap(user -> ServerResponse.ok().body(Mono.just("Encuentro eliminado."), String.class))
                                .switchIfEmpty(ServerResponse.ok()
                                        .body(Mono.just(ErrorDto.builder()
                                                .message("No hubo cambios.")
                                                .codeError(0).build()), ErrorDto.class))
                                .onErrorResume((error) -> {
                                    log.error(">>>>> Error 1: {}", error.getMessage());
                                    return ServerResponse.badRequest()
                                            .body(Mono.just(ErrorDto.builder().message(error.getMessage()).codeError(0).build()),
                                                    ErrorDto.class);
                                });
                    } else {
                        return ServerResponse.badRequest()
                                .body(Mono.just(ErrorDto.builder().message("Usuario no encontrado").codeError(0).build()),
                                        ErrorDto.class);
                    }
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return ServerResponse.badRequest()
                            .body(Mono.just(ErrorDto.builder().message(error.getMessage()).codeError(0).build()),
                                    ErrorDto.class);
                });

    }

    public Mono<ServerResponse> addBillSettle(final ServerRequest request) {
        System.out.println("En Add Bill");
        return request.bodyToMono(BillRequest.class)
                .flatMap(billRequest ->
                {
                    String idUser = billRequest.getIdUser();
                    String idMeet = billRequest.getIdMeet();
                    BillDto bill = billRequest.getBill();

                    log.info("Parametros add bill: {} - {} - {}", idUser, idMeet, bill.getReference());

                    if (Objects.nonNull(idUser) && Objects.nonNull(idMeet)) {
                        return settleService.addBillListMeetSettle(idUser, idMeet, BillMapper.INSTANCE.convertDtoToDomainMongo(bill), mongoRepository)
                                .flatMap(user -> createSuccessResponse("Pago agregado."))
                                .switchIfEmpty(createErrorResponse("Pago no agregado."))
                                .onErrorResume((error) -> {
                                    log.error(">>>>> Error 1: {}", error.getMessage());
                                    return createErrorResponse(error.getMessage());
                                });
                    } else {
                        return createErrorResponse("Usuario no encontrado");
                    }
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return createErrorResponse(error.getMessage());
                });
    }

    public Mono<ServerResponse> updateBillSettle(final ServerRequest request) {
        System.out.println("En Update Bill");
        return request.bodyToMono(BillRequest.class)
                .flatMap(billRequest -> {
                    String idUser = billRequest.getIdUser();
                    String idMeet = billRequest.getIdMeet();
                    BillDto bill = billRequest.getBill();

                    log.info("Parametros add bill: {} - {} - {}", idUser, idMeet, bill.getReference());

                    return settleService.updateBillSettle(idUser, idMeet, BillMapper.INSTANCE.convertDtoToDomainMongo(bill), mongoRepository)
                            .flatMap(user -> createSuccessResponse("Pago modificado."))
                            .switchIfEmpty(createErrorResponse("No hubo cambios."))
                            .onErrorResume((error) -> {
                                log.error(">>>>> Error 1: {}", error.getMessage());
                                return createErrorResponse(error.getMessage());
                            });
                })
                .onErrorResume((error) -> {
                    log.error(">>>>> Error 2: {}", error.getMessage());
                    return createErrorResponse(error.getMessage());
                });
    }

    public Mono<ServerResponse> removeBillSettle(final ServerRequest request) {
        System.out.println("En Remove Bill");
        return request.bodyToMono(BillRequest.class)
                .flatMap(billRequest -> {
                            String idUser = billRequest.getIdUser();
                            String idMeet = billRequest.getIdMeet();
                            String idBill = billRequest.getBill().getIdBill();

                            log.info("Parametros add bill: {} - {} - {}", idUser, idMeet, idBill);

                            if (Objects.nonNull(idUser) && Objects.nonNull(idMeet) && Objects.nonNull(idBill)) {
                                return settleService.removeBillSettle(idUser, idMeet, idBill, mongoRepository)
                                        .flatMap(user -> createSuccessResponse("Pago eliminado."))
                                        .switchIfEmpty(createErrorResponse("No hubo cambios."))
                                        .onErrorResume((error) -> {
                                            log.error(">>>>> Error 1: {}", error.getMessage());
                                            return createErrorResponse(error.getMessage());
                                        });
                            } else {
                                return createErrorResponse("Usuario no encontrado");
                            }
                        }
                )
                .onErrorResume((error) -> {
                    log.error(">>>>> Error: {}", error.getMessage());
                    return createErrorResponse(error.getMessage());
                });

    }

}
