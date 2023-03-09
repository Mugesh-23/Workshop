package com.mugesh.kumar.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "wine")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Wine {
    
    @Id
    private int id;
    private String name;
    private String type;
    private String address;
    private String phone;
}
