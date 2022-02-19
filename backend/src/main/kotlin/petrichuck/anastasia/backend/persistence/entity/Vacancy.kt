package petrichuck.anastasia.backend.persistence.entity

import org.springframework.data.jpa.domain.AbstractPersistable
import petrichuck.anastasia.backend.dto.VacancyDto
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "vacancy")
data class Vacancy(
    @Column(name = "name", nullable = false)
    val name: String?,
    @Column(name = "company", nullable = false)
    val company: String?,
    @Column(name = "description")
    val description: String?,
    @ManyToOne(fetch = FetchType.LAZY, cascade = [CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH])
    val hr: Hr
) : AbstractPersistable<Long>() {
    override fun toString(): String = super.toString()

    override fun hashCode(): Int = super.hashCode()

    fun toDto() = VacancyDto(
        id = id,
        name = name!!,
        company = company!!,
        description = description,
        hrId = hr.id!!
    )
}