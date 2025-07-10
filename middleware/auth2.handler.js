const express  = require("express")
const passwort =  require("passport")
const GoogleStrategy =  require("passport-google-oauth20").Strategy
const app =  express();

// app.use(passwort.initialize())
// app.use(passwort.session())


passwort.use(new GoogleStrategy({
    clientID : "1021410688806-k0vibf2mbrj89t171087sin315umg9kr.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "http://localhost:3000/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
    return done(null,profile)
}))


passwort.serializeUser((user,done)=> done(null,user)) 
passwort.deserializeUser((user,done)=> done(null,user))

// app.get("/auth/google",passwort.authenticate("google", {scope :["profile", "email"]}))


// clientId - 1021410688806-k0vibf2mbrj89t171087sin315umg9kr.apps.googleusercontent.com

// clientSecret - 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

// July 10, 2025 at 3:33:30 PM GMT+5



//______________---server.js---________________
// app.get("/",(req,res)=>{
//     res.send("<a href='/auth/google'> Auth login with google </a>")
// })
// app.get("/dashboard",(req,res)=>{
//   res.send("Welcome to dashboard!")
// })

// app.get("/logout", async (req,res,next)=>{
//   req.logout((err)=>{
//     if(err){
//       return next(err)
//     }
//     res.redirect("/")
//   })
  
// })

// app.get("/auth/google",passport.authenticate("google", {scope :["profile", "email"],prompt: "select_account"}))
// app.get("/auth/google/callback",passport.authenticate("google",{failureRedirect:"/"}),(req,res)=>{
//   console.log("res",req.user)
//   // console.log()
//   res.redirect("/dashboard")
// })
// app.post("/login",login)