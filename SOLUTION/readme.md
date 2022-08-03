# Solution

1. Access to `/`
2. Access again to `/`, message displayed is different now, so check cookies or localsession storage
3. There is a cookie with key profile and a value, it seems to be base64
4. Decode value and it says the flag is in current dir and that we need to use a deserialization vuln
5. Construct payload and base64 encode it

> *At first user will try to list current dir, then will see that there is a file named my_fl4g.lol.*
>
> *He will then cat the file*
```
node run ./SOLUTION/payload.js
```
6. Replace value in cookie with crafted value
7. Refresh page
8. Get the flag

# Explanation

https://www.exploit-db.com/docs/english/41289-exploiting-node.js-deserialization-bug-for-remote-code-execution.pdf