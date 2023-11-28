const siteUrl =  process.env.URL

let policy = {
    userAgent: "*"
}

if(process.env.ENVIRONMENT !== 'production'){
    policy.disallow = "/"
}


module.exports = {
    siteUrl, 
    generateRobotsTxt: true, 
    robotsTxtOptions: {
        policies: [

            policy
        ]
        
    },
    outDir: "./"
}