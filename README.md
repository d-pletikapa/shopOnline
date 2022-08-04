# 3-7-grid

/*.grid {
	display: grid;
	/* grid-template-columns: 150px 20% auto;
	grid-template-rows: 150px 150px;

	grid-auto-flow: column;
	grid-auto-rows: 100px;
	grid-auto-columns: 50px; */

/* grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 100px; */

/* grid-template-columns: 1fr max-content 1fr; максимальная ширина контента из диапазона всей колонки - максиальная ширина одной строки*/

/* grid-template-columns: 1fr min-content 1fr; минимальная ширина контента из диапазона всей колонки максимальная ширина самого длинного слова из строки*/

/* grid-template-columns: 1fr minmax(200px, 300px) 1fr; */
/* grid-template-columns: 300px minmax(200px, max-content) 1fr; */
/* grid-template-columns: 300px minmax(min-content, 400px) 1fr; */
/* grid-template-columns: 300px minmax(min-content, max-content) 1fr; */
/* grid-template-columns: 300px fit-content(250px) 1fr; (не больше 250) */

/* grid-template-columns: repeat(2, 1fr 2fr); повторить каждые 2 - паттерн  */
/* grid-template-columns: repeat(2, 1fr 50px) 50%; повторить каждые 2 - паттерн + последняя  */
/* grid-template-columns: repeat(auto-fit, 165px); повторить в ряд равномерно если вмещаются, все что не вмещается переносится на след ряд */
/* grid-template-columns: repeat(auto-fill, 165px); повторить в ряд, с резервацией места под существующие блоки и возможные блоки */

/* grid-template-columns: repeat(3, 200px);
	grid-template-rows: repeat(6, 75px);
	gap: 15px;
	height: 600px; */
/* justify-items: center;
		align-items: end; */
/* place-items: center end; */
/* place-items: center; */
/* place-items: stretch center; 
align-content: evenly;
}
*/

/* .grid__item:nth-child(8) {
	color: red;
	font-weight: 700;
	/* 
	align-self: center;
	justify-self: start;
	 
	place-self: center start;
}*/
/*
.grid__item:nth-child(3) {
	color: yellowgreen;
	font-weight: 700;
	grid-column-start: 2;
	grid-column-end: 3; 
	grid-row-start: 2;
	grid-row-end: 3; 
grid-column: 2 / 3;
grid-row: 2 / 3;
z-index: 5;
возможно наложение объектов
}

*/
/* .grid__item:nth-child(1) {
	grid-column: 1 / 3;
	grid-row: 1/3;
} 

.grid__item:nth-child(1) {
	grid-column: 1 / span 2;
	grid-row: 1/ span 2;
}

.grid__item:nth-child(13) {
	grid-column: 1 / 3;
	grid-row: 3/5;
}

*/

/* -------------------------- */

.grid {
	display: grid;
	grid-template-columns: [start menus-s] 1fr [menu-e center-s] 4fr 1fr [end];
	grid-template-rows: [header-s] 1fr [header-e] 4fr [footer-s] 1fr [footer-e];
	/* gap: 15px; */
	grid-template-areas:
		"header header header"
		"menu main main"
		"footer footer footer";
}

.grid__item:nth-child(1) {
	color: red;
	font-weight: 700;
	/* grid-column: 1 / 4; */
	/* --- */
	/* grid-column: start /end;
	grid-row: header-s / header-e; */
	/* --- */
	grid-area: header;
}

.grid__item:nth-child(2) {
	color: red;
	font-weight: 700;
	/* grid-column: 2 /4;
	grid-row: 2 / 3; */
	/* --- */
	/* grid-column: menus-s / menu-e;
	grid-row: header-e / footer-s; */
	/* --- */
	grid-area: menu;

}

.grid__item:nth-child(3) {
	color: red;
	font-weight: 700;
	/* grid-column: 1 /4; */
	/* --- */
	/* grid-column: center-s / end;
	grid-row: header-e / footer-s; */
	/* --- */
	grid-area: main;
}

.grid__item:nth-child(4) {
	color: red;
	font-weight: 700;
	/* grid-column: 1 /4; */
	/* --- */
	/* grid-column: start / end;
	grid-row: footer-s / footer-e; */
	/* --- */
	grid-area: footer;
}

----------
----------
----------
----------


@media (max-width:1280px) and (min-width:1000px) {
body {
background-color: red;
}
}

@media (orientation: portrait) {
body {
background-color: green;
}
}

@media (max-width:450px)   {
body {
display: none;
}
}

@media /* Variants */ print screen all /* Variants */  {
body {
display: none;
}
}

/*Desktop first*/
/*1366 ~ (1200)*/
/*1024 ~ (1000)*/
/*768*/
/*480*/

/*Mobile first*/
/*480 (540)*/
/*768*/
/*1000*/
/*1366*/
