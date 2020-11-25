// 판매자 상품코드

let code = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(37) > div").innerText;

let uri = `http://ownerclan.com/V2/product/view.php?selfcode=${code}`

let option = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(18) > div").innerText;

// 수취인 명 :
let buyerName = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(8) > div").innerText;

//수취인 연락처
let buyerPhone = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(40) > div").innerText;

// 배송지 :
let address = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(42) > div").innerText;

// 우편번호 :
let addressNo = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(44) > div").innerText;

//수량
let itemCount = document.querySelector("#__app_root__ > div > div.napy_sub_content > div:nth-child(3) > div.npay_grid_area > div.grid > div.tui-grid-container > div.tui-grid-content-area.tui-grid-show-lside-area > div.tui-grid-rside-area > div.tui-grid-body-area > div > div.tui-grid-table-container > table > tbody > tr > td:nth-child(20) > div").innerText;


let result = `
오너클랜 URI : ${uri}
수량 : ${itemCount}
옵션 : ${option}
수취인 명 : ${buyerName}
연락처 : ${buyerPhone}
우편번호 : ${addressNo}
배송지 : ${address}
`


console.log(result)