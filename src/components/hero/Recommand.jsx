import { recommand } from '../assets/data/data'
import { Card_sm } from '../common/Card_sm'
import { Title } from '../common/Title'


export function Recommand() {
    return (
        <>
            <section className='treading hero mt-7 pb-32'>
                <Title title='Recommand for you' />

                <div className='grid grid-cols-2  gap-5'>
                    {recommand.map((item, i) => (
                        <div className='box card hero'>
                            <Card_sm cover={item.cover} name={item.name} tag={item.tag} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
