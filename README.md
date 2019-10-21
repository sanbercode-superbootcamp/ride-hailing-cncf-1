# Ride Hailing Cloud Native

a cloud native build of ride hailing applications

## Tugas

Modifikasi Dockerfile sehingga

Modifikasi compose file untuk `ride hailing` service mesh yang tediri dari service-service berikut. Gunakan image yg sama untuk service `track`, `position` & `monitoring`

1. track 

    service ini berjalan di port `3000`
    database di arahkan ke service `postgres`
    message bus di arahkan ke service `nats`

1. position

    service ini berjalan di port `3001`
    database di arahkan ke service `postgres`
    message bus di arahkan ke service `nats`

1. monitoring

    service ini berjalan di port `3002`
    service track di arahkan ke service `track`
    service position di arahkan ke service `position`

1. postgres

    service ini berjalan di `tcp` port `5432`
    dengan nama database `ridehailing`

1. nats
    
    service ini berjalan di `tcp` port `4222`

1. jaeger

    untuk konfigurasi jaeger dapat dilihat di 
    [https://www.jaegertracing.io/docs/1.6/getting-started/#all-in-one-docker-image](https://www.jaegertracing.io/docs/1.6/getting-started/#all-in-one-docker-image)