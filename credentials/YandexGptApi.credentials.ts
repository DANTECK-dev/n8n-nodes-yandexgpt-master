import {
	IAuthenticateGeneric,
	Icon,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class YandexGptApi implements ICredentialType {
	name = 'yandexGptApi';
	displayName = 'Yandex GPT API';
	icon: Icon = 'file:YandexGptApi.svg';
	documentationUrl = 'https://yandex.cloud/ru/docs/foundation-models/api-ref/authentication';
	properties: INodeProperties[] = [
		{
			displayName: 'Folder ID',
			name: 'folderId',
			type: 'string',
			default: '',
			placeholder: 'Enter your Folder ID here...',
			description: 'Folder ID for accessing the Yandex GPT API. You can find it in the <a href="https://yandex.cloud/ru/docs/resource-manager/operations/folder/get-id" target="_blank">Yandex Cloud Console</a>.',
			required: true,
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'Enter your Yandex GPT API Key here...',
			description: 'API Key for accessing the Yandex GPT API.',
			required: true,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Api-Key {{$credentials.apiKey}}',
			},
		},
	};
}
