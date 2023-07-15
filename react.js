// Tạo một server http sử dụng module http
const http = require('http');
const fs = require('fs');

// Tạo một hàm để xử lý các yêu cầu từ client
const handleRequest = (req, res) => {
  // Kiểm tra đường dẫn của yêu cầu
  if (req.url === '/page-c.html') {
    // Nếu là trang page-c.html, gửi mã trạng thái 302 và tiêu đề Location để chuyển hướng sang trang page-b.html
    res.writeHead(302, {'Location': '/page-b.html'});
    res.end();
  } else if (req.url === '/page-b.html') {
    // Nếu là trang page-b.html, đọc nội dung của tệp page-b.html và gửi cho client
    fs.readFile('page-b.html', (err, data) => {
      if (err) {
        // Nếu có lỗi, gửi mã trạng thái 500 và thông báo lỗi
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal server error');
      } else {
        // Nếu không có lỗi, gửi mã trạng thái 200 và nội dung của tệp
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    // Nếu không phải hai trang trên, gửi mã trạng thái 404 và thông báo không tìm thấy trang
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
};

// Tạo một server với hàm xử lý đã tạo
const server = http.createServer(handleRequest);

// Lắng nghe cổng 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
