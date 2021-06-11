import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.500,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020"
        },
        {
            id: '2',
            type: 'negative',
            title: "DiRango",
            amount: "R$ 65,50",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "13/04/2020"
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel",
            amount: "R$ 900,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: "13/04/2020"
        },
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/4955611?v=4' }}
                        />
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>Paulinho</UserName>
                        </User>
                    </UserInfo>

                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada 13 de abril"
                    type="up"
                />

                <HighlightCard
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última entrada 03 de abril"
                    type="down"
                />

                <HighlightCard
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 a 16 de abril"
                    type="total"
                />

            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>

        </Container>
    )
}


