import React, { FC, useContext, useState, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';
import { LocalizationContext } from '../../i18n/indes';
import { useTheme } from '@react-navigation/native';
import { GiftedChat } from 'react-native-gifted-chat'
import Message from './slack';

interface ChatViewProps {

}

const messages = [
    {
        _id: 1,
        text: 'Hellodsg sd gsdg sdfdjk hdf dkfjhldfk sdfsd f sdggs  ssfsdfsdghdf sgfds fsdgfsd  fdsgsgsd developer!!!1',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 2,
        text: 'Hello developer!!!2',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 3,
        text: 'Hello developer!!!3',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 1,
        text: 'Hello developer!!!4',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },    {
        _id: 1,
        text: 'Hellodsg sd gsdg sdfdjk hdf dkfjhldfk sdfsd f sdggs  ssfsdfsdghdf sgfds fsdgfsd  fdsgsgsd developer!!!1',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 2,
        text: 'Hello developer!!!2',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 3,
        text: 'Hello developer!!!3',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 1,
        text: 'Hello developer!!!4',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },    {
        _id: 1,
        text: 'Hellodsg sd gsdg sdfdjk hdf dkfjhldfk sdfsd f sdggs  ssfsdfsdghdf sgfds fsdgfsd  fdsgsgsd developer!!!1',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 2,
        text: 'Hello developer!!!2',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 3,
        text: 'Hello developer!!!3',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 1,
        text: 'Hello developer!!!4',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },    {
        _id: 1,
        text: 'Hellodsg sd gsdg sdfdjk hdf dkfjhldfk sdfsd f sdggs  ssfsdfsdghdf sgfds fsdgfsd  fdsgsgsd developer!!!1',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 2,
        text: 'Hello developer!!!2',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 3,
        text: 'Hello developer!!!3',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }, {
        _id: 1,
        text: 'Hello developer!!!4',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
]

export const ChatView: FC<ChatViewProps> = ({ }) => {
    const { t } = useContext(LocalizationContext);
    const { colors, dark } = useTheme();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onSend = (message = []) => {

    }

    const renderMessage = (props) => {
        const {
            currentMessage: { text: currText },
        } = props

        let messageTextStyle = {};

        return <Message {...props} messageTextStyle={messageTextStyle} />
    }

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={message => onSend(message)}
                user={{
                    _id: 1,
                }}
                renderMessage={renderMessage}
            />
        </View>
    );
};

export default ChatView;
