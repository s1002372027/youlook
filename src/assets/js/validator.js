import schema from 'async-validator';

var descriptor = {
	login:{
		name: {
			type: "string",
			required: true,
			// validator: (rule, value) =>{
			// 	return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)
			// },
			message:"账号长度最小6位，并包含数字和字母！"
		},
		phone: {
			type: "number",
			validator: (rule, value) =>{
				return /^1[3456789]\d{9}$/.test(value)
			},
			message:"电话号码不正确！"
		},
		code: {
			type: "string",
			required: true,
			message:"请输入验证码！"
		}
	},
	code:{
		phone: {
			type: "number",
			validator: (rule, value) =>{
				return /^1[3456789]\d{9}$/.test(value)
			},
			message:"电话号码不正确！"
		}
	}
	
};

// PROMISE USAGE
export function validators(data,key) {
	return new Promise((resolve, reject) => {
		let validator = new schema(descriptor[key]);
		validator.validate(data).then(() => {
			resolve({code:true})
		}).catch((errors) => {
			document.getElementsByName(errors.errors[0].field)[0].focus()
			alert(errors.errors[0].message)
			reject({code:false,data:errors.errors});
		})
	}).catch((e) => {
		return e
	});
}
