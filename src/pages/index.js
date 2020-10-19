import React from "react";
import theme from "theme";
import { Theme, Image, Button, Text, Span, Box, Input, Link, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section height="80px" padding="0px 0 0px 0" quarkly-title="HEADER" lazy-load={false}>
			<Override slot="SectionContent" max-width="1200px" background="#ffffff" justify-content="center" />
			<Stack gap="0px">
				{"    "}
				<StackItem width="25%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" />
					{"        "}
					<Image
						width="200px"
						height="53px"
						src="https://static.tildacdn.com/tild3861-3861-4464-b163-616164306334/Modulbank-logo-ru-rg.svg"
						display="flex"
						lg-margin="28px 0px 0px 0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Menu display="flex">
						<Override slot="item-404" display="none" />
						<Override slot="item-index" display="none" />
						<Override
							slot="link"
							text-decoration-line="initial"
							color="#707070"
							font="--menu"
							hover-color="#98C741"
						/>
						<Override slot="link-job">
							Как работает
						</Override>
						<Override slot="link-bank">
							О банке
						</Override>
						<Override slot="link-start">
							Как начать
						</Override>
					</Menu>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-display="block" lg-width="50%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						lg-align-items="center"
						lg-justify-content="flex-end"
					/>
					{"        "}
					<Button border-color="#707070" background="#8cca11" font="normal 500 14px/1.5 --fontFamily-googleRoboto" lg-display="none">
						Стать партнером
					</Button>
					<Components.MobileMenu display="none" lg-display="block">
						<Override slot="icon" lg-background="#FAFAFA" lg-padding="10px 10px 10px 10px" lg-border-color="#99C741" />
						<Override
							slot="menu"
							lg-background="#FAFAFA"
							lg-position="absolute"
							lg-top="73.5px"
							lg-right="46.375px"
							lg-border-width="0px"
							lg-border-color="#9e2c2c"
							lg-width="180px"
							md-padding="0px 0 0px 0px"
							md-right="36.375px"
							sm-right="25.375px"
						>
							<Override
								slot="link"
								lg-color="#707070"
								lg-font="400 16px --fontFamily-googleRoboto"
								lg-text-decoration-line="initial"
								lg-hover-color="#98C741"
							/>
							<Override slot="link-404">
								404
							</Override>
							<Override slot="item-404" lg-display="none" />
							<Override slot="item-index" lg-display="none" />
							<Override slot="item" lg-font="4 16px sans-serif" />
							<Override slot="link-job">
								Как работает
							</Override>
							<Override slot="link-bank">
								О банке
							</Override>
							<Override slot="link-start">
								Как начать
							</Override>
						</Override>
						<Override slot="icon-close" />
					</Components.MobileMenu>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			quarkly-title="1BLOCK"
			padding="0px 0 0px 0"
			align-items="center"
			height="100vh"
			lg-height="auto"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack>
				{"    "}
				<StackItem width="48%" display="flex" lg-width="100%" lg-padding="16px 16px 80px 16px">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					<Text
						font="700 46px/1.25 --fontFamily-googleRoboto"
						color="#253c77"
						sm-font="700 30px/1.25 --fontFamily-googleRoboto"
						sm-margin="100px 0px 16px 0px"
						lg-margin="200px 0px 16px 0px"
					>
						Приглашайте клиентов
						<br />
						и получайте деньги
					</Text>
					<Text color="#707070" font="400 22px/1.6 --fontFamily-googleRoboto" />
					<Button
						border-color="#707070"
						background="#8cca11"
						font="normal 500 16px/1.55 --fontFamily-googleRoboto"
						width="300px"
						height="65px"
						hover-background="#7aba02"
						transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
						margin="68px 0px 0px 0px"
					>
						Стать партнером
					</Button>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="52%" display="flex" lg-width="100%" lg-margin="40px 0px 80px 0px">
					<Override slot="StackItemContent" flex-direction="column" position="relative" lg-align-items="center" />
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/111.svg?v=2020-10-12T13:53:07.709Z" lg-padding="0px 0px 0px 0px" lg-width="90%" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Image width="100%" src="https://static.tildacdn.com/tild6233-3931-4136-a236-613932323535/_14.svg" />
		</Section>
		<Section background="#FAFAFA">
			<Override slot="SectionContent" max-width="1200px" />
			<Text font="700 46px/1.25 --fontFamily-googleRoboto" color="#253c77" margin="0 0px 0px 0px" sm-font="700 30px/1.25 --fontFamily-googleRoboto">
				Преимущества партнёрской программы
			</Text>
			<Text font="400 22px/1.6 --fontFamily-googleRoboto" color="#707070" margin="41px 0px 94px 0px" sm-font="400 18px/1.6 --fontFamily-googleRoboto">
				Понятные условия, комфортная работа и высокий постоянный доход
			</Text>
			<Stack lg-justify-content="center">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image width="130px" src="https://static.tildacdn.com/tild3136-3437-4235-b133-663931326133/Frame_5.svg" margin="0px 0px 20px 0px" />
					<Text color="#253c77" font="500 24px --fontFamily-googleRoboto">
						Высокое вознаграждение
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Платим минимум 3500 ₽ за каждого клиента. Чем больше привлекаете клиентов, тем выше вознаграждение
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild6665-6438-4433-a434-633935396134/Frame_6.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Прозрачная система
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Удобный личный кабинет, в котором всегда можно посмотреть статусы заявок онлайн
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild3163-3539-4265-b839-613830326433/Frame_8.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Помощь в работе
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Помогаем зарабатывать деньги, присылаем обучающие материалы и подробно отвечаем на вопросы
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild3363-3066-4438-b966-383632663063/Frame_7.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Без ограничений по доходу
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Развивайте собственную сеть и зарабатывайте ещё больше за привлечение новых партнёров
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild3834-6563-4731-b966-646665373534/Frame_9.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Удобный график
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Работайте в своём ритме без привязки к городу и стране
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild3463-6238-4166-b338-656538346161/Frame_10.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Доход навсегда
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						Мы выплачиваем вознаграждение, пока клиенты обслуживаются в банке
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="90%">
					<Override slot="StackItemContent" background="#ffffff" padding="30px 30px 40px 30px" flex-direction="column" />
					{"        "}
					<Image src="https://static.tildacdn.com/tild3639-3934-4363-b338-326261373135/Frame_11.svg" width="130px" margin="0px 0px 20px 0px" />
					<Text font="500 24px --fontFamily-googleRoboto" color="#253c77">
						Лучший банк для бизнеса
					</Text>
					<Text font="400 18px --fontFamily-googleRoboto" color="#707070">
						84% клиентов советуют банк друзьям, нас не стыдно рекомендовать
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0 0 0px 0">
			<Override slot="SectionContent" max-width="100%" width="100%" />
			<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/image%201.svg?v=2020-10-12T14:51:09.634Z" margin="0px 0px 0px 0px" background="#ffffff" />
		</Section>
		<Section padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text font="700 46px/1.25 --fontFamily-googleRoboto" color="#253c77" margin="40px 0px 0px 0px" sm-font="700 30px/1.25 --fontFamily-googleRoboto">
				Два варианта участия
			</Text>
			<Text font="400 22px/1.6 --fontFamily-googleRoboto" color="#707070" margin="41px 0px 94px 0px" sm-font="400 18px/1.6 --fontFamily-googleRoboto">
				Долгосрочное сотрудничество или быстрый заработок
			</Text>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="80%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/4as.svg?v=2020-10-12T15:04:10.452Z" />
					<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="70px 0px 22px 0px" display="inline-block" color="#253c77">
						Пассивный доход от портфеля клиентов
					</Text>
					<Text
						font="400 18px/1.7 --fontFamily-googleRoboto"
						color="#707070"
						border-style="solid"
						border-width="0px 0px 0px 4px"
						border-color="#8cca11"
						padding="0px 0px 0px 10px"
					>
						Вознаграждение за отрытый счет, плюс % от дохода банка навсегда
					</Text>
					<Text
						font="400 18px/1.7 --fontFamily-googleRoboto"
						color="#707070"
						border-style="solid"
						border-width="0px 0px 0px 4px"
						border-color="#8cca11"
						padding="0px 0px 0px 10px"
					>
						Возможность строить свою сеть продаж
					</Text>
					<Button
						border-color="#707070"
						background="#8cca11"
						font="normal 500 16px/1.55 --fontFamily-googleRoboto"
						width="300px"
						height="65px"
						hover-background="#7aba02"
						transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
						margin="54px 0px 0px 0px"
					>
						Стать партнером
					</Button>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="80%" lg-margin="40px 0px 0px 0px">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/raketa.svg?v=2020-10-15T12:28:53.541Z" />
					<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="70px 0px 22px 0px" display="inline-block" color="#253c77">
						Высокий доход за каждую сделку
					</Text>
					<Text
						font="400 18px/1.7 --fontFamily-googleRoboto"
						color="#707070"
						border-style="solid"
						border-width="0px 0px 0px 4px"
						border-color="#8cca11"
						padding="0px 0px 0px 10px"
						margin="16px 0px 45px 0px"
					>
						Вознаграждение за открытый счет
					</Text>
					<Text
						font="400 18px/1.7 --fontFamily-googleRoboto"
						color="#707070"
						border-style="solid"
						border-width="0px 0px 0px 4px"
						border-color="#8cca11"
						padding="0px 0px 0px 10px"
					>
						Чем больше клиентов, тем больше вы получаете за каждый счет
					</Text>
					<Button
						border-color="#707070"
						background="#8cca11"
						font="normal 500 16px/1.55 --fontFamily-googleRoboto"
						width="300px"
						height="65px"
						hover-background="#7aba02"
						transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
						margin="54px 0px 0px 0px"
					>
						Стать партнером
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="24px 0 120px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text color="#707070" font="700 14px/1.6 --fontFamily-googleRoboto" margin="160px 0px 40px 0px" nout-font="normal 400 14px/2 --fontFamily-googleRoboto">
				КТО МЫ?
			</Text>
			<Text font="700 46px/1.25 --fontFamily-googleRoboto" color="#253c77" margin="10px 0px 0px 0px" lg-width="60%">
				Работаем только с бизнесом
			</Text>
			<Text font="400 22px/1.6 --fontFamily-googleRoboto" color="#707070" margin="41px 0px 90px 0px" lg-width="60%">
				С нами комфортно вести дела, не отвлекаясь на бюрократию
			</Text>
			<Stack>
				{"    "}
				<StackItem width="1%" display="flex" position="relative">
					{"        "}
					<Image
						width="242.9556393678161px"
						height="527.5472111486487px"
						src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/%D0%A1%D0%BB%D0%BE%D0%B8%CC%86%202.svg?v=2020-10-13T11:57:15.108Z"
						position="absolute"
						bottom="auto"
						left="auto"
						right="-178px"
						top="-34px"
						z-index="1"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="70%"
					display="flex"
					background="#FAFAFA"
					position="relative"
					z-index="2"
					nout-width="80%"
					lg-width="60%"
					sm-width="76%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box
						display="flex"
						justify-content="space-around"
						padding="70px 80px 40px 80px"
						margin="0px 0px 0px 0px"
						nout-padding="70px 40px 40px 40px"
						lg-padding="10px 10px 10px 20px"
						lg-flex-direction="column"
					>
						<Text
							font="500 18px/1.7 --fontFamily-googleRoboto"
							color="rgb(37, 60, 119)"
							border-style="solid"
							border-width="0px 0px 0px 4px"
							border-color="#8cca11"
							padding="0px 0px 0px 10px"
							margin="16px 0px 16px 0px"
							width="50%"
							lg-width="100%"
							sm-font="500 16px/1.7 --fontFamily-googleRoboto"
						>
							Самый инновационный банк
							<br />
							<Span color="#707070" font="400 18px/1.7 Roboto, sans-serif" nout-font="400 18px/1.7 Roboto, sans-serif" sm-font="400 16px/1.7 Roboto, sans-serif">
								по версии SME Banking Club
							</Span>
						</Text>
						<Text
							font="500 18px/1.7 --fontFamily-googleRoboto"
							color="rgb(37, 60, 119)"
							border-style="solid"
							border-width="0px 0px 0px 4px"
							border-color="#8cca11"
							padding="0px 0px 0px 10px"
							width="50%"
							lg-width="100%"
							sm-font="500 16px/1.7 --fontFamily-googleRoboto"
						>
							<Span
								font="400 18px/1.7 Roboto, sans-serif"
								color="#707070"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								nout-font="400 18px/1.7 Roboto, sans-serif"
								sm-font="400 16px/1.7 Roboto, sans-serif"
							>
								С нами{" "}
							</Span>
							200 успешных
							<br />
							<Span
								color="#707070"
								font="400 18px/1.7 Roboto, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								nout-font="400 18px/1.7 Roboto, sans-serif"
								sm-font="400 16px/1.7 Roboto, sans-serif"
							>
								предпринимателей по всей России
							</Span>
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="space-around"
						padding="0px 80px 40px 80px"
						nout-padding="0px 40px 40px 40px"
						lg-flex-direction="column"
						lg-padding="0px 80px 40px 20px"
						sm-padding="0px 10px 40px 20px"
					>
						<Text
							font="500 18px/1.7 --fontFamily-googleRoboto"
							color="rgb(37, 60, 119)"
							border-style="solid"
							border-width="0px 0px 0px 4px"
							border-color="#8cca11"
							padding="0px 0px 0px 10px"
							margin="16px 0px 16px 0px"
							width="50%"
							lg-width="100%"
							sm-font="500 16px/1.7 --fontFamily-googleRoboto"
						>
							Помогаем вести бизнес
							<br />
							<Span
								color="#707070"
								font="400 18px/1.7 Roboto, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								sm-font="400 16px/1.7 Roboto, sans-serif"
							>
								и поддерживаем в кризис
							</Span>
						</Text>
						<Text
							font="500 18px/1.7 --fontFamily-googleRoboto"
							color="rgb(37, 60, 119)"
							border-style="solid"
							border-width="0px 0px 0px 4px"
							border-color="#8cca11"
							padding="0px 0px 0px 10px"
							width="50%"
							lg-width="100%"
							sm-font="500 16px/1.7 --fontFamily-googleRoboto"
						>
							84%{" "}
							<Span
								color="#707070"
								font="400 18px/1.7 --fontFamily-googleRoboto"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								sm-font="400 16px/1.7 --fontFamily-googleRoboto"
							>
								наших клиентов готовы
								<br />
								советовать банк друзьям
							</Span>
						</Text>
					</Box>
					<Box display="flex" justify-content="space-around" padding="0px 40px 40px 40px" lg-margin="0px 0px 0px 10px">
						<Button
							border-color="#98C741"
							background="#FAFAFA"
							font="normal 500 16px/1.55 --fontFamily-googleRoboto"
							width="300px"
							height="65px"
							hover-background="#7aba02"
							transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
							margin="10px 0px 0px -50px"
							border-width="2px"
							border-style="solid"
							color="#98C741"
						>
							Стать партнером
						</Button>
						<Image
							width="200px"
							src="https://static.tildacdn.com/tild6665-6664-4332-b666-363765306364/_63.svg"
							display="inline-block"
							margin="0px 0px 0px -50px"
							lg-margin="0px 0px 0px 0"
							lg-display="none"
						/>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="15%" display="flex" sm-width="10%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						width="405.94164655172415px"
						src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%208.svg?v=2020-10-13T11:55:51.401Z"
						height="529.3847528735632px"
						bottom="auto"
						left="-167px"
						position="absolute"
						right="auto"
						top="-21px"
						nout-left="-167px"
						nout-right="-153.1481875px"
						nout-width="431.1801875px"
						sm-left="-167px"
						sm-right="-79.773px"
						sm-width="357.797px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Image width="100%" src="https://static.tildacdn.com/tild6233-3931-4136-a236-613932323535/_14.svg" />
		</Section>
		<Section background="#FAFAFA">
			<Override slot="SectionContent" max-width="1200px" />
			<Text color="#707070" font="700 14px/1.6 --fontFamily-googleRoboto" margin="0px 0px 40px 0px">
				<Span
					font-weight="normal"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					КТО МЫ?
				</Span>
			</Text>
			<Text
				font="700 46px/1.25 --fontFamily-googleRoboto"
				color="#253c77"
				margin="10px 0px 0px 0px"
				lg-width="80%"
				sm-font="700 30px/1.25 --fontFamily-googleRoboto"
			>
				Кто может стать партнёром Модульбанка
			</Text>
			<Text font="400 22px/1.6 --fontFamily-googleRoboto" color="#707070" margin="41px 0px 70px 0px" sm-font="400 18px/1.6 --fontFamily-googleRoboto">
				Подходит всем, кто хочет зарабатывать больше
			</Text>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%" lg-order="0">
					<Override slot="StackItemContent" />
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%204.svg?v=2020-10-12T16:15:50.452Z" lg-width="60%" sm-width="80%" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					lg-width="60%"
					lg-order="1"
					sm-width="90%"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
						Предприниматели
					</Text>
					<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070">
						Оцените сами уровень нашего сервиса и смело советуйте банк контрагентам
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="40px -16px -16px -16px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					lg-order="3"
					lg-width="60%"
					sm-width="90%"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
						Молодые специалисты
					</Text>
					<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070">
						Работайте с продуктом, который продаёт сам себя. Любой график и без ограничений по доходу
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="60%" sm-width="80%">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%205.svg?v=2020-10-12T16:25:24.535Z" lg-order="2" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="20px -16px -16px -16px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="60%" sm-width="80%">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%206.svg?v=2020-10-12T16:29:18.283Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="60%" sm-width="90%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
						Лидеры мнений
					</Text>
					<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070">
						Монетизируйте свою базу клиентов, партнёров или подписчиков. Рекомендуйте предпринимателям лучшие сервисы
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0 0 0px 0">
			<Override slot="SectionContent" max-width="100%" width="100%" />
			<Image width="100%" src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/image%201.svg?v=2020-10-12T14:51:09.634Z" margin="0px 0px 0px 0px" background="#ffffff" />
			<Section padding="24px 0 120px 0">
				<Override slot="SectionContent" max-width="1160px" />
				<Text font="700 46px/1.25 --fontFamily-googleRoboto" color="#253c77" margin="90px 0px 0px 0px" sm-font="700 30px/1.25 --fontFamily-googleRoboto">
					Как стать партнёром Модульбанка
				</Text>
				<Text
					font="400 22px/1.6 --fontFamily-googleRoboto"
					color="#707070"
					margin="41px 0px 90px 0px"
					lg-position="relative"
					lg-z-index="2"
					sm-font="400 18px/1.6 --fontFamily-googleRoboto"
				>
					Начать привлекать клиентов — легко
				</Text>
				<Stack max-width="1160px" lg-justify-content="center" position="relative">
					{"    "}
					<StackItem width="98%" display="flex" position="relative">
						<Image
							width="195.71434651898736px"
							height="266.052121835443px"
							src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/65.svg?v=2020-10-13T12:45:39.774Z"
							position="absolute"
							top="44px"
							bottom="-278.06312183544304px"
							left="-112.281px"
							right="-51.443346518987354px"
							lg-display="none"
						/>
						<Image
							width="74.73200308641977px"
							height="108.86013580246916px"
							src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/99.svg?v=2020-10-13T12:49:38.472Z"
							position="absolute"
							top="auto"
							bottom="-300px"
							left="-35px"
							right="auto"
							z-index="4"
							lg-bottom="-710px"
							lg-left="11px"
							lg-right="auto"
							lg-top="auto"
							sm-bottom="-1003px"
							sm-left="0px"
							sm-right="auto"
							sm-top="auto"
						/>
						{"        "}{"    "}
					</StackItem>
					{"    "}
					<StackItem
						width="100%"
						display="flex"
						background="#FAFAFA"
						position="relative"
						z-index="2"
						nout-padding="0px 0px 0px 0"
						lg-width="80%"
					>
						<Override slot="StackItemContent" />
						<Stack
							padding="0px 60px 0px 60px"
							width="100%"
							margin="-16px 0px -16px 0px"
							nout-width="90%"
							sm-padding="10px 10px 10px 10px"
						>
							{"    "}
							<StackItem width="33.3%" display="flex" lg-width="100%">
								{"        "}
								<Box
									display="flex"
									flex-direction="column"
									margin="0px 0px 10px 0px"
									padding="0px 20px 0px 20px"
									lg-width="100%"
								>
									<Text color="#8cca11" font="700 46px/1.45 --fontFamily-googleRoboto">
										01.
									</Text>
									<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
										Оставьте заявку
									</Text>
									<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070" width="80%" sm-width="100%">
										Позвоним вам, чтобы подтвердить участие
									</Text>
								</Box>
								{"    "}
							</StackItem>
							<StackItem width="33.3%" display="flex" lg-width="100%">
								<Box
									display="flex"
									flex-direction="column"
									margin="0px 0px 10px 0px"
									padding="0px 20px 0px 20px"
									lg-width="100%"
								>
									<Text font="700 46px/1.45 --fontFamily-googleRoboto" color="#8cca11">
										02.
									</Text>
									<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
										Регистрируйтесь в Личном кабинете
									</Text>
									<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070" width="80%" sm-width="100%">
										Вышлем ссылку на простую регистрацию
									</Text>
								</Box>
								{"        "}{"    "}
							</StackItem>
							<StackItem width="33.3%" display="flex" lg-width="100%">
								{"        "}
								<Box
									display="flex"
									flex-direction="column"
									margin="0px 0px 10px 0px"
									padding="0px 20px 0px 20px"
									lg-width="100%"
								>
									<Text font="700 46px/1.45 --fontFamily-googleRoboto" color="#8cca11">
										03.
									</Text>
									<Text font="normal 500 24px/1.45 --fontFamily-googleRoboto" margin="0px 0px 0px 0px" display="inline-block" color="#253c77">
										Начните зарабатывать
									</Text>
									<Text font="400 18px/1.7 --fontFamily-googleRoboto" color="#707070" width="80%" sm-width="100%">
										В любом городе и в любое удобное для вас время
									</Text>
								</Box>
								{"    "}
							</StackItem>
							{"    "}
						</Stack>
						{"        "}{"    "}
					</StackItem>
					<StackItem width="1%" display="flex" sm-display="none">
						<Override slot="StackItemContent" position="relative" />
						<Image
							width="157.27256944444446px"
							height="284.5465522151899px"
							position="absolute"
							src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/55.svg?v=2020-10-13T12:47:34.159Z"
							bottom="auto"
							top="-314px"
							left="auto"
							right="-1286px"
							lg-bottom="auto"
							lg-left="auto"
							lg-right="-760px"
							lg-top="-383px"
							nout-bottom="auto"
							nout-left="auto"
							nout-right="-1178px"
							nout-top="-307px"
						/>
						{"        "}{"    "}
					</StackItem>
				</Stack>
			</Section>
		</Section>
		<Image
			width="487.0504556962025px"
			height="299.15718670886076px"
			position="absolute"
			src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%209%201.png?v=2020-10-13T13:06:56.169Z"
			top="-250px"
			bottom="auto"
			left="auto"
			right="-371px"
			nout-bottom="auto"
			nout-left="auto"
			nout-right="-959px"
			nout-top="-578px"
			lg-bottom="auto"
			lg-left="auto"
			lg-right="-752px"
			lg-top="-922px"
			lg-position="absolute"
			lg-z-index="1"
			lg-height="202.41625287356325px"
			lg-width="427.03399856321835px"
			lg-display="none"
			quarkly-title="ZENshina"
		/>
		<Section padding="0 0 40px 0" nout-padding="0 0 0 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Image width="100%" src="https://static.tildacdn.com/tild6233-3931-4136-a236-613932323535/_14.svg" />
			<Section background="#FAFAFA" padding="0 0 100px 0">
				<Override slot="SectionContent" max-width="1200px" padding="24px 0px 24px 0px" />
				<Text font="700 46px/1.25 --fontFamily-googleRoboto" color="#253c77" margin="10px 0px 0px 0px" sm-font="700 30px/1.25 --fontFamily-googleRoboto">
					Расскажем, как начать зарабатывать
				</Text>
				<Text font="400 22px/1.6 --fontFamily-googleRoboto" color="#707070" margin="41px 0px 70px 0px" sm-font="400 18px/1.6 --fontFamily-googleRoboto">
					Оставьте заявку, чтобы попасть на обучающий вебинар
				</Text>
				<Stack>
					{"    "}
					<StackItem width="50%" display="flex" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Input
							width="90%"
							height="64px"
							placeholder="Введите имя"
							margin="10px 0px 10px 0px"
							required
							font="normal 400 16px/1 --fontFamily-googleRoboto"
							color="#b8b8b8"
							nout-color="#f20c0c"
						/>
						<Input
							width="90%"
							height="64px"
							placeholder="+7 (999) 99-99-99"
							margin="10px 0px 10px 0px"
							type="tel"
							font="normal 400 16px/1 --fontFamily-googleRoboto"
						/>
						<Input
							width="90%"
							height="64px"
							placeholder="Ваш e-mail"
							margin="10px 0px 10px 0px"
							type="email"
							font="normal 400 16px/1 --fontFamily-googleRoboto"
						/>
						<Text font="14px --fontFamily-googleRoboto" color="#707070">
							Я согласен с
							<Link
								href="https://modulbank.ru/fs/files/portal_agreement.pdf"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="#7aba02"
								text-decoration-line="initial"
							>
								{" "}условиями использования сервиса Modulbank
							</Link>
						</Text>
						<Button
							border-color="#707070"
							background="#8cca11"
							font="normal 500 16px/1.55 --fontFamily-googleRoboto"
							width="300px"
							height="65px"
							hover-background="#7aba02"
							transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
							margin="14px 0px 0px 0px"
						>
							Стать партнером
						</Button>
						{"    "}
					</StackItem>
					{"    "}
					<StackItem width="50%" display="flex" md-width="100%" md-margin="60px 0px 0px 0px">
						<Override slot="StackItemContent" flex-direction="column" position="relative" />
						{"        "}
						<Text color="#253c77" font="500 24px/1.45 --fontFamily-googleRoboto" margin="16px 0px 0 0px">
							8 800 222 84 26
						</Text>
						<Text color="#707070" font="400 18px/1.7 --fontFamily-googleRoboto" margin="10px 0px 26px 0px">
							info@modulbank.info
						</Text>
						<Box display="flex" align-items="center">
							<Icon
								category="md"
								icon={MdPhone}
								width="40px"
								height="40px"
								background="#E0E0E0"
								border-radius="50px"
								border-color="#000000"
								color="#ffffff"
								hover-background="#98C741"
								transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;"
								sm-color="#ffffff"
								sm-background="#98C741"
							/>
							<Text margin="16px 0px 16px 20px" font="400 18px --fontFamily-googleRoboto" color="#707070">
								Обратный звонок
							</Text>
						</Box>
						<Image
							width="100%"
							src="https://uploads.quarkly.io/5f8218543d84d4001ec38b66/images/Frame%207.svg?v=2020-10-12T17:01:27.419Z"
							position="absolute"
							top="0px"
							sm-bottom="-313px"
							sm-height="305.516px"
							sm-left="0px"
							sm-right="auto"
							sm-top="auto"
						/>
						<Box />
						{"    "}
					</StackItem>
				</Stack>
			</Section>
			<Section
				background="#FAFAFA"
				padding="0 0 0px 0"
				md-margin="200px 0 0 0"
				sm-margin="0px 0 0 0"
				sm-padding="200px 0 2px 0"
				nout-padding="0 0 0 0"
			>
				<Override slot="SectionContent" max-width="1200px" padding="24px 0px 24px 0px" />
				<Stack>
					{"    "}
					<StackItem width="50%" display="flex" sm-width="100%" sm-padding="16px 16px 0 16px">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Text font="400 16px/1.7 --fontFamily-googleRoboto" color="#707070" margin="10px 0px 16px 0px" sm-margin="0 0px 0px 0px">
							2020 © Модуль.Банк
						</Text>
						{"    "}
					</StackItem>
					{"    "}
					<StackItem width="50%" display="flex" sm-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Text
							font="400 16px/1.7 --fontFamily-googleRoboto"
							color="#707070"
							margin="10px 0px 16px 0px"
							text-align="right"
							sm-text-align="left"
							sm-margin="0 0px 0px 0px"
						>
							Политика конфендициальности
						</Text>
						{"    "}
					</StackItem>
				</Stack>
			</Section>
		</Section>
	</Theme>;
});