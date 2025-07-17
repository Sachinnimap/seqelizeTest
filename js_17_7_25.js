    
-- Show the most recent job applied to by each candidate.

select  a.name ,  from candidate a
group by a.application_date 
having a.application_date = (select  Max(b.application_date) from candidate b )


--List all candidates with their experience level: Beginner (<3), Intermediate (3-5), Expert (>5).

select a.name ,
CASE 
when a.experience < 3  THEN "BEGINNER"
when a.experience  BETWEEN 3 AND 5 THEN "INTERMEDIATE"
ELSE "EXPERT"
END as experience_level
from candidate a;



--List all jobs with their salary level: Low (< $85,000), Medium ($85,000–$100,000), High (> $100,000).


select a.title,
case 
when salary < 85000 then "LOW"
when salary between 85000 and 100000 then "MEDIUM"
when salary > 100000 then "HIGH"
END as salary_level
from job a


-- select * from sql_test.candidate

select a.name , 
case 
when  DATEDIFF('2024-07-13' ,a.application_date) < 7 then "RECENT"
else "OLDER"
end as label
from candidate a;



--For each candidate, label their application as "Recent" (within last 7 days from 2024-07-13), or "Older".


select a.name , 
case 
when  DATEDIFF('2024-07-13' ,a.application_date) < 7 then "RECENT"
else "OLDER"
end as label
from candidate a;


--For each candidate, check if their preferred_location matches the job location. Label as "Matched" or "Not Matched".


select a.name,
case 
when a.preferred_location = b.location then "MATCHED"
else "NOT MATCHED"
end as lisMatched
from candidate a
LEFT JOIN job b on a.applied_job_id = b.job_id



--Show each job title with a flag: "Yes" if it contains the word "Senior" or "Lead", otherwise "No".


select a.title , 
case
when a.title Like "%Lead%" then "YES"
else "NO"
end as flag
from job a



--List all candidates and a flag "Eligible for Leadership" if experience ≥ 6 years.

select a.name,
CASE 
WHEN a.experience >= 6 then "Eligible for Leadership"
end as flag 
from candidate a



select a.first_name,a.last_name
from patients a
where  a.weight between 100 AND 120;

 select CONCAT(first_name,' ',last_name)
 from patients



 select a.first_name , a.last_name, b.province_name
from patients a
INNER JOIN province_names b ON a.province_id = b.province_id


select count(a.patient_id)
from patients a
where 2010 =  YEAR(a.birth_date)

select * from patients 
where patient_id IN (1,45,534,879,1000)



select a.patient_id , count(a.patient_id) as noOfAddmissions
from admissions a
where a.patient_id = 579    



select distinct year(birth_date)
from patients
order by birth_date ASC
--group by birth_date
-- UNIQUE(birth_date)

select a.first_name
from patients a
group by a.first_name
having count(a.first_name) = 1

select patient_id,first_name

from patients
where first_name LIKE 's____%s' 

--select count(CASE WHEN gender = 'M' then 1 END) AS male_count,
--COUNT(CASE WHEN gender = 'F' THEN 1 END) AS female_count
--from patients

SELECT (select count(*) from patients) as male_count,
(SELECT count(*) FROM patients) AS female_count

select first_name,last_name,allergies
from patients
where allergies = 'Penicillin' OR allergies = 'Morphine'
order by allergies, first_name , last_name ASC


select patient_id,diagnosis 
from admissions
group by patient_id,diagnosis
having count(patient_id) > 1

select city , count(*) num_patients
from patients
group by city
order BY num_patients DESC , city ASC

SELECT first_name, last_name, 'Patient' AS role
FROM patients

UNION ALL

SELECT first_name, last_name, 'Doctor' AS role
FROM doctors;


select allergies , count(patient_id) as total_diagnosis from patients
group bY allergies
having allergies IS NOT NULL
ORDER BY total_diagnosis DESC