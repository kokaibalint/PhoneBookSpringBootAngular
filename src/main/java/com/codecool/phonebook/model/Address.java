package com.codecool.phonebook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @NonNull
    private String FirstName;
    @NonNull
    private String LastName;
    @NonNull
    private int Age;
    @NonNull
    private String Email;
    @NonNull
    private String City;
    @NonNull
    private String Street;
    private int HouseNumber;
    private String Description;
    
}
