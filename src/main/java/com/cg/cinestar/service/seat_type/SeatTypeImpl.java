package com.cg.cinestar.service.seat_type;

import com.cg.cinestar.model.SeatType;
import com.cg.cinestar.repository.SeatTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class SeatTypeImpl implements ISeatTypeService{

    @Autowired
    private SeatTypeRepository seatTypeRepository;

    @Override
    public List<SeatType> findAll() {
        return seatTypeRepository.findAll();
    }

    @Override
    public Optional<SeatType> findById(Long id) {
        return seatTypeRepository.findById(id);
    }

    @Override
    public SeatType getById(Long id) {
        return null;
    }

    @Override
    public SeatType save(SeatType seatType) {
        return seatTypeRepository.save(seatType);
    }

    @Override
    public void remove(Long id) {
        seatTypeRepository.deleteById(id);
    }
}
