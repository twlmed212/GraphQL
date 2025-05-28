import { PError, P } from "../main.js"
import { fetchData } from "./fetch.js"

const queryUrl = `https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql`


export async function checkAuthorizationAndGetData(){
  if (P?.user) {
    return(P && P?.user) && P?.user?.data.profile[0]
  }
    const query = `
      {
        ranks: object(
          where: {type: {_eq: "module"}, attrs: {_has_key: "ranksDefinitions"}}
        ) {
          attrs
          type
        }
        profile: user {
          campus
          login
          totalUp
          totalDown
          auditRatio
          Data: attrs
        }
       projects: transaction(
          where: {type: {_eq: "xp"},
            _and: [
              {path: {_nlike: "%piscine-go%"}},
              {path: {_nlike: "%piscine-js%"}},
              {path: {_nlike: "%checkpoint%"}}
            ]}
          order_by: {createdAt: asc}
        ) {
          path
          amount
          createdAt
        }
          skills: user {
            transactions(where: {type: {_like: "skill_%"}}, order_by: {amount: asc}) {
              type
              amount
            }
          }
        level: transaction(
          where: {_and: [{type: {_eq: "level"}}, {event: {object: {name: {_eq: "Module"}}}}]}
          order_by: {amount: desc}
          limit: 1
        ) {
          type
          amount
        }
        xp: transaction_aggregate(
            where: {_and: [{type: {_like: "xp"}}, {_or: [{originEventId: {_eq: 41}}, {path: {_ilike: "/oujda/module/checkpoint/%"}}, {path: {_ilike: "/oujda/module/piscine-js"}}]}]}
          ) { 
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    `
   
    const token = `Bearer ${localStorage.getItem("token")}`
    const data = await fetchData(queryUrl, token, query)
      
    if (data?.errors){
        return false
    }
    P.user = data
    proccessData()
    PError(`Profile Object:`, "green", P)
    return (P && P?.user) && P?.user?.data.profile[0]
}


function proccessData(){
  // calculate the XP Amount
  P.xp = 0
  P.user.data.projects.map(elem => {
    P.xp += elem.amount
  })
  
  // P.user.data.projects = P.user.data.projects.map(project => {
  //   return {
  //     ...project,
  //     amount: project.amount * 2 // Example: doubling the amount for demonstration
  //   }
  // })
  // P.xp = P.user.data.projects.reduce((accum, project) => accum + project.amount, 0)
}
