let film = [{ id: "1", filmName: "Doraemon", screenTime: "120", ticketPrices: "75" },
{ id: "2", filmName: "Conan", screenTime: "122", ticketPrices: "78" },
{ id: "3", filmName: "Dragonball", screenTime: "130", ticketPrices: "85" },
{ id: "4", filmName: "Naruto", screenTime: "118", ticketPrices: "70" }

];


//read
const readmenufilm = () => {
    let infofilm = film.map((film) => `ID: ${film.id} | Name: ${film.filmName} | Screen Time: ${film.screenTime} | Ticket Prices: ${film.ticketPrices}`).join('\n');
    let totalFilm = film.length;
    let result = alert(`===== ALL Film ===== 
---------------------------------------------------------------------
${infofilm}
---------------------------------------------------------------------
Total: ${totalFilm} film`);
    return result;
}

//Validated

const isValidName = (filmName) => filmName && filmName.trim() !== "";

const isValidscreenTime = (screenTime) => {
    screenTime = +screenTime;
    return !isNaN(screenTime) && screenTime >= 0
}

const isValidTicketPrices = (ticketPrices) => {
    ticketPrices = +ticketPrices;
    return !isNaN(ticketPrices) && ticketPrices >= 0
}


//thêm phim


const CreatedFilm = () => {

    let filmName = prompt("Nhap tên phim:");
    if (!isValidName(filmName)) {
        alert("Tên phim không hợp lệ");
        return;
    }


    let screenTime = prompt("Nhap thời gian phim:");
    if (!isValidscreenTime(screenTime)) {
        alert("thời gian phai la so > 0!");
        return;
    }



    let ticketPrices = prompt("Nhập giá tiền");
    if (!isValidTicketPrices(ticketPrices)) {
        alert("Giá tiền phải là số > 0!");
        return;
    }

    let newFilm = {
        id: film.length ? Math.max(...film.map(s => s.id)) + 1 : 1,
        filmName: filmName.trim(),
        screenTime: +screenTime,
        ticketPrices: +ticketPrices,
    }

    film.push(newFilm);

    alert(`film created successfully ! \nID: ${newFilm.id} | Name: ${newFilm.filmName} | Screen Time: ${newFilm.screenTime} | Ticket Prices: ${newFilm.ticketPrices}`);
}
//fiu tơ

const filterphim = () => {
    let infoFilter = films.filter((film) => film.screenTime > 0);

    let totalFilm = infoFilter.length;

    infoFilter = infoFilter.map((film) => `ID: ${film.id} | Name: ${film.filmName} | Screen Time: ${film.screenTime} | Ticket prices: ${film.ticketPrices}`) .join('\n');
    
    let result = alert(`===== ALL Films ===== 
---------------------------------------------------------------------
${infoFilter}
---------------------------------------------------------------------
Total: ${totalFilm} phim`);
    return result;
}

//xóa phim

const deleteFilm = () => {

    let findIDtoDelete = prompt("Nhap ID ma ban can xoa:");

    if (!Number.isInteger(+findIDtoDelete)) {
        alert("ID phai la so!");
        return;
    }

    findIDtoDelete = +findIDtoDelete;

    let isTrueID = id.find(film => film.id === findIDtoDelete);

    if (!isTrueID) {
        alert("Khong tim thay ma ID cua phim nay!");
        return;
    }

    let confirm = prompt(`Da tim thay ID: 
---------------------------------------------------------------------
ID: ${isTrueID.id} | Name: ${isTrueID.filmName} | Screen Time: ${isTrueID.screenTime} | Ticket Prices: ${isTrueID.ticketPrices}
---------------------------------------------------------------------
Hay xac nhan xoa thong tin phim bang cach go "yes"`);

    if (confirm.trim().toLowerCase() === "yes") {
        film = film.filter((film) => film.id !== findIDtoDelete);
        alert(`Ban da xoa thanh xong`);
    } else {
        alert(`Da huy xoa thong tin phim`)
    }
}


//update
const updateFilmProfile = () => {

    let findIDtoUpdate = prompt("Nhap ID ma ban can cap nhat:");

    if (!Number.isInteger(+findIDtoUpdate)) {
        alert("ID phai la so!");
        return;
    }

    findIDtoUpdate = +findIDtoUpdate;

    let isTrueID = film.find(film => film.id === findIDtoUpdate);

    if (!isTrueID) {
        alert("Khong tim thay ma ID cua phim nay!");
        return;
    }

    alert(`Da tim thay ID: 
---------------------------------------------------------------------
ID: ${isTrueID.id} | Name: ${isTrueID.filmName} | Age: ${isTrueID.screenTime} | GPA: ${isTrueID.ticketPrices}
---------------------------------------------------------------------
Hay de trong neu ban muon giu nguyen thong tin!`)

    let newFilm = prompt(`Nhap ten moi (Ten hien tai: ${isTrueID.filmName}):`);
    let newScreenTime = prompt(`Nhap thoi gian chieu moi (thoi gian chieu hien tai: ${isTrueID.screenTime}):`);
    let newTicketPrices = prompt(`Nhap gia tien moi (gia tien hien tai: ${isTrueID.ticketPrices}):`);


    if (newScreenTime && !isValidscreenTime(newScreenTime)) {
        alert("thoi gian chieu khong hop le!");
        return;
    }

    if (newFilm) isTrueID.filmName = newFilm.trim();
    if (newScreenTime) isTrueID.screenTime = +newScreenTime;
    if (newTicketPrices) isTrueID.ticketPrices = +newTicketPrices;



    alert(
        `Film Updated Successfully!
---------------------------------------------------------------------
ID: ${isTrueID.id} | Name: ${isTrueID.filmName} | Screen Time: ${isTrueID.screenTime} | Ticket Prices: ${isTrueID.ticketPrices}`
    );
};



let choice;
do {
    choice = prompt(`
    1.Hiển thị phim
    2. Thêm phim
    3. Xóa phim
    4. Cập nhật phim
    5. Tìm phim
    6. Lọc phim theo thời gian chiếu
    7. Tính tổng tiền cho vé phim
    8. Sắp xếp phim theo giá
    9. Tìm kiếm phim theo khoảng giá
    0. Thoát
Enter your choice:`);

    if (!Number.isInteger(+choice)) {
        alert("Vui long nhap so tu 0 -> 8");
        continue;
    }

    choice = +choice;

    switch (choice) {
        case 1: readmenufilm(); break;
        case 2: CreatedFilm(); break;
        case 3: deleteFilm(); break; filterphim(); break;
        case 4: updateFilmProfile(); break;
        case 0:
            alert("Xin chao va hen gap lai!")
            console.log("Chuong trinh da thoat!");
            break;
        default:
            alert("Vui long nhap dung chuc nang (0-8)")
            break;
    }
} while (choice !== 0);




