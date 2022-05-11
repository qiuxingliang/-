<template>
	<view class="page">
		<view class="lunbo">
			<lunbo></lunbo>
		</view>
		<view class="chuancheng">
			中医文化
		</view>
		<view class="neirong1">
			<view class="biaoti">{{title1}}</view>
			<view class="content">{{neirong1}}</view>
			<view class="title2">{{title2}}</view>
			
			<!-- 1 -->
			<view class="tuzi">
				<view class="content2">{{neirong2}}</view>
				<image class="pic" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/da0c54e8-5c45-4533-a7ba-bfba9293ad8c.png" mode=""></image>
			</view>
			<view class="neirong22">{{neirong22}}</view>
			<!-- 2 -->
			<view class="title3">{{title3}}</view>
			<view class="neirong3">{{neirong3}}</view>
			<!-- 3 -->
			<view class="title4">{{title4}}</view>
			<view class="neirong4">{{neirong4}}</view>
		</view>
		
		<view class="chuancheng">
			中华十大名医
		</view>
		<view class="neirong5">
			<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/9067efde-1f35-45c8-83e9-95135bd72cd5.jpg" mode=""></image>
		</view>
		<view class="chuancheng">
			中西结合
		</view>
		<view class="neirong6">
			<view class="biaoti">{{title6}}</view>
			<view class="content">{{neirong6}}</view>
			<!-- pic -->
			<view class="neirong7">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/172454a2-a1f3-4bd5-857c-5ab4ff5d5d36.png" mode=""></image>
			</view>
			<!-- title -->
			<view class="title7">{{title7}}</view>
			<!-- 1 -->
			<view class="title8">{{title8}}</view>
			<view class="neirong8">{{neirong8}}</view>
			<view class="title9">{{title9}}</view>
			<view class="neirong9">{{neirong9}}</view>
			<view class="title10">{{title10}}</view>
			<view class="neirong10">{{neirong10}}</view>
			<view class="title11">{{title11}}</view>
			<view class="neirong11">{{neirong11}}</view>
			<view class="title12">{{title12}}</view>
			<view class="neirong12">{{neirong12}}</view>
			<view class="title13">{{title13}}</view>
			<view class="neirong13">{{neirong13}}</view>
			<view class="title14">{{title14}}</view>
			<view class="neirong14" v-for="item in neirong14">{{item.text}}</view>
		</view>
		
	</view>
</template>

