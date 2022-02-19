package petrichuck.anastasia.backend.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import petrichuck.anastasia.backend.dto.VacancyChangeDto
import petrichuck.anastasia.backend.dto.VacancyDto
import petrichuck.anastasia.backend.service.VacancyService

@RestController
@RequestMapping("/api/vacancy")
@CrossOrigin(
    origins = ["http://localhost:3000"],
    maxAge = 3600
)
class VacancyController(
    private val vacancyService: VacancyService
) {

    @GetMapping
    fun getVacancies() = vacancyService.getAllVacancies()

    @GetMapping("{id}")
    fun getVacancy(@PathVariable("id") id: Long) = vacancyService.getVacancy(id)

    @GetMapping("/hr/{id}")
    fun getVacancyByHr(@PathVariable("id") hrId: Long) = vacancyService.getVacancyByHrId(hrId)

    @PostMapping
    fun createVacancy(@RequestBody vacancy: VacancyDto) = vacancyService.createVacancy(vacancy)

    @DeleteMapping("{id}")
    fun deleteVacancy(@PathVariable("id") id: Long) = vacancyService.deleteVacancy(id)

    @PutMapping
    fun changeVacancy(@RequestBody vacancyChangeDto: VacancyChangeDto) = vacancyService.changeVacancy(vacancyChangeDto)
}