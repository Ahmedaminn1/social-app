import * as z from "zod";

export const regSchema = z.object({
  name: z.string().nonempty("Name is Required").min(5, "Name must be At Least 5 Characters").max(20, "Name must not exceed 20 characters"),
  username: z.string().nonempty("Username is Required").min(3, "Username must be At Least 3 Characters").max(15, "Username must not exceed 15 characters").regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email:z.string().nonempty("Email is Required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter is invalid "),
  password:z.string().nonempty("Password is Required").regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password must be at least 8 characters with at least one letter, one number and one special character"),
  rePassword:z.string().nonempty("Confirm password is Required"),
  dateOfBirth:z.coerce.string().refine((date) => {
    const currentYear = new Date().getFullYear()
    const birthYear = new Date(date).getFullYear()
    const age =  currentYear - birthYear
    return age >= 18
  },{message: "Age Must Be At Least 18 Years Old"}),
  gender : z.string().nonempty("You must  choose gender").regex(/^(male|female)$/i,"Gender must be one of male or female")
}).refine(data => data.password === data.rePassword,{
  path:["rePassword"],
  message:"Passwords must match"
})


export const loginSchema = z.object({
  email:z.string().nonempty("Email is Required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter is invalid "),
  password:z.string().nonempty("Password is Required").regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password must be at least 8 characters with at least one letter, one number and one special character"),
})