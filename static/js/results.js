/* ===== DỮ LIỆU KẾT QUẢ HỌC TẬP =====
   Mỗi học kỳ: g10/g4 = điểm TB học kỳ, c10/c4 = điểm TB tích lũy, rank = xếp loại học kỳ.
   Mỗi môn viết dạng "Tên môn|Số tín chỉ|Điểm tổng kết|Điểm chữ". Thêm học kỳ mới bằng cách thêm 1 khối vào cuối mảng. */
const DATA = [
 {n:'HK1 (2023–2024)',g10:6.48,g4:2.33,c10:6.48,c4:2.33,rank:'Trung bình',rows:[
  'Giáo dục thể chất 1|1|7,60|B','Giáo dục thể chất 2|1|7,70|B','Giáo dục thể chất 3|1|8,00|B+','Giáo dục thể chất 4|1|8,00|B+',
  'Pháp luật đại cương|2|7,70|B','Vật lý đại cương|3|7,60|B','Xác suất thống kê|2|4,40|D','Triết học Mác - Lênin|3|6,50|C+',
  'Giáo dục quốc phòng 1|3|7,30|B','Giáo dục quốc phòng 2|2|7,00|B','Giáo dục quốc phòng 3|2|8,00|B+','Giáo dục quốc phòng 4|4|5,90|C',
  'Toán cao cấp 1|3|5,30|D+','Lập trình cơ bản|2|7,40|B']},
 {n:'HK2 (2023–2024)',g10:7.25,g4:2.91,c10:6.89,c4:2.64,rank:'Khá',rows:[
  'Tiếng Anh 1|4|7,10|B','Kinh tế chính trị Mác - Lênin|2|7,30|B','Toán rời rạc|3|9,10|A','Toán cao cấp 2|3|5,80|C',
  'Đại cương về quản lý điều hành và khởi nghiệp|3|6,60|C+','Năng lượng cho phát triển bền vững|2|7,90|B']},
 {n:'HK1 (2024–2025)',g10:8.14,g4:3.50,c10:7.39,c4:2.98,rank:'Giỏi',rows:[
  'Công nghệ phần mềm|2|8,60|A','Kiến trúc máy tính|2|8,00|B+','Mạng máy tính|2|9,40|A','Ngôn ngữ lập trình Python|2|8,80|A',
  'Chủ nghĩa xã hội khoa học|2|8,20|B+','Lập trình C nâng cao|3|6,60|C+','Tiếng Anh 2|4|7,50|B','Cơ sở dữ liệu|4|8,80|A']},
 {n:'HK2 (2024–2025)',g10:8.49,g4:3.57,c10:7.71,c4:3.15,rank:'Giỏi',rows:[
  'Kinh tế học đại cương|2|8,40|B+','Nguyên lý hệ điều hành|2|9,90|A','Nguyên lý lập trình hướng đối tượng|2|9,90|A',
  'Quản trị doanh nghiệp|2|8,40|B+','Tư tưởng Hồ Chí Minh|2|9,10|A','Nhập môn cấu trúc dữ liệu và giải thuật|3|8,30|B+',
  'Thống kê ứng dụng trong kinh doanh|3|8,70|A','Cơ sở lập trình Web|3|8,30|B+','Công nghệ điện toán đám mây|3|6,50|C+']},
 {n:'HK1 (2025–2026)',g10:9.09,g4:3.83,c10:7.98,c4:3.28,rank:'Xuất sắc',rows:[
  'Cấu trúc dữ liệu và giải thuật nâng cao|3|9,10|A','Nhập môn An toàn và bảo mật thông tin|2|8,60|A',
  'Nhập môn thương mại điện tử|2|9,30|A','Phân tích thiết kế hướng đối tượng|3|9,20|A','Tài chính - tiền tệ|2|6,90|C+',
  'Lịch sử Đảng Cộng sản Việt Nam|2|9,60|A','Lập trình .NET|4|10,00|A']},
 {n:'HK2 (2025–2026)',g10:9.41,g4:4.00,c10:8.24,c4:3.42,rank:'Xuất sắc',rows:[
  'Nghiệp vụ kinh doanh online và thanh toán qua mạng|3|9,00|A','Phần mềm mã nguồn mở|2|9,70|A',
  'Phân tích chiến lược thương mại điện tử|3|9,00|A','Tiếng Anh chuyên ngành TMĐT|3|8,60|A','Học máy cơ bản|3|9,50|A',
  'Lập trình web nâng cao|4|10,00|A','Trí tuệ nhân tạo|3|10,00|A']}
];
const f = (x) => String(x).replace('.', ',');

// Biểu đồ cột
document.getElementById('chart').innerHTML = DATA.map(s =>
  `<div class="col"><b>${f(s.g10)}</b><i style="height:${s.g10 * 8}%"></i><span>${s.n.slice(0, 3)}<br>${s.n.slice(5, 14)}</span></div>`).join('');

// Bảng từng học kỳ (học kỳ mới nhất mở sẵn)
document.getElementById('semesters').innerHTML = DATA.slice().reverse().map((s, i) => {
  const rows = s.rows.map(r => r.split('|'));
  const credits = rows.reduce((t, r) => t + Number(r[1]), 0);
  const body = rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="g ${r[3][0]}">${r[3]}</span></td></tr>`).join('');
  return `<details${i === 0 ? ' open' : ''}><summary><span>${s.n} – ${s.rank}</span>
    <small>TB học kỳ ${f(s.g10)} (${f(s.g4.toFixed(2))}/4) · ${credits} tín chỉ</small></summary>
    <div class="tbl"><table><thead><tr><th>Môn học</th><th>Tín chỉ</th><th>Điểm</th><th>Chữ</th></tr></thead><tbody>${body}</tbody></table></div></details>`;
}).join('');
