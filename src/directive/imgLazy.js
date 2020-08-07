import baseImg from '@/assets/logo.png'

function showImage(el, imgSrc) {
  const img = new Image()
  img.src = imgSrc
  img.onload = () => {
    el.src = imgSrc
    el.isLoaded = true
  }
}

// 创建一个监听器
let observer = new IntersectionObserver(entries => {
  // entries 是所有被监听对象的集合
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当被监听元素到临界值且尚未加载图片时触发
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
    }
  })
})

export default {
  // 这里用inserted 和 bind 都行，因为 intersectionObserver是异步的，以防意外还是用inserted好一点
  // inserted 和 bind的区别在于inserted 时元素已经插入页面,能够直接获取到dom元素的位置
  inserted(el, binding) {
    // 初始化时展示默认图片
    el.src = baseImg
    // 将需要加载的图片地址绑定在dom上
    el.data_src = binding.value
    observer.observe(el)
  },
  unbind() {
    // 停止监听
    observer.disconnect()
  },
}
