<template>
	<view class="page">
		<view class="lunbo">
			<lunbo></lunbo>
		</view>
		<view class="shihua">
			中医发展史
		</view>
		<view class="neirong1">
			<view class="biaoti">{{title1}}</view>
			<view class="content" v-for="item in neirong1" >
				<view>
					{{item.text}}
				</view>
			</view>
		</view>
		
		<view class="neirong2">
			<!-- 发展历史 -->
			<view class="biaoti">{{title2}}</view>
			<view class="tuzi">
				<view class="content2">{{neirong2}}</view>
				<image class="pic" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1ef084bf-4e57-4aac-90a8-f17bcabd0b89.png" mode=""></image>
			</view>
			<view class="neirong22">{{neirong22}}</view>
			<!-- 形成 -->
			<view class="biaoti">{{title3}}</view>
			<view class="neirong3">{{neirong3}}</view>
			<!-- 繁荣 -->
			<view class="biaoti">{{title4}}</view>
			<view class="neirong4" v-for="item in neirong4">{{item.text}}</view>
			<!-- 衰落 -->
			<view class="biaoti">{{title5}}</view>
			<view class="neirong5">{{neirong5}}</view>
			<!-- 复兴 -->
			<view class="biaoti">{{title6}}</view>
			<view class="neirong6" v-for="item in neirong6">{{item.text}}</view>
		</view>
	</view>
	
</template>

