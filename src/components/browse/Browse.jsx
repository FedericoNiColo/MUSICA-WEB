import { browse } from '../assets/data/data'

import { Card_lg } from '../common/Card_lg'
import { Title } from '../common/Title'


export function Browse() {
    return (
        <>
            <section className='treading hero mt-8 sm:mt-20'>
                <h2 className='text-5xl font-bold mb-5 text-primary'>Chart</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-5'>
                    {browse.map((item, i) => (
                        <div className='box card hero'>
                            <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