<script>
	import lunbo from '@/components/lunbo.vue'
	export default {
		components:{
			lunbo
		},
		data() {
			return {
				title1:'中医文化',
				neirong1:'笼统地说，文化是一种社会现象，是人们长期创造形成的产物。同时又是一种历史现象，是社会历史的积淀物。确切地说，文化是指一个国家或民族的历史、地理、风土人情、传统习俗、生活方式、文学艺术、行为规范、思维方式、价值观念等。中医文化，也就是指有关中医的思维方式、传统习俗、行为规范、生活方式、文学艺术，甚至一些影响深远的事件等。',
				title2:'1、强烈的历史意识',
				neirong2:'中国文化从一开始就以宇宙和生命的内在统一性为出发点，是一种源头型的文化，未来所做的一切都只能是对这一源头思想的肯定与发扬。',
				neirong22:'在中国，浩瀚的历史长卷无非是在表明我们对传统的尊重和对历史的执著，我们既是传统的捍卫者，也是文化的诠释者。如此强烈的历史意识表现在中医文化当中，造就了中医学浩瀚的注释、发挥之作。这种寓创造于解释，寓革新于继承的发展模式，保证了中医发展的连贯性和继承性，使得千百年来的医学理论及其表达方式、评判标准等有着系统的统一性。',
				title3:'2、服务与现实的实用性理性',
				neirong3:'这种实用理性不是讲究精确概念的辩证法，也不是否定的辩证法；而是讲究人生哲理的辩证法，是强调和谐的、互补的辩证法。它满足于对事物的笼统模糊的整体直观把握。中医学是服务于现实的实用理性精神的最完美的体现。中医理论的发展总是隶属于临床医学的进步，其理论要么是对经验的理论概括，要么是治疗学上的理论。',
				title3:'3、有机的自然主义。',
				neirong3:'有机的自然主义是指中国古代思想界拒绝用任何形式的超自然主义或机械论来看待世界，便是“天人合一”。这种有机的自然观使得几千年中医医道虽老不衰。',
				title4:'4、关于超越语言。',
				neirong4:'中国文化喜欢强调它空灵淡雅的性灵境界，对任何事物都没有严格定义的概念。因此，人们在交流自己的经验时便会感到语言的局限，常常运用象征、隐喻。这种语言困境同样体现在中医中，这也是我们称其为医道，而很难称其为医学的原因之一。现代医学大概需要再发展十几年之后，才可能真正科学地严密地解释和回答中医凭几千年经验所归纳和构造的这一整套体系。',
				title6:'中西医结合',
				neirong6:'将传统的中医中药知识和方法与西医西药的知识和方法结合起来，在提高临床疗效的基础上，阐明机理进而获得新的医学认识。中西医结合是中华人民共和国建立后政府长期实行的方针。中西医结合是中、西医学的交叉领域，也是中国医疗卫生事业的一项工作方针。中西医结合发轫于临床实践，以后逐渐演进为有明确发展目标和独特方法论的学术体系。',
				title7:'中西医结合的方式和途径有以下几个主要方面：',
				title8:'1、结合疾病的诊治',
				neirong8:'包括在诊断上的病证结合，在治疗时的综合协调，在理论上的相互为用。病证结合就是运用西医诊断方法确定病名，同时进行中医辨证，作出分型和分期。这样就从两种不同的医学角度审视疾病，既重视病因和局部病理改变，又通盘考虑疾病过程中的整体反应及动态变化，并以此指导治疗。综合协调是指在治疗的不同环节按中西医各自的理论优选各自的疗法，不是简单的中药加西药，而是有机配合、互相补充，这样往往能获得更高的疗效。理论上相互为用是根据不同需要，或侧重以中医理论指导治疗，或侧重以西医理论指导治疗，或按中西医结合后形成的新理论指导治疗。',
				title9:'2、结合中西医诊断方法的研究',
				neirong9:'主要是用西医学和现代科学方法研究中医四诊，或创造新的诊法。开展最多的是经络诊法和脉诊、舌诊。经络诊法是把中医学关于经络检查所见和西医诊断联系起来，通过相关性研究，创立耳穴诊病法和经络检查法。通过各种脉象仪、舌象仪，把医生诊脉时的指下感觉用图像、曲线、数字等客观指标表示出来，把各种舌诊所见舌苔、舌质的变化通过病理形态学、细胞学、生物化学、血液流变学及光学等方法客观地反映出来；另外对脉象及舌象进行中医相关对照和从病理生理学、生物化学、微生物学、免疫学、血液动力学等多方面进行原因和机理探讨。这项研究有利于中医四诊实现仪器化、客观化和规范化。',
				title10:'3、结合病证动物模型研究',
				neirong10:'动物实验是医学发展的基础和条件，每一项重大成果的取得都要应用实验动物，建立病证结合动物模型是开展中医基础理论和临床研究的重要基础。病证结合动物模型是指在中医药理论指导下，适当结合现代医学理论与实验动物科学知识，分别（或同时）采用传统中医学病因复制证候动物模型和采用现代医学病因复制疾病动物模型，使动物模型同时具有疾病与证候特征。开展病证结合的动物模型研究，对阐释中医基础理论的科学内涵和外延有重要的学术价值和应用前景。',
				title11:'4、结合中医治法治则的研究',
				neirong11:'主要集中于对活血化瘀、清热解毒、通理攻下、补气养血、扶正固（培）本等治则的研究。方法是在肯定疗效的基础上，摸清用药规律，筛选方药，进而对适用该治则的有关方药进行药理作用、成分、配伍机制的实验研究，再将所取得的认识放到临床实践中验证。',
				title12:'5、结合中医学基础理论的研究',
				neirong12:'中医学基础理论内容十分丰富，有些与西医学理论完全不同，以往曾开展对阴阳学说、脏象学说 、气血学说及有关“ 证 ”的研究等，主要是从西医角度去探索。其方法是先以临床为据确立研究对象的特征，然后通过建立中医理论的动物模型或动物疾病模型以寻找中西医理论上的结合点。',
				title13:'6、结合方剂药物的研究',
				neirong13:'  包括用西医理论和方法，对传统方剂的作用加以说明。其特点是医药结合，临床与实验结合，单味药物研究与复方研究相结合。',
				title14:'7、结合针灸及经络研究',
				neirong14:[
					{id:'1',text:'大致有 5 个方面：'},
					{id:'2',text:'一是把针灸应用于西医临床各科，所治疾病已达300 余种；'},
					{id:'3',text:'二是传统针刺技术与西医理论和方法结合，创立头皮针、耳针疗法和电针、激光针疗法、穴位注射方法等；'},
					{id:'4',text:'三是用生理学、生理化学、微生物学及免疫学方法研究针灸对人体各系统的作用机制，为针灸提供现代科学依据；'},
					{id:'5',text:'四是通过对针刺麻醉的临床应用和对针刺镇痛原理研究进行结合；'},
					{id:'5',text:'五是在肯定经络现象、总结循经感传规律的基础上，融汇中西医理论，以现代实验方法与科学抽象方法相结合，探索经络机制。利用现代科学技术和实验方法研究经络及针灸作用原理的一门新学科——实验针灸学，已经在中西医结合的过程中逐步形成。'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.chuancheng{
	height: 88rpx;
	/* width: 100%; */
	text-indent: 1em;
	background-image: linear-gradient(to right, #f0bb88 , #ffffff);
	border-top: solid 5rpx #9C4B00;
	border-left: solid 5rpx #9C4B00;
	margin: 15rpx;
	font-size: 35rpx;
	line-height:80rpx;
	color: rgb(156,75,0);
}
.neirong1{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		// height: 1500rpx;
		/* background-color: #31B0D5; */
		margin: 15rpx;
		padding: 10rpx 20rpx;
		border: solid 3rpx #9C4B00;
		border-radius: 25rpx;
		margin-bottom: 40rpx;
		.biaoti{
			color: rgb(156,75,0);
			font-size: 40rpx;
		}
		.content{
			text-indent: 2em;
		}
		
		.neirong2{
			text-indent: 2em;
		}
		.neirong3{
			text-indent: 2em;
		}
		.neirong4{
			text-indent: 2em;
		}
	}
	
	.neirong22{
		text-indent: 2em;
	}
	.tuzi{
		display: flex;
		justify-content: space-between;
		.content2{
			width: 600rpx;
			text-indent: 2em;
		}
	}
	.pic{
		width: 550rpx;
		height: 260rpx;
	}
	.neirong5{
		height: 235px;
		margin: 15rpx;
		background-color: #3C763D;
	}
	.neirong5 image{
		height: 100%;
		width: 100%;
	}
	.neirong6{
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			// height: 3500rpx;
			/* background-color: #31B0D5; */
			margin: 15rpx;
			padding: 10rpx 20rpx;
			border: solid 3rpx #9C4B00;
			border-radius: 25rpx;
			margin-bottom: 40rpx;
			.biaoti{
				color: rgb(156,75,0);
				font-size: 40rpx;
			}
			.content{
				text-indent: 2em;
			}
			.neirong7{
				height: 235px;
				margin: 15rpx;
				background-color: #3C763D;
			}
			.neirong7 image{
				height: 100%;
				width: 100%;
			}
			.title7{
				font-size: 30rpx;
				font-weight:bolder;
			}
			.neirong8{
				text-indent: 2em;
			}
			.neirong9{
				text-indent: 2em;
			}
			.neirong10{
				text-indent: 2em;
			}
			.neirong11{
				text-indent: 2em;
			}
			.neirong12{
				text-indent: 2em;
			}
			.neirong13{
				text-indent: 2em;
			}
			.neirong14{
				text-indent: 2em;
			}
			
		}
</style>