<script>
	import lunbo from "@/components/lunbo.vue"
	export default {
		components:{
			lunbo
		},
		data() {
			return {
				title1:'中医',
				neirong1:[
					{id:'1',text:'中医诞生于原始社会，春秋战国时期中医理论已基本形成，之后历代均有总结发展。除此之外对汉字文化圈国家影响深远，如日本医学、韩国韩医学、朝鲜高丽医学、越南东医学等都是以中医为基础发展起来的。'},
					{id:'2',text:'中医承载着中国古代人民同疾病作斗争的经验和理论知识，是在古代朴素的唯物论和自发的辩证法思想指导下，通过长期医疗实践逐步形成并发展成的医学理论体系。'},
					{id:'3',text:'中医学以阴阳五行作为理论基础，将人体看成是气、形、神的统一体，通过“望闻问切”四诊合参的方法，探求病因、病性、病位，分析病机及人体内五脏六腑、经络关节、气血津液的变化，判断邪正消长，进而得出病名，归纳出证型，以辨证论治原则，制定“汗、吐、下、和、温、清、补、消”等治法，使用中药、针灸、推拿、按摩、拔罐、气功、食疗等多种治疗手段，使人体达到阴阳调和而康复。 '},
					{id:'4',text:'2018年10月1日，世界卫生组织首次将中医纳入其具有全球影响力的医学纲要。'}
				],
				title2:'发展历史',
				neirong2:'自清朝末年，中国受西方列强侵略，国运衰弱。中医学陷入存与废的争论之中。同属中国医学体系的日本医学、韩国的韩医学亦是如此。中医中药在中国古老的大地上已经运用了几千年的历史，经过几千年的临床实践，证实了中国的中医中药无论是在治病上、在防病上，还是在养生上，都是确凿有效可行的。',
				neirong22:'在西医未传入中国之前，我们的祖祖辈辈都用中医中药来治疗疾病，挽救了无数人的生命。中医对疾病的治疗是宏观的、全面的。中医，即相对西医而言。在西方医学没有流入中国以前，中医基本不叫中医这个名字，而是有独特且内涵丰富的称谓。',
				title3:'形成',
				neirong3:'中医产生于原始社会，春秋战国中医理论已经基本形成，出现了解剖和医学分科，已经采用“四诊”，治疗法有砭石、针刺、汤药、艾灸、导引、布气、祝由等。《黄帝内经》，它是中国传统医学四大经典著作之一，也是我国医学宝库中成书最早的一部医学典籍。同时是研究人的生理学、病理学、诊断学、治疗原则和药物学的医学巨著。在理论上建立了中医学上的“阴阳五行学说”、“脉象学说”、“藏象学说”、“   经络学说”、“病因学说”、“病机学说”、“病症”、“诊法”、论治及“养生学”、“运气学”等学说，后来的中医学和养生学开始用阴阳五行解释人体生理，出现了“医工”、金针、铜钥匙等。是指以中国汉族创造的传统医学为主的医学，是研究人体生理、病理以及疾病的诊断和防治等的一门学科。',
				title4:'繁荣',
				neirong4:[
					{id:'1',text:'唐朝以后，中国医学理论和著作大量外传到高丽、日本、中亚、西亚等地。'},
					{id:'2',text:'龙门石窟的药方洞窟门刻有诸多唐代药方，多达150多种，所用药物多是植物、动物和矿物药。药方涉及内科、外科、小儿科、五官科等，所涉及药材在民间都能找到，很大程度上方便了老百姓。这些药方不仅可以治疗常见的疾病，而且还能治疗疑难杂症，如：疗噎方可以治疗食道癌。其中有95方在公元10世纪被一位日本学者收录在《医心方》中，足见它的价值和影响。药方洞的药方是中国现存最早的石刻药方，对研究中国医药学起了重要的作用。 '},
					{id:'3',text:' 两宋时期，宋政府设立翰林医学院，医学分科接近完备，并且统一了中国针灸由于传抄引起的穴位紊乱，出版《图经》。'}
				],
				title5:'衰落',
				neirong5:'金元以降，中医开始没落。明清以后，出现了温病派时方派，逐步取代了经方派中医。在明朝后期成书的李时珍的《本草纲目》标志着中药药理学没落。同一时期，蒙医、藏医受到中医的影响。在朝鲜东医学也得到了很大的发展，例如许浚撰写了《东医宝鉴》。',
				title6:'复兴',
				neirong6:[
					{id:'1',text:'2003年“非典”以来，经方中医开始有复苏迹象。现代，中医在中国仍然是治疗疾病的常用手段之一。'},
					{id:'2',text:'在国际上，针灸引起医学界极大兴趣。针灸已被证实在减轻手术后疼痛、怀孕期反胃、化疗所产生的反胃和呕吐、牙痛方面是有效的且其副作用极低，然而，对慢性疼痛，背部疼痛以及头痛，数据显示出模棱两可或者争议性。WHO认为很多针灸和一些草药的有效性得到了科学双盲研究的较强支持，但是对于其它的传统疗法还需要进行进一步研究，而且不能忽视未经研究的传统疗法存在的安全性及危险性等问题。WHO在2002年5月26日发表“2002—2005年传统医药研究全球策略”，邀请全球180余国将替代医学纳入该国的医疗政策。'},
					{id:'3',text:'20世纪90年代发起的现代中医基础理论的原始创新、革命。中医新哲学观中医三个哲学观：整体观、辨证观，及新挖掘出的中医第三哲学观：相似观－分形论。'},
					{id:'4',text:'2018年10月1日，世界卫生组织首次将中医纳入其具有全球影响力的医学纲要。新纳入的中医传统医学的相关信息将写入第11版全球医学纲要第26章内，该章节主要阐释传统医学的分类体系，将于2022年在世卫组织成员国实施。'}
				]
			}
		},
		methods: {
			
		},
		
	}
</script>

<style lang="scss">
body{
		background-color: #F6F5EC;
		background: #F6F5EC;
	}
.shihua{
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
		// height: 730rpx;
		/* background-color: #31B0D5; */
		margin: 15rpx;
		padding: 10rpx;
		border: solid 3rpx #9C4B00;
		border-radius: 25rpx;
		.biaoti{
			color: rgb(156,75,0);
			font-size: 40rpx;
			padding: 0rpx 20rpx;
		}
		.content{
			text-indent: 2em;
			padding: 0rpx 20rpx;
		}
		margin-bottom: 40rpx;
	}
	.neirong2{
		background-color: #F6F5EC;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		// height: 3130rpx;
		/* background-color: #31B0D5; */
		margin: 25rpx;
		padding: 10rpx 20rpx;
		border: solid 3rpx #9C4B00;
		border-radius: 25rpx;
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
		.biaoti{
			color: rgb(156,75,0);
			font-size: 40rpx;
		}
		.pic{
			width: 400rpx;
			height: 360rpx;
		}
		.neirong3,{
			text-indent: 2em;
		}
		.neirong4{
			text-indent: 2em;
		}
		.neirong5{
			text-indent: 2em;
		}
		.neirong6{
			text-indent: 2em;
		}
	}
</style>
