package com.mugesh.kumar.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.mugesh.kumar.models.Wine;
import com.mugesh.kumar.services.apiService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class apiController {
    @Autowired
    private apiService api;

    @GetMapping("/patient/{id}")
    public Wine getPatient(@PathVariable int id) {
        return api.getPatient(id);
    }

    @PostMapping("/patientadd")
    public String addPatient(@RequestBody Wine p) {
        return api.addPatient(p);
    }

    @PutMapping("/patientupdate/{id}")
    public String updatePatient(@RequestBody Wine p, @PathVariable int id) {
        return api.updatePatient(p, id);
    }

    @DeleteMapping("/patientdelete/{id}")
    public String deletePatient(@PathVariable int id) {
        return api.deletePatient(id);
    }

}
