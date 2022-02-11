import React from 'react';

const url = "https://brooke6n.beget.tech/apply.rtfblog.ru/";
const user = {
    login:"brooke6n_alexey",
    password:"iv5C&*9f"
}

const Api ={
    addUser : (formData)=> {
         return new Promise((succeed,failed)=> {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${url}storeData.php`, true,user.login,user.password);
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 400) {
                     succeed(xhr.response);
                } else {
                      failed(new Error(`Request failed ${xhr.statusText}`));
                }
            });
              xhr.addEventListener("error",()=> failed(new Error("Network error")));

            xhr.send(JSON.stringify(Object.fromEntries(formData)));
         })
    },
    getUser : (token) => {
        return new Promise((succeed, failed) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET",url,true,user.login,user.password);
            xhr.addEventListener("load",()=> {
                if(xhr.status >= 200 && xhr.status < 400){
                    succeed(xhr.response);
                }
                else{
                    failed(new Error(`Request failed: ${xhr.statusText}`));
                }
            });
            xhr.addEventListener("error",() => failed(new Error("Network error")));
            xhr.send(token);
        });
    }
};

export default Api;
