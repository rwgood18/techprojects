var bio = {
	name: "Rusty Good",
	role: "Web Developer",
	contacts: {
		mobile: "913-534-0045",
		email: "rwgood18@yahoo.com"
	},	
	
	"welcomemessage": "Welcome to my resume",
	"skills": ["Audio Engineering", "Sound Design", "Computer Programming"
	],
	"biopic": "/home/rusty/Pictures/rustymoron.jpg"}

var education = {
	schools: [
	  {
		name: "The Institute of Audio Engineering Arts",
		city: "Kansas City, KS",
		degree: "Certification",
		major: "Audio Engineering"
	  },
	  {
		name: "Udacity",
		city: "Saint Petersburg, FL",
		major: "Computer Science",
		url: "http://udacity.com"
	  }
 	],
 	onlineCourses: [
 	  {
 		name: "Intro to Computer Science",
 		school: "Udacity"
 	  }
 	]
}

var work = {
	jobs: [
	{
		position: "Audio Technician",
		employer: "Harvest Productions",
		dates: "November 2013 - Present",
		years: 1,
		location: "Kansas City, KS",
		description: "Set up and run PA Systems"
	}, 
	{	position: "Assistant Engineer",
		employer: "BRC Audio Productions",
		dates: "June 2013 - August 2013",
		years: 1,
		location: "Kansas City, KS",
		description: "Assist with student and client recording sessions"
	}
	]
}

var projects = {
	projects: [
	  {
		title: "Audio Replacement",
		dates: "2014",
		description: "My class replaced the audio in a five minute clip from the movie 'Inception'.  I was responsible for recreating the sound track. I also did a large portion of the editing and recording."
	  }
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);

var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMessage);
$("#header").append(formattedPicture);


$("#header").append(HTMLcontactGeneric.replace("%contact%", "Mobile").replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLcontactGeneric.replace("%contact%", "e-mail").replace("%data%", bio.contacts.email));

if (bio.skills.length > 0){

	$("#header").append(HTMLskillsStart)

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1])
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2])
	$("#skills").append(formattedSkill);
}





function displayEducation() {
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].city));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
	}
}

displayEducation();

function displayWork() {

	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", 	work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

		$(".work-entry:last").append(formattedEmployer + formattedTitle)

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) { 
	var x= loc.pageX; 
	var y = loc.pageY; 
	logClicks(x,y) 
});



function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
	}
}

displayProjects()

function inName() {
	var first = name.split(" ")[0];
	var second = name.split(" ")[1];

	first = first[0].toUpperCase() + first.slice(1);
	second = second.toUpperCase();

	var new_name = first + ' ' + second;

	return new_name
}

$('#main').append(internationalizeButton);

inName(bio.name);

$("#mapDiv").append(googleMap);