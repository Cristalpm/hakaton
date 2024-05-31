package ru.hotfix2024.AirfareCalculationService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hotfix2024.AirfareCalculationService.model.LocationEntity;

public interface LocationRepository extends JpaRepository<LocationEntity, Long> {
}
