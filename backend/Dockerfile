FROM openjdk:11 as build

WORKDIR /backend

COPY . .

RUN ./gradlew build

CMD ["java", "-jar", "build/libs/backend-0.0.1-SNAPSHOT.jar"]

