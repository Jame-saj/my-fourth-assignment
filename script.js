let interviewList = [];
let rejectedList = [];

const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const availableJobs = document.getElementById('availableJobs');

const btnAll = document.getElementById('btnAll');
const btnInterview = document.getElementById('btnInterview');
const btnRejected = document.getElementById('btnRejected');

const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filterSection');

function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  availableJobs.innerText = allCardSection.children.length;
}

calculateCount();

let currentStatus = 'btnAll';

function toggleStyle(id) {
  btnAll.classList.remove('bg-blue-600', 'text-white');
  btnInterview.classList.remove('bg-blue-600', 'text-white');
  btnRejected.classList.remove('bg-blue-600', 'text-white');

  // add
  btnAll.classList.add('bg-white', 'text-gray-500');
  btnInterview.classList.add('bg-white', 'text-gray-500');
  btnRejected.classList.add('bg-white', 'text-gray-500');

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove('bg-white', 'text-gray-500');
  selected.classList.add('bg-blue-600', 'text-white');

  if (id === 'btnInterview') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  } else if (id === 'btnRejected') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  } else {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
}

btnAll.onclick = () => toggleStyle('btnAll');
btnInterview.onclick = () => toggleStyle('btnInterview');
btnRejected.onclick = () => toggleStyle('btnRejected');

function showEmptyStateRejected() {
  filterSection.innerHTML = `
    <div class=" items-center justify-center ">
      <img src="./jobs.png" alt="" class="w-50 h-50  mb-6">
      <p class="text-2xl text-black font-bold">No jobs Available</p>
      <p class="text-gray-500 mt-2">Come back soon for new Job opportunities</p>
    </div>
  `;
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    const card = event.target.closest('.card');
    const title = card.querySelector('.title').innerText;
    const jobName = card.querySelector('.jobName').innerText;
    const statusText = card.querySelector('.mb-2');

    statusText.innerText = 'INTERVIEW';

    const jobInfo = { title, jobName, status: 'INTERVIEW' };

    if (!interviewList.find(item => item.title === title)) {
      interviewList.push(jobInfo);
    }

    rejectedList = rejectedList.filter(item => item.title !== title);
    if (currentStatus === 'btnRejected') renderRejected();

    calculateCount();
  }

  //reject
  else if (event.target.classList.contains('rejected-btn')) {
    const card = event.target.closest('.card');
    const title = card.querySelector('.title').innerText;
    const jobName = card.querySelector('.jobName').innerText;
    const statusText = card.querySelector('.mb-2');

    statusText.innerText = 'REJECTED';

    const jobInfo = { title, jobName, status: 'REJECTED' };

    if (!rejectedList.find(item => item.title === title)) {
      rejectedList.push(jobInfo);
    }

    interviewList = interviewList.filter(item => item.title !== title);

    if (currentStatus === 'btnInterview') renderInterview();

    calculateCount();
  } else if (event.target.classList.contains('delete-btn')) {
    const card = event.target.closest('.card');
    const title = card.querySelector('.title').innerText;

    interviewList = interviewList.filter(item => item.title !== title);
    rejectedList = rejectedList.filter(item => item.title !== title);

    card.remove();

    calculateCount();

    if (currentStatus === 'btnRejected') renderRejected();
    if (currentStatus === 'btnInterview') renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = '';
  // filterSection.add('bg-[#eef4ffFF');

  interviewList.forEach(job => {
    const div = document.createElement('div');
    div.className =
      'card flex justify-between p-6 mt-4 py-1 rounded-2xl bg-[#ffffff]';

    div.innerHTML = `
      <div class="pb-6">
        <h1 class="title text-[18px] font-bold">${job.title}</h1>
        <p class="jobName pt-1 mb-5 text-gray-500">${job.jobName}</p>
        <p class="mb-2 py-2.5 px-5 inline-block rounded-lg bg-[#eef4ffFF]">${job.status}</p>
        <p class="mb-5 text-gray-500">Status updated from main list.</p>

        <button class="interview-btn btn btn-soft btn-success border-green-500">INTERVIEW</button>
        <button class="rejected-btn btn btn-soft btn-secondary border-red-700">REJECTED</button>
      </div>

      <div>
        <i class="delete-btn fa-regular border p-2 rounded-2xl fa-trash-can cursor-pointer hover:bg-red-100"></i>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

function renderRejected() {
  if (rejectedList.length === 0) {
    showEmptyStateRejected();
    return;
  }
  filterSection.innerHTML = '';

  rejectedList.forEach(job => {
    const div = document.createElement('div');
    div.className =
      'card flex justify-between p-6 mt-4 py-1 rounded-2xl bg-[#ffffff]';

    div.innerHTML = `
      <div class="pb-6">
        <h1 class="title text-[18px] font-bold">${job.title}</h1>
        <p class="jobName pt-1 mb-5 text-gray-500">${job.jobName}</p>
        <p class="mb-2 py-2.5 px-5 inline-block rounded-lg bg-[#eef4ffFF]">${job.status}</p>
        <p class="mb-5 text-gray-500">Status updated from main list.</p>
        <button class="interview-btn btn btn-soft btn-success border-green-500">INTERVIEW</button>
        <button class="rejected-btn btn btn-soft btn-secondary border-red-700">REJECTED</button>
      </div>
      <div>
        <i class="delete-btn fa-regular border p-2 rounded-2xl fa-trash-can cursor-pointer hover:bg-red-100"></i>
      </div>
    `;

    filterSection.appendChild(div);
  });
}
