var validate = new Validator('#form-validate');
validate.validator({
    rules:{
        '#full-name': {
            required : true,
        },
        '#email': {
            required : true,
            email: true,
        },
        '#title': {
            required : true,
        },
        '#content': {
            required : true,
        }
    },
    message: {
        '#full-name': {
            required : 'Vui lòng nhập tên của bạn',
        },
        '#email': {
            required : 'Vui lòng nhập email',
            email: 'Bạn nhập sai định dạng email',
        },
        '#title': {
            required : 'Vui lòng nhập tiêu đề',
        },
        '#content': {
            required : 'Vui lòng nhập nội dung',
        }
    },
    onSubmit: function (data) {
        console.log(data)
    }
})
