import { Message} from '../entities/Message';


//Contrato - define Que se puede hacer, no como 
export interface ChatRepository {
    sendMessage(userMessage: string, history: Message[]):Promise<string>;
}