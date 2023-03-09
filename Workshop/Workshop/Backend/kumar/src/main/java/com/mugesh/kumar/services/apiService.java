package com.mugesh.kumar.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mugesh.kumar.models.Wine;
import com.mugesh.kumar.repositories.wineRepo;
@Service
public class apiService {
    @Autowired
    private wineRepo repo;

   	public Wine getPatient(int id) {
         return repo.findById(id).orElse(null);
	}

    public String addPatient(Wine p) {
        repo.save(p);
        return "Patient added";
    }

    public String updatePatient(Wine p, int id) {
        repo.findById(id).orElse(null);
        repo.saveAndFlush(p);
        return "Patient updated";
    }

    public String deletePatient(int id) {
        repo.deleteById(id);
        return "Patient deleted";
    }
    
}
