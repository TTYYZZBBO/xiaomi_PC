// storge封装
const KEY='mall';
export default{
	setItem(key,value,module_name){
		let val=this.getStorge();
		val[key]=value;
		window.sessionStorage.setItem(KEY)
	},
	getItem(key,module_name){
		if(module_name){
			let val=this.getItem(module_name);
			if(val) return val[key];
		}
		return this.getStorge()[key];
	},
	getStorge(){
		return JSON.parse(window.sessionStorage.getItem(KEY) || '{}');
	},
	clear(){
		
	}
}