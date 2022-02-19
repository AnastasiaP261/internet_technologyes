package petrichuck.anastasia.backend.service

import org.springframework.stereotype.Service
import petrichuck.anastasia.backend.persistence.entity.Hr
import petrichuck.anastasia.backend.persistence.repository.HrRepository

@Service
class HrService(
    private val hrRepository: HrRepository
) {

    fun getAllHrs() = hrRepository.findAll().toList()
        .also { println("Got hrs:") }
        .map { it.toDto() }
        .onEach { println("Got hr $it") }

    fun getHr(id: Long) = getHrById(id).orElse(null)
        ?.toDto()
        ?.also { println("Got hr $it") }

    fun getHrById(id: Long) = hrRepository.findById(id)

    fun createHr(hr: Hr) = hrRepository.save(hr)
        .toDto()
        .also { println("Saved hr $it") }

    fun deleteHr(id: Long) = hrRepository.deleteById(id)
        .also { println("Delete hr with it $id") }
}