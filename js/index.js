// 获取滚动框 dom节点
const npContain = document.querySelector( '.np-contain' );
// 滑动的步长
const STEP = npContain.children[ 0 ].clientWidth;
// 获取左右点击的控制按钮 dom节点
const leftBtn = document.querySelector( '.control-contain>.icon-left' ),
	rightBtn = document.querySelector( '.control-contain>.icon-right' );

leftBtn.addEventListener( 'click', function() {
	let left = parseInt(getComputedStyle(npContain).left)
	if (left === 0) {
		return;
	}
	npContain.style.left = `${left + STEP}px`
} )
rightBtn.addEventListener( 'click', function() {
	let left = parseInt(getComputedStyle(npContain).left)
	if((-1*left + STEP) > npContain.clientWidth/3) {
		return;
	}
	npContain.style.left = `${left - STEP}px`
} )
