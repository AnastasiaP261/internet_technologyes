package petrichuck.anastasia.backend.dto

data class HrDto(
    val id: Long?,
    val lastName: String?,
    val firstName: String?,
    val middleName: String?,
    val vacanciesCount: Int
)