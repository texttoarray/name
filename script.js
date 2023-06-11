// Array of Indian first names
const firstNames = [
  "Aadit", "Aadya", "Aagam", "Aarav", "Aaradhya", "Aarna", "Aarush", "Aashi", "Aashish", "Aathira",
  "Aayush", "Achintya", "Aditi", "Aditya", "Advait", "Advika", "Agrata", "Ahan", "Aishani", "Aishwarya",
  "Akshaj", "Akshara", "Akshat", "Akshay", "Alaka", "Alina", "Alok", "Amaan", "Amaira", "Amaya",
  "Amit", "Amrita", "Amritesh", "Anahita", "Ananya", "Anay", "Anika", "Aniket", "Anisha", "Anishka",
  "Anita", "Ansh", "Anshika", "Anshul", "Anu", "Anuja", "Anujith", "Anupam", "Anuradha", "Anushka",
  "Anushree", "Aparajita", "Aparna", "Apoorva", "Aprajita", "Aradhana", "Arav", "Archana", "Archit", "Arjun",
  "Arun", "Aruna", "Arya", "Aryan", "Asavari", "Ashish", "Ashok", "Ashutosh", "Ashvath", "Ashvi",
  "Asmi", "Asmita", "Astha", "Atharva", "Atish", "Avani", "Avantika", "Avinash", "Avishi", "Ayush",
  "Bhagirath", "Bhargav", "Bhavana", "Bhavik", "Bhavisha", "Bhavya", "Bhuvan", "Bijal", "Bina", "Binita",
  "Charu", "Charvi", "Chaya", "Chetan", "Chhavi", "Chirag", "Daksh", "Daksha", "Darsh", "Darshana",
  "Deepti", "Dev", "Devang", "Devansh", "Devika", "Devraj", "Dhanya", "Dhanush", "Dhara", "Dharmesh",
  "Dharvi", "Dhruv", "Dhvani", "Diksha", "Dilip", "Dimple", "Disha", "Divya", "Divyansh", "Drishti",
  "Eeshan", "Ekaa", "Ekansh", "Eklavya", "Eshani", "Eshika", "Falguni", "Farhan", "Ganesh", "Garima",
  "Gaurav", "Gayatri", "Geet", "Geetika", "Girish", "Grishma", "Gunjan", "Gunita", "Hansa", "Hansika",
  "Harsh", "Harsha", "Harshad", "Harshika", "Harshini", "Hemant", "Hemlata", "Hetal", "Hetvi", "Himanshu",
  "Hina", "Hiral", "Hitesh", "Hridyansh", "Iha", "Ihana", "Ila", "Indra", "Indu", "Isha",
  "Ishan", "Ishani", "Ishita", "Iti", "Jagdish", "Jagruti", "Jaideep", "Jaidev", "Jainam", "Jainil",
  "Jaiswal", "Jalpa", "Janak", "Janani", "Janvi", "Jasmin", "Jatin", "Jawahar", "Jay", "Jayant",
  "Jayashree", "Jayesh", "Jayeshwari", "Jhanvi", "Jigyasa", "Jignesh", "Jinal", "Jisha", "Jiten", "Jitendra",
  "Kabir", "Kadambari", "Kairav", "Kajal", "Kalyani", "Kamal", "Kamini", "Kanak", "Kanika", "Kanishka",
  "Karthik", "Kartik", "Kashish", "Kasturi", "Kaushal", "Kaushik", "Kavita", "Kavya", "Keya", "Khushi",
  "Krish", "Krisha", "Krishang", "Krishi", "Krishna", "Kriti", "Kritika", "Krittika", "Krutika", "Kshitij",
  "Laksh", "Laksha", "Lakshay", "Lakshmi", "Lalita", "Lalit", "Lavanya", "Lavina", "Lekha", "Lisha",
  "Madan", "Madhav", "Madhavi", "Madhur", "Madhuri", "Madhvi", "Madina", "Madira", "Madhvi", "Mahak",
  "Maitri", "Maitreya", "Malay", "Malika", "Malti", "Manan", "Manas", "Manasi", "Manav", "Mandakini",
  "Mansi", "Manvi", "Mayank", "Mayur", "Medha", "Meena", "Meera", "Megha", "Meghana", "Mehak",
  "Mehul", "Mihir", "Mira", "Miraya", "Mishti", "Mohak", "Mohini", "Moksha", "Mona", "Monica",
  "Mridul", "Mrunal", "Mukesh", "Mukul", "Munira", "Murali", "Muskan", "Naina", "Naksh", "Namita",
  "Nandini", "Nandita", "Narendra", "Naresh", "Navya", "Nehal", "Neha", "Nidhi", "Nikita", "Nikhil",
  "Nilay", "Nilesh", "Nimisha", "Niraj", "Nirali", "Nirmala", "Nirmit", "Nisha", "Nishi", "Nishtha",
  "Nitin", "Nitya", "Niyati", "Ojas", "Omkar", "Omkara", "Oviya", "Paarth", "Paavani", "Pallavi",
  "Palak", "Pankaj", "Parth", "Parul", "Parvati", "Parveen", "Payal", "Prachi", "Pradeep", "Pragati",
  "Prakriti", "Pranav", "Pranay", "Prarthana", "Prashant", "Pratap", "Prateek", "Pratik", "Pratyush", "Praveen",
  "Preet", "Preeti", "Preetika", "Prem", "Prisha", "Pritam", "Priti", "Priya", "Priyanka", "Puja",
  "Punit", "Purnima", "Purva", "Purvi", "Qamar", "Radha", "Radhika", "Raghav", "Rahul", "Raj",
  "Rajat", "Rajeev", "Rajendra", "Rajesh", "Rajiv", "Rajkumar", "Rajni", "Rakhi", "Raksha", "Rama",
  "Ramakant", "Ramesh", "Ramila", "Ramya", "Rani", "Rashi", "Rashmi", "Ratan", "Rati", "Raveena",
  "Ravi", "Reena", "Reeva", "Rekha", "Rhea", "Ria", "Riddhi", "Rishi", "Rishika", "Ritu",
  "Riya", "Rohan", "Roopali", "Roshan", "Ruchi", "Ruchir", "Rudra", "Ruhani", "Rujuta", "Rukmini",
  "Rupal", "Rupali", "Rupesh", "Rushabh", "Rutvi", "Saakshi", "Saarika", "Sachin", "Sadhana", "Sagar",
  "Sahana", "Sahil", "Saisha", "Saloni", "Samaira", "Samir", "Samira", "Samrat", "Sana", "Sanaya",
  "Sanchita", "Sandhya", "Sangeeta", "Sanjay", "Sanjana", "Sanjeev", "Sanjiv", "Sanket", "Santosh", "Sanyukta",
  "Sapna", "Sarika", "Sarthak", "Sarvesh", "Sasha", "Sathvik", "Saurabh", "Savita", "Seema", "Sejal",
  "Shachi", "Shakti", "Shalini", "Shambhavi", "Shanaya", "Shankar", "Shanta", "Shantanu", "Shardul", "Sharmila",
  "Shashi", "Shashikant", "Shaurya", "Sheetal", "Shikha", "Shilpa", "Shirin", "Shiv", "Shivam", "Shivangi",
  "Shobha", "Shradha", "Shreya", "Shriya", "Shubham", "Shubhangi", "Shweta", "Siddharth", "Simran", "Sita",
  "Smita", "Smriti", "Sneha", "Soham", "Sonal", "Sonali", "Sonam", "Sonia", "Sujata", "Sukriti",
  "Sumit", "Sunaina", "Sunil", "Sunita", "Supriya", "Suraj", "Suresh", "Sushant", "Sushmita", "Swara",
  "Swarna", "Swati", "Sweta", "Tanya", "Tanisha", "Tanmay", "Tanuja", "Tanvi", "Tapas", "Tara",
  "Tarun", "Tejas", "Tejaswini", "Tina", "Trisha", "Trishna", "Triveni", "Tushar", "Uma", "Umesh",
  "Urmila", "Urvashi", "Utkarsh", "Vaidehi", "Vaishali", "Vandana", "Vani", "Varsha", "Ved", "Vedant",
  "Vidhi", "Vidya", "Vidyalakshmi", "Vijay", "Vikas", "Vikram", "Vinay", "Vineeta", "Vineet", "Vinod",
  "Vipin", "Vishal", "Vishnu", "Vivek", "Vyom", "Yamini", "Yash", "Yashasvi", "Yashika", "Yashvi",
  "Yatin", "Yogesh", "Yogita", "Yuvraj", "Zara", "Zoya"
];

