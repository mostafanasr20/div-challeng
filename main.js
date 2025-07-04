// let asked = document.querySelector(".asked .text")
// let mega = document.getElementById(megaa)

// asked.addEventListener("click", function(){
//    if(mega.style.display === "none"){
//     mega.style.display = "block"
//     asked.innerHTML = "fa-chevron-down"
//    }
//    else{
//     mega.style.display = "none"
//      asked.innerHTML = "fa-chevron-up"
//    }
// })

// let asked = document.querySelector(".asked .text");
// let mega = document.getElementById("megaa"); // يجب وضع id بين علامتي تنصيص

// asked.addEventListener("click", function(){
//     if(mega.style.display === "block") {
//         mega.style.display = "none";
//         asked.innerHTML = "النص الأصلي <i class='icon-down'></i>"; // أيقونة للأسفل
//     } else {
//         mega.style.display = "block";
//         asked.innerHTML = "النص الأصلي <i class='icon-up'></i>"; // أيقونة للأعلى
//     }
// });



// let asked = document.querySelector(".asked .text")
// let megaa = document.querySelectorAll(".megaa")


// asked.addEventListener("click", function(){
//     if(megaa.style.display === "none"){
//         megaa.style.display = "block"

//       icon.classList.toggle("fa-chevron-down");
//     }else{
//          megaa.style.display = "none"
//         icon.classList.toggle("fa-chevron-up");
//     }
// })



// let asked = document.querySelector(".asked .text");
// let megaa = document.querySelectorAll(".megaa");
// let icon = document.querySelector(".asked .text i"); // تعريف الأيقونة

// asked.addEventListener("click", function(){
//     megaa.forEach(function(mega) {
//         if(mega.style.display === "none" || !mega.style.display){
//             mega.style.display = "block";
//             icon.classList.remove("fa-chevron-down");
//             icon.classList.add("fa-chevron-up");
//         } else {
//             mega.style.display = "none";
//             icon.classList.remove("fa-chevron-up");
//             icon.classList.add("fa-chevron-down");
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
  // تحديد جميع عناصر النص والأيقونات
  const textElements = document.querySelectorAll('.text');
  
  // إضافة حدث النقر لكل عنصر نص
  textElements.forEach(textElement => {
   
    const megaa = textElement.querySelector('.megaa');
    
    const icon = textElement.querySelector('i');
    if(megaa) {
      megaa.style.display = 'none';
      if(icon) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    }
    
   
    textElement.addEventListener('click', function() {
      if(megaa) {
        if(megaa.style.display === 'none') {
          megaa.style.display = 'block';
          if(icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
          }
        } else {
          megaa.style.display = 'none';
          if(icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
          }
        }
      }
    });
  });
});

   