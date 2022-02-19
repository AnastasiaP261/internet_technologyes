package petrichuck.anastasia.backend.config

import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.transaction.annotation.EnableTransactionManagement

@EnableTransactionManagement
@EnableJpaAuditing
@EntityScan(basePackages = [
    "petrichuck.anastasia.backend.persistence"
])
@EnableJpaRepositories(basePackages = [
    "petrichuck.anastasia.backend.persistence"
])
@Configuration
class JpaConfig