// Array of Indian last names
const lastNames = [
  "Agarwal", "Ahluwalia", "Ahuja", "Arora", "Bajaj", "Bakshi", "Batra", "Bedi", "Bhalla", "Bhatia",
  "Bhatnagar", "Bhatt", "Butani", "Chadha", "Chandra", "Chaudhary", "Chopra", "Datta", "Dewan", "Duggal",
  "Gaba", "Gandhi", "Garg", "Gill", "Goyal", "Gupta", "Jain", "Jaitly", "Joshi", "Kapoor",
  "Khanna", "Khatri", "Kohli", "Kumar", "Lal", "Mahajan", "Malhotra", "Malik", "Mathur", "Mehra",
  "Mittal", "Monga", "Nagpal", "Nanda", "Narang", "Narula", "Nayar", "Oberoi", "Pandey", "Parekh",
  "Puri", "Rajput", "Rana", "Rastogi", "Sachdev", "Saini", "Sethi", "Shah", "Sharma", "Sharma",
  "Sikka", "Singh", "Sinha", "Soni", "Talwar", "Tandon", "Taneja", "Thakur", "Trivedi", "Verma",
  "Wadhwa", "Yadav", "Achari", "Adiga", "Anand", "Apte", "Arya", "Athalye", "Balakrishnan", "Bali",
  "Bansal", "Bhagat", "Bhaskar", "Bose", "Chatterjee", "Chauhan", "Deshpande", "Devi", "Dhawan", "Dutta",
  "Gandhi", "Ghosh", "Gokhale", "Goswami", "Gupte", "Iyer", "Iyengar", "Jha", "Kakkar", "Kannan",
  "Kashyap", "Kaul", "Khan", "Kher", "Kulkarni", "Kunte", "Mahadevan", "Menon", "Mukherjee", "Murthy",
  "Nair", "Nangia", "Nayak", "Pai", "Patel", "Patil", "Pillai", "Prakash", "Radhakrishnan", "Raghavan",
  "Raj", "Raman", "Ramani", "Rao", "Reddy", "Sarin", "Saxena", "Sen", "Setty", "Shanmugam",
  "Sharma", "Shastri", "Shetty", "Shukla", "Srivastava", "Sundaram", "Talati", "Thomas", "Vaidya", "Varma",
  "Venkataraman", "Venkataramana", "Vijayan", "Yadav", "Yalamanchili", "Balaji", "Chandrasekhar", "Giridhar", "Jayaraman", "Krishnamurthy",
  "Mahalingam", "Narayan", "Raghunathan", "Ranganathan", "Rangarajan", "Sankaran", "Subramanian", "Sundaresan", "Venkataramanan", "Viswanathan",
  "Bajpai", "Banerjee", "Basu", "Bhattacharya", "Bhushan", "Chakrabarti", "Chakraborty", "Chakravarthy", "Das", "Datta",
  "Ganguly", "Ghoshal", "Ghosh", "Goswami", "Gupta", "Jana", "Majumdar", "Mitra", "Mukhopadhyay", "Pal",
  "Saha", "Sanyal", "Sen", "SenGupta", "Sengupta", "Seth", "Shah", "Sinha", "Sircar", "Talukdar",
  "Thakur", "Bhalla", "Bhat", "Chadda", "Chawla", "Chopra", "Choudhury", "Chowdhury", "Datta", "Dewan",
  "Garg", "Ghei", "Grewal", "Grover", "Joshi", "Kapoor", "Khanna", "Khurana", "Khanna", "Kohli",
  "Kumar", "Mahajan", "Malhotra", "Malik", "Mathur", "Mehta", "Mehra", "Monga", "Nagpal", "Nanda",
  "Narang", "Nayar", "Oberoi", "Pandey", "Puri", "Rai", "Raj", "Rana", "Rastogi", "Sachdev",
  "Saini", "Sethi", "Shah", "Sharma", "Sikka", "Singh", "Sinha", "Soni", "Talwar", "Tandon",
  "Taneja", "Thakur", "Trivedi", "Verma", "Wadhwa", "Yadav"
];


function generateName() {
    const firstNameFilter = document.getElementById("first-name-filter").value.toLowerCase();
    const lastNameFilter = document.getElementById("last-name-filter").value.toLowerCase();

    const filteredFirstNames = firstNames.filter(name => name.toLowerCase().startsWith(firstNameFilter));
    const filteredLastNames = lastNames.filter(name => name.toLowerCase().startsWith(lastNameFilter));

    const firstName = getRandomName(filteredFirstNames);
    const lastName = getRandomName(filteredLastNames);

    const fullName = firstName + " " + lastName;

    document.getElementById("generated-name").textContent = fullName;
}

function getRandomName(names) {
    if (names.length === 0) {
        return "No names found";
    }
    return names[Math.floor(Math.random() * names.length)];
}
