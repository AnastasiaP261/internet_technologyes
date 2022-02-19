package petrichuck.anastasia.backend.service

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import petrichuck.anastasia.backend.dto.VacancyChangeDto
import petrichuck.anastasia.backend.dto.VacancyDto
import petrichuck.anastasia.backend.persistence.entity.Vacancy
import petrichuck.anastasia.backend.persistence.repository.VacancyRepository

@Service
@Transactional
class VacancyService(
    private val vacancyRepository: VacancyRepository,
    private val hrService: HrService
) {

    fun getAllVacancies() = vacancyRepository.findAll().toList()
        .map { it.toDto() }
        .also { logVacancies(it) }


    fun getVacancy(id: Long) = getById(id).orElse(null)
        ?.toDto()
        ?.also { println("Got vacancy $it") }

    fun getById(id: Long) = vacancyRepository.findById(id)

    fun getVacancyByHrId(hrId: Long) = vacancyRepository.findAllByHrId(hrId)
        .map { it.toDto() }
        .also { logVacancies(it) }


    fun createVacancy(vacancy: VacancyDto) = with(vacancy) {
        hrService.getHrById(hrId).orElse(null)
            ?.let {
                Vacancy(
                    name = name,
                    company = company,
                    description = description,
                    hr = it
                )
            }
            ?.let { vacancyRepository.save(it) }
            ?.toDto()
            ?.also { println("Saved vacancy $it") }
    }

    fun deleteVacancy(id: Long) = vacancyRepository.deleteById(id)
        .also { println("Deleted vacancy with $it") }

    fun changeVacancy(vacancyChangeDto: VacancyChangeDto) = with(vacancyChangeDto) {
        getById(id).orElse(null)
            ?.let { vacancy ->
                val hr = hrId?.let { hrService.getHrById(it).orElse(null) }
                vacancyRepository.updateVacancyByHrAndDescription(
                    vacancy.id!!,
                    hr ?: vacancy.hr,
                    description ?: vacancy.description
                )
            }
            ?.also { println("Changed vacancy with id ${vacancyChangeDto.id}") }
    }

    companion object {
        private fun logVacancies(vacancies: Collection<VacancyDto>) = vacancies
            .also { println("Got vacancies:") }
            .onEach { println("vacancy $it") }
    }
}