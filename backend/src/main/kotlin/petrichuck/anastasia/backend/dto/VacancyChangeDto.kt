package petrichuck.anastasia.backend.dto

data class VacancyChangeDto(
    val id: Long,
    val description: String?,
    val hrId: Long?
)