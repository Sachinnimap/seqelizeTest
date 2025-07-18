// --Get All Open Jobs with Employer Name

// select a.title, a.location,a.status , b.name as addedBy from job a
// LEFT JOIN employer b on a.employer_id = b.employer_id
// where a.status = "open";


// --List All Candidates with Their Applied Job and Company Name

// select a.first_name, a.last_name,b.title,c.name
// from candidate  a
// Inner join job b on b.job_id = a.applied_job_id
// Inner join employer c on c.employer_id = b.employer_id


// -- Count Number of Candidates per Job (Only Jobs With Applications)


// select b.title, count(a.candidate_id) as noOfCandidatesApplied
// from candidate a
// INNER JOIN job b on a.applied_job_id = b.job_id
// group by a.applied_job_id
// having noOfCandidatesApplied > 0;



// select a.title
// from job a
// INNER  JOIN candidate b ON b.applied_job_id != a.job_id
// where a.job_id NOT in(b.applied_job_id)

// --Find Candidates Who Applied to Jobs Outside Their Preferred Location

// select a.first_name,a.preferred_location,b.location
// from candidate a
// INNER JOIN job b ON  a.applied_job_id = b.job_id
// --INNER JOIN employer c ON c.employer_id = b.employer_id
// where a.preferred_location != b.location;


// select a.first_name,b.*
// from candidate a
// INNER JOIN job b on a.applied_job_id = b.job_id
// where NOT EXISTS(
//   select 1 from 
//   candidate_skills c where c.candidate_id = a.candidate_id	
// and c.skill_id IN (select d.skill_id from skills d where d.name Like = 	
// 	)

// --Challenge 4: For each job, show how many candidates applied, how many were interviewed, and how many got an offer

// select a.title,
// count(c.interview_id) interviewCount,
// count(b.candidate_id) candidatesCount,
// count(d.job_id) jobCount
//  from job a
// INNER JOIN candidate b  on  b.applied_job_id = a.job_id
// INNER JOIN interview c on  c.candidate_id = b.candidate_id
// INNER JOIN job_offer d on d.candidate_id =  b.candidate_id
// where b.candidate_id IN(select e.candidate_id from interview e)
// group by a.job_id


    
// -- List jobs that require skills a candidate doesn't have, but the candidate still applied for it
// -- Find recruiters who belong to companies with at least 2 open jobs


// select a.* from recruiter a
// where   1 < (
// select count(b.employer_id) totalCount
// from job b
// --INNER JOIN employer b on a.employer_id = b.employer_id
//   group by  b.employer_id
// having a.employer_id = b.employer_id)

// --having a.status = "open" AND totalCount > 1;



// -- List all recruiters along with the number of jobs they’ve posted

// // --select a.*,count(a.recruiter_id) from job a
// // --LEFT JOIN job b ON  a.recruiter_id = b.recruiter_id


// // select b.name ,count(b.recruiter_id) from job a
// // LEFT JOIN recruiter b on  a.recruiter_id = b.recruiter_id
// // group by b.recruiter_id



// --List all recruiters along with the number of jobs they’ve posted.


// select b.name, count(a.recruiter_id) as jobCount
// from job a
// LEFT JOIN  recruiter b on a.recruiter_id = b.recruiter_id
// group by a.recruiter_id;


// -- List all jobs along with the number of candidates who applied to each.

// select a.title, count(b.candidate_id)
// from job a
// LEFT JOIN candidate b on b.applied_job_id =  a.job_id
// group by b.candidate_id



// --Find jobs that have more than 1 candidate applied.

// select a.title
// from job a
// INNER JOIN candidate b on a.job_id = b.applied_job_id
// group by b.applied_job_id
// having count(b.applied_job_id) > 1



// --Show each recruiter's name, job titles they posted, and number of candidates for each job.


// select a.name , count(b.recruiter_id),group_concat(b.title, select count(f.candidate_id) from candidate f
// group by f.candidate_id
// having f.applied_job_id = b.job_id)
// from recruiter a
// LEFT JOIN job b on b.recruiter_id = a.recruiter_id
// group by b.recruiter_id


// --Find recruiters who haven’t posted any job. (Will return empty with current data, but good to test)


// select a.recruiter_id ,count(b.recruiter_id) from recruiter a
// LEFT JOIN job b ON a.recruiter_id = b.recruiter_id
// group by b.recruiter_id
// having count(b.recruiter_id) = 0



--Find the candidate(s) who applied to the job with the highest salary.


/*select a.name from candidate a
where a.applied_job_id  = (select b.job_id 
                           from job b 
                           where b.salary = (select max(c.salary)
                                             from job c
group by c.salary)

)*/
select 


-- List jobs where the salary is above the average salary of all jobs.

select a.title , a.salary
from job a
where a.salary > (select AVG(salary) from job group by job_id)


-- Find candidates whose experience is more than the experience of any candidate applying to job 103.


select a.name  
from candidate a
where applied_job_id = 103 and a.experience > (select MIN(b.experience) from candidate b group by b.candidate_id having b.applied_job_id = 103 )



--Show job titles where all candidates have more than 3 years of experience.


select b.title
from candidate a
LEFT JOIN job b on  a.applied_job_id=b.job_id
group by a.experience
having max(a.experience) > 3



// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log('3');
//     return Promise.resolve('4');
//   })
//   .then((data) => {
//     console.log(data);
//   });
// (async () => {
//   console.log('5');
//    await Promise.resolve();
//   console.log('6');
// })();
// console.log('7');


// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log('3');
//     return Promise.resolve('4');
//   })
//   .then((data) => {
//     console.log(data);
//   });
// (async () => {
//   console.log('5');
//    await Promise.resolve().then(()=>{;
//   console.log('6');
//     })
//     console.log("8")
// })();
// console.log('7');




// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log('3');
//     // return Promise.resolve('4');
//     return '4'
//   })
//   .then((data) => {
//     console.log(data);
//   });
// (async () => {
//   console.log('5');
//    await Promise.resolve();
//   console.log('6');
// })();
// console.log('7');
