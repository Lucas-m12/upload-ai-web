import { FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Slider } from '../ui/slider';
import { Textarea } from '../ui/textarea';

export const Aside = () => {
	return (
		<aside className='w-80 space-y-6'>
			<form className='space-y-6'>
				<label
					htmlFor="video"
					className='cursor-pointer border w-full flex rounded-md aspect-video border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
				>
					<FileVideo className='w-4 h-4' />
					Selecione um vídeo
				</label>
				<input type="file" name="video" id="video" accept='video/mp4' className='sr-only' />
				<Separator />
				<section className='space-y-2'>
					<Label htmlFor='trancription-prompt'>Prompt de transcrição</Label>
					<Textarea
						id='transcription-prompt'
						className='h-20 leading-relaxed resize-none'
						placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'
					/>
				</section>
				<Button type='submit' className='w-full'>
					Carregar vídeo <Upload className='w-4 h-4 ml-2' />
				</Button>
			</form>
			<Separator />
			<form className='space-y-6'>
				<section className='space-y-2'>
					<Label>Prompt</Label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Selecione um prompt...' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='youtube-title'>Título do YouTube</SelectItem>
							<SelectItem value='youtube-description'>Descrição do YouTube</SelectItem>
						</SelectContent>
					</Select>
				</section>
				<section className='space-y-2'>
					<Label>Modelo</Label>
					<Select defaultValue='gpt3.5' disabled>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
						</SelectContent>
					</Select>
					<span className='block text-xs text-muted-foreground italic'>
						Você poderá customizar essa opção em breve
					</span>
				</section>
				<Separator />
				<section className='space-y-4'>
					<Label>Temperatura</Label>
					<Slider
						min={0}
						max={1}
						step={0.1}
					/>
					<span className='block text-xs text-muted-foreground italic leading-relaxed'>
						Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros
					</span>
				</section>
				<Separator />
				<Button type='submit' className='w-full'>
					Executar <Wand2 className='w-4 h-4 ml-2' />
				</Button>
			</form>
		</aside>
	);
};
