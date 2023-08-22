import { ChartDonut, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Hero, HomeContainer, ProductList, ProductWrapping } from './styles'
import donut from '../../assets/donuts.png'
import { SelectTag, Option } from './components/SelectTag'
import { DonutType, DonutCard } from './components/DonutCard'
import { ListIcon } from '../../components/ListIcon'
import { useState } from 'react'
import { MultiValue } from 'react-select'

export function Home() {
  const donuts: DonutType[] = [
    {
      id: '1',
      flavor: 'Brigadeiro',
      description:
        'Cremoso e irresistível, com doce de leite e cobertura de chocolate. Deliciosamente viciante!',
      tags: ['chocolate', 'doce de leite'],
      price: 3.5,
      avatar: 'brigadeiro.png',
    },
    {
      id: '2',
      flavor: 'Cookie',
      description:
        'Deliciosamente recheado com pedaços crocantes de cookie. Irresistível!',
      tags: ['cookie', 'chocolate'],
      price: 4.5,
      avatar: 'cookie.png',
    },
    {
      id: '3',
      flavor: 'Maracujá',
      description:
        'Refrescante e tropical! Uma combinação doce de maracujá com cobertura cítrica.',
      tags: ['Maracujá'],
      price: 3.0,
      avatar: 'maracuja.png',
    },
    {
      id: '4',
      flavor: 'Morango',
      description: 'Doçura fresca do morango em cada mordida!',
      tags: ['morango', 'cobertura açucarada'],
      price: 3.2,
      avatar: 'morango.png',
    },
    {
      id: '5',
      flavor: 'Morango Granulado',
      description:
        'Doçura suculenta do morango com delicioso granulado. Uma explosão de sabores em cada mordida!',
      tags: ['morango', 'granulado'],
      price: 3.2,
      avatar: 'morango-granulado.png',
    },
    {
      id: '6',
      flavor: 'Oreo',
      description:
        'Delicioso donut com pedaços crocantes de Oreo. Irresistível!',
      tags: ['oreo', 'chocolate'],
      price: 3.5,
      avatar: 'oreo.png',
    },
    {
      id: '7',
      flavor: 'Cappuccino',
      description:
        'O sabor Cappuccino combina o aroma marcante do café com uma cobertura cremosa de baunilha.',
      tags: ['recheio de cappuccino', 'baunilha'],
      price: 3.5,
      avatar: 'cappuccino.png',
    },
    {
      id: '8',
      flavor: 'Churros',
      description:
        'O sabor Churros traz a autêntica combinação de canela e açúcar em cada mordida. ',
      tags: ['cobertura de açúcar e canela'],
      price: 3.2,
      avatar: 'churros.png',
    },
    {
      id: '9',
      flavor: 'Limão',
      description:
        'O donut de Limão traz a acidez revigorante do limão com uma cobertura açucarada. ',
      tags: ['recheio de limão', 'cobertura açucarada'],
      price: 3.0,
      avatar: 'limao.png',
    },
    {
      id: '10',
      flavor: 'Torta de Maçã',
      description:
        'O donut de Torta de Maçã traz o delicioso sabor da maçã cozida com canela e um toque de doçura. ',
      tags: ['recheio de maçã', 'amendoim'],
      price: 3.5,
      avatar: 'torta-maca.png',
    },
    {
      id: '11',
      flavor: 'Tradicional',
      description:
        'O donut Tradicional é simplesmente irresistível, com sua massa macia e sabor levemente adocicado. ',
      tags: ['cobertura açucarada'],
      price: 3.0,
      avatar: 'tradicional.png',
    },
    {
      id: '12',
      flavor: 'Abacate',
      description:
        'O donut de Abacate traz a cremosidade do abacate combinada com um toque sutil de doçura.',
      tags: ['recheio de abacate cremoso', 'amendoim'],
      price: 3.0,
      avatar: 'abacate.png',
    },
  ]
  const [selectedDonuts, setSelectedDonuts] = useState<DonutType[]>(donuts)

  function handleSelectedDonuts(selectedOption: MultiValue<Option>) {
    if (selectedOption.length === 0) {
      setSelectedDonuts(donuts)
      return
    }

    const filteredSelected = selectedOption.map((tag) =>
      tag.value.toLowerCase(),
    )

    setSelectedDonuts(
      donuts.filter((donut) =>
        donut.tags.some((tag) => filteredSelected.includes(tag.toLowerCase())),
      ),
    )
  }

  const donutsTags = donuts.flatMap((donut) => donut.tags)
  return (
    <HomeContainer>
      <Hero>
        <div>
          <h1>Encontre o donut perfeito para qualquer hora do dia</h1>
          <p>
            Com o Donuts Delivery você recebe seu donut onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <ListIcon iconColor="darkYellow">
                {' '}
                <ShoppingCart weight="fill" />
              </ListIcon>
              Compra simples e segura
            </li>
            <li>
              <ListIcon iconColor="gray">
                {' '}
                <Package weight="fill" />
              </ListIcon>
              Embalagem mantém o donut intacto
            </li>
            <li>
              <ListIcon iconColor="yellow">
                {' '}
                <Timer weight="fill" />
              </ListIcon>
              Entrega rápida e rastreada
            </li>

            <li>
              <ListIcon iconColor="purple">
                {' '}
                <ChartDonut weight="fill" />
              </ListIcon>
              Donut do tamanho da sua fome
            </li>
          </ul>
        </div>
        <img src={donut} alt="" />
      </Hero>
      <ProductWrapping>
        <div>
          <h2>Nossos donuts</h2>

          <SelectTag donutTags={donutsTags} onChange={handleSelectedDonuts} />
        </div>

        <ProductList>
          {selectedDonuts.map((donut) => (
            <DonutCard key={donut.id} donut={donut} />
          ))}
        </ProductList>
      </ProductWrapping>
    </HomeContainer>
  )
}
