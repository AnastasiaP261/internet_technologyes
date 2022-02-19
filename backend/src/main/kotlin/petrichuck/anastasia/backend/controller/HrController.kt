package petrichuck.anastasia.backend.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import petrichuck.anastasia.backend.persistence.entity.Hr
import petrichuck.anastasia.backend.service.HrService

@RestController
@RequestMapping("/api/hr")
@CrossOrigin(
    origins = ["http://localhost:3000"],
    maxAge = 3600
)
class HrController(
    private val hrService: HrService
) {

    @GetMapping
    fun getHrs() = hrService.getAllHrs()

    @GetMapping("{id}")
    fun getHr(@PathVariable("id") id: Long) = hrService.getHr(id)

    @PostMapping
    fun createHr(@RequestBody hr: Hr) = hrService.createHr(hr)

    @DeleteMapping("{id}")
    fun deleteHr(@PathVariable("id") id: Long) = hrService.deleteHr(id)
}