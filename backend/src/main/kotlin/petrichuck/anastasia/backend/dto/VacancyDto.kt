package petrichuck.anastasia.backend.dto

data class VacancyDto(
    val id: Long?,
    val name: String,
    val company: String,
    val description: String?,
    val hrId: Long
)