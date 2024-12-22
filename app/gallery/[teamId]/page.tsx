'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import TeamDetails from '@/components/ui/team-details'

interface GalleryItem {
    id: number
    sport: string
    year: string
    title: string
    image: string
}

interface TeamData {
    id: number
    name: string
    sport: string
    year: string
    mainImage: string
    gallery: string[]
}

const galleryItems: GalleryItem[] = [
    { id: 1, sport: 'soccer', year: '2024', title: 'Aiden FC', image: '/gallery/aiden.jpg' },
    { id: 2, sport: 'soccer', year: '2024', title: 'Liverpool FC', image: '/gallery/liverpool.jpg' },
    { id: 3, sport: 'soccer', year: '2024', title: 'Ismaili Sports League', image: '/gallery/ismaili.jpg' },
    { id: 4, sport: 'soccer', year: '2024', title: 'Sorella', image: '/gallery/sorella.jpg' },
    { id: 5, sport: 'soccer', year: '2024', title: 'Thunder FC', image: '/gallery/thunder.jpg' },
    { id: 6, sport: 'basketball', year: '2024', title: 'Chip Chaser', image: '/gallery/chipchaser.jpg' },
    { id: 7, sport: 'basketball', year: '2024', title: 'Dream Team', image: '/gallery/dreamteam.jpg' },
    // { id: 8, sport: 'basketball', year: '2024', title: 'Spidaa', image: '/gallery/spidaa.jpg' },
    { id: 9, sport: 'basketball', year: '2024', title: 'Swishaz', image: '/gallery/swishaz.jpg' },
    { id: 10, sport: 'soccer', year: '2024', title: 'FSF FC', image: '/gallery/FSF.jpg' },
    { id: 11, sport: 'basketball', year: '2024', title: 'Jelly', image: '/gallery/jelly.jpg' },
    { id: 12, sport: 'soccer', year: '2024', title: 'man-chest-hair', image: '/gallery/man.jpg' },
    { id: 13, sport: 'soccer', year: '2024', title: 'Misfits', image: '/gallery/misfits.jpg' },
    { id: 14, sport: 'basketball', year: '2024', title: 'MNL Basketball', image: '/gallery/mnl.jpg' },
    { id: 15, sport: 'basketball', year: '2024', title: 'Bluff Goons', image: '/gallery/bluff.jpg' },
    { id: 16, sport: 'basketball', year: '2024', title: 'Average Joes', image: '/gallery/averagejoes.jpg' },
    { id: 17, sport: 'basketball', year: '2024', title: 'East End Eagles', image: '/gallery/eastendeagles.jpg' },
    { id: 18, sport: 'soccer', year: '2024', title: 'Taaqat', image: '/gallery/taaqat.jpg' },
    { id: 19, sport: 'soccer', year: '2024', title: 'United Futsal', image: '/gallery/united.jpg' },
    { id: 20, sport: 'soccer', year: '2024', title: 'Young Sirs', image: '/gallery/youngsirs.jpg' },
    { id: 21, sport: 'basketball', year: '2024', title: 'Uncle Drew', image: '/gallery/uncle.jpg' },


]

export default function TeamDetailsPage() {
    const params = useParams()
    const [team, setTeam] = useState<TeamData | null>(null)

    useEffect(() => {

        const teamId = parseInt(params.teamId as string, 10)

        const foundTeam = galleryItems.find(item => item.id === teamId)

        if (foundTeam) {
            const teamData: TeamData = {
                id: foundTeam.id,
                name: foundTeam.title,
                sport: foundTeam.sport,
                year: foundTeam.year,
                mainImage: foundTeam.image,
                gallery: [

                    ...Array(12).fill(null).map((_, index) =>
                        `/teams/${foundTeam.title.toLowerCase().replace(/\s+/g, '-')}/game${index + 1}.jpg`
                    )
                ]
            }

            setTeam(teamData)

        }
    }, [params])


    if (!team) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return <TeamDetails team={team} />
}