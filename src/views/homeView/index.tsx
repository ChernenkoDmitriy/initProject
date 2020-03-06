import React, { FC, useContext } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { signUp } from '../../modules/redux/reducersAndActions/appState/appStateActions';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../../i18n/indes';
import { ChatItem } from './components/chatItem';
import { useSelector } from 'react-redux';
import { addContact, removeContact } from '../../modules/redux/reducersAndActions/contacts/contactsActions';

interface Props {
    navigation?: any;
}

interface RootState {
    contacts: {
        contacts: Array<Object>,
    }
}

const selectContacts = (state: RootState) => state.contacts;

const HomeView: FC<Props> = ({ navigation }) => {
    const dispatch: AppDispatch = useDispatch()
    const { colors } = useTheme();
    const { t } = useContext(LocalizationContext);
    const contacts = useSelector(selectContacts);

    const goToChatView = () => {
        navigation.navigate('ChatView');
    }

    return (
        <View style={getStyle('container', colors)}>
            <FlatList data={contacts}
                renderItem={({ item }) => <ChatItem {...{ colors }} onPress={goToChatView} text={'My chat'} />} />
            <Text style={getStyle('title', colors)}>HomeView</Text>
            <Button title='add' onPress={() => { dispatch(addContact({ id: `${contacts.length}` })) }} />
            <Button title='remove' onPress={() => { dispatch(removeContact({ id: `${contacts.length-1}` })) }} />
            <Button title='sign out' onPress={() => { dispatch(signUp(false)) }} />
        </View>
    )
};

export default HomeView;
