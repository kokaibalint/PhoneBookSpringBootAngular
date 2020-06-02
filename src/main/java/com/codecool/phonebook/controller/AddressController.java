package com.codecool.phonebook.controller;

import com.codecool.phonebook.model.Address;
import com.codecool.phonebook.repository.AddressRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/address")
public class AddressController {

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @GetMapping("/all")
    public List<Address> all(){
       List<Address> allCategories = (List<Address>) this.addressRepository.findAll();
        return allCategories;
    }

    @PostMapping
    public Address save(@RequestBody Address address) {

        this.addressRepository.save(address);

        return address;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        this.addressRepository.deleteById(id);
    }
}
