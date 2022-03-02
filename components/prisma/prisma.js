const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
    // await prisma.user.create({
    //     data: {
    //         name: 'Morgane',
    //         email: 'morgane@vendmy.com',
    //         posts: {
    //             create: {title: 'Hello World', updatedAt: new Date()}
    //         },
    //         profile: {
    //             create: {bio: 'I like dogs'},
    //         }
    //     }
    // })

    // const post = await prisma.post.update({
    //     where: {id: 1},
    //     data: {published: true}
    // })
    // console.log(post)

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // })

    // console.dir(allUsers, {depth: null})

    // await prisma.user.update({
    //     where: {email: 'mathieu@vendmy.com'},
    //     data: {profile:{update: {role: 'CTO'}} }
    // })
    // await prisma.user.update({
    //     where: {email: 'adrien@vendmy.com'},
    //     data: {profile:{update: {role: 'CEO'}} }
    // })
    // await prisma.user.update({
    //     where: {email: 'morgane@vendmy.com'},
    //     data: {profile:{update: {role: 'Design'}} }
    // })

// }

// main().catch((e) => {
//     throw e
// }).finally(async() => {
//     await prisma.$disconnect()
// })

// export default function PrismaExample() {
//     return (<></>)
// }


// export const getServerSideProps = async () => {
//     const teamList = await prisma.profile.findMany({
//         where: {
//             rank: 'Team'
//         },
//         include: {
//             user: true
//         }
//     })
//     return {props: { teamList }}
// }

// export default function ListeMember({teamListe}) {
//     return (
//         <ul>
//             {teamListe.map((member) => (
//                 <li key={member.id}>
//                     {member.user.name}
//                 </li>
//             ))}
//         </ul>
//     )

// }

// export async function getStaticProps() {
//     const prisma = new PrismaClient()
//     const teamListe = await prisma.profile.findMany({
//         where: {
//             rank: 'Team'
//         },
//         include: {
//             user: true
//         }
//     })
//     return { props: { teamListe } }
// }


// export const getServerSideProps = async () => {
//     const teamList = await prisma.profile.findMany({
//         where: {
//             rank: 'Team'
//         },
//         include: {
//             user: true
//         }
//     })
//     return {props: { teamList }}
// }
