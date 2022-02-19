package petrichuck.anastasia.backend.persistence.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import petrichuck.anastasia.backend.persistence.entity.Hr

@Repository
interface HrRepository: JpaRepository<Hr, Long>