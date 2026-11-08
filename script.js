// EDIT DATA KELAS DI FILE INI
// Ganti nama contoh, jadwal, pengumuman, dan petugas piket sesuai kelas kalian.

const members = [
  { name: "Raaiq", role: "Ketua kelas" },
  { name: "Nama Wakil", role: "Wakil ketua" },
  { name: "Nama Sekretaris", role: "Sekretaris" },
  { name: "Nama Bendahara", role: "Bendahara" },
  { name: "Nama Siswa 5", role: "Anggota kelas" },
  { name: "Nama Siswa 6", role: "Anggota kelas" },
  { name: "Nama Siswa 7", role: "Anggota kelas" },
  { name: "Nama Siswa 8", role: "Anggota kelas" }
];

const schedule = [
  ["Senin", "Matematika", "Bahasa Indonesia", "IPA", "IPS", "PJOK"],
  ["Selasa", "Bahasa Inggris", "PPKn", "Matematika", "Seni Budaya", "Informatika"],
  ["Rabu", "IPA", "Bahasa Indonesia", "IPS", "Agama", "Matematika"],
  ["Kamis", "PPKn", "Bahasa Inggris", "PJOK", "IPA", "Prakarya"],
  ["Jumat", "Agama", "Matematika", "Bahasa Indonesia", "Projek", "—"]
];

const announcements = [
  { date: "10 NOV", title: "Contoh: Bawa perlengkapan belajar", detail: "Jangan lupa menyiapkan buku dan alat tulis sesuai jadwal pelajaran." },
  { date: "12 NOV", title: "Contoh: Kebersihan kelas", detail: "Setiap anggota kelas ikut menjaga kebersihan dan kerapian ruang kelas." }
];

const duties = [
  { day: "SENIN", people: "Kelompok 1", task: "Menyapu, merapikan meja, menghapus papan tulis." },
  { day: "SELASA", people: "Kelompok 2", task: "Menyapu, merapikan meja, menghapus papan tulis." },
  { day: "RABU", people: "Kelompok 3", task: "Menyapu, merapikan meja, menghapus papan tulis." },
  { day: "KAMIS", people: "Kelompok 4", task: "Menyapu, merapikan meja, menghapus papan tulis." },
  { day: "JUMAT", people: "Kelompok 5", task: "Menyapu, merapikan meja, menghapus papan tulis." }
];

const initials = (name) => name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase();

document.querySelector("#memberGrid").innerHTML = members.map(person => `
  <article class="member-card">
    <div class="avatar">${initials(person.name)}</div>
    <h3>${person.name}</h3>
    <p>${person.role}</p>
  </article>`).join("");

document.querySelector("#scheduleBody").innerHTML = schedule.map(row => `
  <tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("");

document.querySelector("#announcementList").innerHTML = announcements.map(item => `
  <article class="announcement">
    <div class="announcement-date">${item.date}</div>
    <div><h3>${item.title}</h3><p>${item.detail}</p></div>
  </article>`).join("");

document.querySelector("#dutyGrid").innerHTML = duties.map(item => `
  <article class="duty-card">
    <div class="duty-day">${item.day}</div>
    <p><strong>${item.people}</strong><br>${item.task}</p>
  </article>`).join("");

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
