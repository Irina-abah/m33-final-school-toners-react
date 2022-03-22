function searchSchoolByKeyword(schools, input) {
  const searchedSchools = schools.filter(school => {
    if (input === '') {
      return school;
    } else if (school.school_name.toLowerCase().includes(input.toLowerCase())) {
      return school;
    }
  }) 

   return searchedSchools;
} 

export { searchSchoolByKeyword };