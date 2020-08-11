interface Mail {
    res: boolean;
    msg: string;
}

const checkMail: (eMail: string) => Mail = function checkMail(eMail: string): Mail {
    const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if (eMail === "") { //输入不能为空
        return { res: false, msg: '输入不能为空！' };
    } else if (!reg.test(eMail)) { //正则验证不通过，格式不对
        return { res: false, msg: '邮箱错误！' };
    } else {
        return { res: true, msg: '' };
    }
}


export { checkMail }
