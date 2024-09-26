const task = document.getElementById('task'); // input
const liveToastBtn = document.getElementById('liveToastBtn') ; // ekle butonu
const list = document.getElementById('list') ; //yapılacaklar listesi
const toastElementRemove = document.getElementById('liveToast2') ;  //ekleme işlemi toast bildrim
const toastElement = document.getElementById('liveToast1'); //boş task ekleme toast bildrim

let taskCount = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')).length : 0;

// LocalStorage'dan kaydedilen görevleri yükle
window.onload = function () {
    loadTasks();
};

// Görevleri localStorage'a kaydet
function saveToLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];// array e dönüştürdük
    tasks.push(task);// dönüştürüğümüz array e ekledik
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}

// LocalStorage'dan görevleri yükle ve listeye ekle
function loadTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];// array e dönüştürdük
    tasks.forEach(task => {
        createElement(task);
    });
}

// Görevleri localStorage'a kaydet
function saveToLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []; // array e dönüştürdük
    tasks.push(task); // dönüştürüğümüz array e ekledik
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// LocalStorage'dan görev silme
function removeFromLocalStorage(taskContent) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(t => t !== taskContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showToast() {
    toastElement.classList.remove('hide'); // Toast'ı hide class kadırılarak ekranda izlenmesini sağlar
    toastElement.classList.add('show');
    setTimeout(() => {
        toastElement.classList.add('hide'); // 3 saniye sonra toast'ı gizler
        toastElement.classList.remove('show');
    }, 3000);
}

function showToastEmpty() {
    toastElementRemove.classList.remove('hide'); // Toast'ı hide class kadırılarak ekranda izlenmesini sağlar
    toastElement.classList.add('show');
    toastElementRemove.classList.add('show');
    setTimeout(() => {
        toastElementRemove.classList.add('hide'); // 3 saniye sonra toast'ı gizler
        toastElementRemove.classList.remove('show');
    }, 3000);
}

function createElement(taskContent) {
    
    var newTask = document.createElement('li');
    var newTaskSpan = document.createElement('span');
    newTaskSpan.innerHTML = taskContent;
    newTaskSpan.classList.add('li-text')
    newTask.appendChild(newTaskSpan)
    list.appendChild(newTask);

    var iconDiv = document.createElement('div')
    var taskClose = document.createElement('i');
    var taskChecked = document.createElement('i');
    var reTask = document.createElement('i');

    taskClose.classList.add('taskClose','fa-solid','fa-trash');
    taskChecked.classList.add('taskChecked','fa-solid','fa-circle-check');
    reTask.classList.add('reTask','fa-solid', 'fa-rotate-right'); 
    iconDiv.classList.add('icon-div')
    // taskClose.innerHTML='<i class="fa-solid fa-trash"></i>';
    // taskChecked.innerHTML='<i class="fa-solid fa-circle-check"></i>'

    newTask.appendChild(iconDiv);
    iconDiv.appendChild(taskChecked);
    iconDiv.appendChild(taskClose);  

    taskClose.addEventListener('click', function () {
        list.removeChild(newTask)
        removeFromLocalStorage(taskContent);
        taskCount--;
    })

    taskChecked.addEventListener('click', function () {
       iconDiv.removeChild(taskClose); 
       iconDiv.removeChild(taskChecked); 
       iconDiv.appendChild(reTask)
       newTask.classList.toggle('checked')   
    })

    reTask.addEventListener('click', function () {
       iconDiv.removeChild(reTask);
       iconDiv.appendChild(taskChecked); 
       iconDiv.appendChild(taskClose); 
       newTask.classList.toggle('checked')   
    })

    
}

function newElement() {
    if (task.value === "" || task.value.trim() === "" ){
        showToastEmpty();
        return;// Eğer boşsa fonksiyondan çık
    }else{
        
        if (taskCount >= 10) {
            alert("Maksimum görev sayısına ulaşıldı.");
            return; // Eğer 10'dan fazla ise fonksiyondan çık
        }
    }

    createElement(task.value)
    saveToLocalStorage(task.value)

    task.value ="";
    taskCount++;
    console.log("eklendi");
    showToast()

}

