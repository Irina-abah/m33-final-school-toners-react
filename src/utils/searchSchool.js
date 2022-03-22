function searchSchoolByKeyword(schools, input) {
  const searchedSchools = schools.filter(school => {
    return school.school_name.toLowerCase().includes(input.toLowerCase())
   }) 

   return searchedSchools
} 

export { searchSchoolByKeyword };