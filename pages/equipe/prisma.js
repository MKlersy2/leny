const { PrismaClient } = require('@prisma/client');
const { data } = require('jquery');
const prisma = new PrismaClient();

async function main() {
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

    await prisma.user.update({
        where: {email: 'mathieu@vendmy.com'},
        data: {profile:{update: {role: 'CTO'}} }
    })
    await prisma.user.update({
        where: {email: 'adrien@vendmy.com'},
        data: {profile:{update: {role: 'CEO'}} }
    })
    await prisma.user.update({
        where: {email: 'morgane@vendmy.com'},
        data: {profile:{update: {role: 'Design'}} }
    })

}

main().catch((e) => {
    throw e
}).finally(async() => {
    await prisma.$disconnect()
})

export default function prisma() {
    return (<></>)
}