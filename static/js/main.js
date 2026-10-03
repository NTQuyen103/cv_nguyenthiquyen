/* ===== 1. Thanh kỹ năng: chạy animation khi cuộn tới ===== */
const bars = document.querySelectorAll('.bar i');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.level + '%'; // lấy % từ data-level trong HTML
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach((b) => io.observe(b));

/* ===== 2. Form liên hệ ===== */
// TODO: điền email nhận tin nhắn. Muốn gửi thật không cần mở app email,
// đăng ký Formspree (formspree.io) rồi dùng fetch() tới link form của bạn.
const MY_EMAIL = 'nguyenthiquyen7c@gmail.com';

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (!form.checkValidity()) {
    msg.textContent = 'Vui lòng điền đủ họ tên, email hợp lệ và nội dung.';
    return;
  }
  const d = new FormData(form);
  const subject = encodeURIComponent('Liên hệ từ website CV - ' + d.get('name'));
  const body = encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + ' (' + d.get('email') + ')');
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  msg.textContent = 'Đang mở ứng dụng email của bạn…';
});

/* ===== 3. Năm ở chân trang tự cập nhật ===== */
document.getElementById('year').textContent = new Date().getFullYear();
