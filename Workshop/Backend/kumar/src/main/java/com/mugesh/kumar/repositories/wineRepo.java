package com.mugesh.kumar.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mugesh.kumar.models.Wine;
public interface wineRepo extends JpaRepository<Wine, Integer> {
    
}
