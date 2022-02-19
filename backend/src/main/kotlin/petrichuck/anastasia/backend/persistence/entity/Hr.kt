package petrichuck.anastasia.backend.persistence.entity

import org.springframework.data.jpa.domain.AbstractPersistable
import petrichuck.anastasia.backend.dto.HrDto
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "hr")
data class Hr(
    @Column(name = "last_name")
    val lastName: String?,
    @Column(name = "first_name", nullable = false)
    val firstName: String?,
    @Column(name = "middle_name")
    val middleName: String?,
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "hr")
    val vacancies: Set<Vacancy>?
) : AbstractPersistable<Long>() {
    override fun toString(): String = super.toString()

    override fun hashCode(): Int = super.hashCode()

    fun toDto() = HrDto(
        id = id,
        lastName = lastName,
        firstName = firstName,
        middleName = middleName,
        vacanciesCount = vacancies?.size ?: 0
    )
}