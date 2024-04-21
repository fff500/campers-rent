export const useGenerateFeatureItems = (camper) => {
  const {
    adults,
    transmission,
    engine,
    ...details
  } = camper;

  const { beds, hob, gas, water } = details;

  return {
    adults: `${adults} Adults`,
    transmission: `${transmission}`,
    engine: `${engine}`,
    airConditioner: 'AC',
    bathroom: 'Bathroom',
    kitchen: 'Kitchen',
    beds: `${beds} Beds`,
    TV: 'TV',
    CD: 'CD',
    radio: 'Radio',
    shower: 'Shower',
    toilet: 'Toilet',
    freezer: 'Freezer',
    hob: `${hob} hob`,
    microwave: 'Microwave',
    gas: `${gas} gas`,
    water: `${water} water`,
  }
}
