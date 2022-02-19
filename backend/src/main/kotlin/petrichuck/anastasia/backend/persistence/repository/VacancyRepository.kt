package petrichuck.anastasia.backend.persistence.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import petrichuck.anastasia.backend.persistence.entity.Hr
import petrichuck.anastasia.backend.persistence.entity.Vacancy

@Repository
interface VacancyRepository : JpaRepository<Vacancy, Long> {
    @Query("select v from Vacancy v where v.hr.id = :id")
    fun findAllByHrId(@Param("id") id: Long): List<Vacancy>

    @Modifying
    @Query("update Vacancy v set v.hr=:hr, v.description=:description where v.id=:id")
    fun updateVacancyByHrAndDescription(
        @Param("id") id: Long,
        @Param("hr") hr: Hr,
        @Param("description") description: String?
    )
}