let grades = {
    math: 18,
    physics: 9,
    programming: 20,
    database: 14,
    english: 7
};

for (let Lesson in grades) {
    let score = grades[Lesson];
    if (score <10){
       console.log(Lesson +":مردود");
    }else if (score>= 10 && score<= 15){
        console.log(Lesson + ":متوسط");
    }else{
        console.log(Lesson +": عالی");
    }
    }

