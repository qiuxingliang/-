<template>
	<view class="page">
		<view class="lunbo">
			<lunbo></lunbo>
		</view>
		<view class="baodian">
			中医发展史
		</view>
		
		<view class="neirong1">
			<view class="biaoti">{{title1}}</view>
			<view class="content" v-for="item in neirong1" >
				<view>{{item.text}}</view>
			</view>
			<image class="pic" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/84ee08ef-a321-4a00-b4e6-cc1354fff1a4.png" mode=""></image>
			<!-- 四时养生 -->
			<view class="biaoti">{{title2}}</view>
			<view class="neirong2" v-for="item in neirong2">{{item.text}}</view>
			<!-- 24节气养生 -->
			<view class="biaoti">{{title3}}</view>
			<view class="neirong3" v-for="item in neirong3">{{item.text}}</view>
			<!-- 节日养生 -->
			<view class="biaoti">{{title4}}</view>
			<view class="neirong4" v-for="item in neirong4">{{item.text}}</view>
			<!-- 五脏养生 -->
			<view class="biaoti">{{title5}}</view>
			<view class="neirong5" v-for="item in neirong5">{{item.text}}</view>
			<!-- 饮食养生 -->
			<view class="biaoti">{{title6}}</view>
			<view class="neirong6" v-for="item in neirong6">{{item.text}}</view>
			<!-- 运动养生 -->
			<view class="biaoti">{{title7}}</view>
			<view class="neirong7">{{neirong7}}</view>
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
				title1:'养生',
				neirong1:[
					{id:'1',text:'我们经常“以酒为浆，以妄为常，醉以入房，以欲竭其精，以耗散其真，不知持满，不时御神，务快其心，逆于生乐，起居无节”，这些都造成了脏腑气血逆乱，百病由生。'},
					{id:'2',text:'我们都不想患病，但是，疾病总是不可避免，怎么办？我主张自律，我认为，自律的人才能健康。人以健康为本，若自己的健康都不要，这样的人未免舍本逐末。我们人人都要重视养生，千万别依赖体检来远离疾病，这样做无异于缘木求鱼，自欺欺人。'},
					{id:'3',text:'生活中常见有些人自恃年轻，或尚且健康，完全不把养生当回事。反而肆意熬夜，吃各种垃圾食品，绝不运动……怎么才能让他们认识到健康的重要性呢？我想，可以拉他们去医院ICU转一圈，见识一下病人的痛苦，或许能警醒一下吧——生命是自己的，健康是自己的，自己的健康，一定要自己重视。'},
				],
				title2:'一、四时养生',
				neirong2:[
					{id:'1',text:'有人说，养生没有什么用，不养生也一样能健康——人生于天地之间，人禀天地之气生，四时之法成，人要健康，就一定要养生，养生的首要原则就是顺应天地规律。'},
					{id:'2',text:'人生于天地之间，天地阴阳变化，即对应着人的气血变化。六十年一个花甲子；十年则天干重复，当称为本运年；十二年则地支轮回，俗称本命年；一年有春夏秋冬四季，有24节气，有风寒暑湿燥火六气轮回；一月有月晦月圆；五日是一候，经历60个时辰小甲子；一日又有晨午夕夜。人之养生或患病，与天地的这些因素多有相关性。'},
					{id:'3',text:'所以说，要顺四时而适寒暑。我们要跟上四时阴阳变化的节奏，这即是顺应天地，顺之则生，逆之则病。这条应该是《内经》里最核心的养生理念，今时我们所有的养生方法都要看它是否顺应了四时变化规律，顺应了就是对的，否则就是错的。关于四时养生，专家们各有说法，又似乎各有道理，应该如何把握？我认为，抓住“圆运动”三个字即可。人体阳气春升夏浮秋收冬藏，形成一个完整的圆运动。这个圆运动越大越圆，人就越健康，越不容易生病。四季如春，肯定不如四季分明更益于圆运动；冬天开暖气热到出汗，夏天呆在空调屋，结果就是圆运动不圆了。越是顺应天地规律，人就会越健康，越长寿。养生，并不需要花多少钱，也不需要多么辛苦，只要跟上天地的步伐即可。'},
				],
				title3:'二、24节气养生',
				neirong3:[
					{id:'1',text:'一年24个节气，天地阳气升浮降沉，人亦应之。24节气养生，其实是四时养生的细化。天地四时的阳气变化是我们养生的总旨，而24节气养生则是具体的方法。'},
					{id:'2',text:'为什么要重视节气养生？从中医来分析，凡是节气，即是天地气机转换的节点，节与节之间是滑利的，一到节上，便难过去。天地气机交节必郁而后通。久病之人每逢交节前后易出现意外，因为天地气机郁滞，人身气机亦郁滞。故久病养生，重在养节气。'},
					{id:'3',text:'养生，养的其实是生命力。生命力越旺，人就越健康，越长寿。如何让我们的生命力旺盛起来？中医的观点是：顺应四时规律，按24节气来养生。春三月阳气升，人气亦要升发；夏三月阳气浮，人气亦要外浮；秋三月阳气敛，人气亦要收敛；冬三月阳气藏，人气亦要闭藏。每个季节都有6个节气，节气变化，意味着天地气机变化。我们可以通过调节饮食、运动和起居来跟上天地变化的节奏，这样可以更健康。'},
					{id:'4',text:'24节气之中，尤以二至二分四立为重视。这些节气是天地气机变化之大关节，故需养之以使人气顺利过节，如此则身体康健，疾病不作。若不顾四时变化之节气而妄耗精神肾气，致使正气不足，则于节时或生疾患。慢性病人尤需于节气养生，静心安神以度之。重病危病正气本已不足，遇节气每有不测，盖因正虚不耐折腾，猝然而失去生机。'},
					{id:'5',text:'总之，养生，一定要懂得四时阴阳变化的规律，充分利用节气来调理健康。'},
				],
				title4:'三、节日养生',
				neirong4:[
					{id:'1',text:'节日虽然不是节气，但节日往往与天地阴阳气机相关。比如，二月初二，是阳气升发于地面的时节；五月初五端午节正是天地之间阳旺之日；月圆时节是农历每个月中阳气最旺的日子，等等。人居天地之间，人的健康亦受天地阴阳气机影响，所以这些节日也要注意养生。'},
					{id:'2',text:'如何养生呢？我的观点是：天地阴阳气机变化最剧烈的时节，我们都要多静以养阴，要素食以养脾胃，要保持情绪和畅以养心。若逢节日而大吃大喝、酗酒、旅游劳累、熬夜、各种折腾，这样就逆反天地规律了。'},
					{id:'3',text:'天地之道，顺之则生，逆之则病。'},
				],
				title5:'四、五脏养生',
				neirong5:[
					{id:'1',text:'人以元气为健康之本，医疗亦以元气为取效之本。无元气，则药物不能运行；无元气，则针灸不能驱使。由此说，养生，即是养自身之元气；治病，即是以自身之元气来祛除病邪。不管是治病还是养生，舍元气而难为。'},
					{id:'2',text:'我们的生命即是元气，与邪相对则称正气，与阴相对则称阳气。元气与阴邪不两立，元气健旺，则阴邪自退。'},
					{id:'3',text:'元气从何处来？一则，源于五脏六腑的平衡；二则，源于心神安和，君火明亮；三则，滋于肾家和脾家，为先后天之本。'},
					{id:'4',text:'如何让自己健康起来？不管是求医问药，还是自己养生，都要在五脏上下功夫。因为敢源于五脏，五脏平衡，阴阳调和，则元气健旺；反之，若五脏失衡，阴阳不调，则元气不足。'},
					{id:'5',text:'如何调节五脏呢？一方面，重视养生，从饮食、起居、运动等方面调理。五味通五脏，睡觉安五脏，运动和五脏；另一方面，重视调畅情绪和心理，特别是远离怨恨恼怒烦五毒，保持乐观、积极、宽容、善良的个性。因为怨伤脾；恨伤心；恼伤肺，怒伤肝，烦伤肾；'},
					{id:'6',text:'生命以五脏为本，五脏为形，但五脏内涵重视之神。换句话说，生命是形、气与神的结合体。要想健康，不但要养五脏之形，更要养五脏之气和五脏之神。《内经》讲恬淡虚无、精神内守，这是养五脏之神；讲气化则能出焉，这是养五脏之气；讲食饮有节，起居有常，不妄作劳，这是养五脏之形。'},
					{id:'7',text:'五脏藏精气而不泄，则人能健康。反之，若五脏精气不藏而妄泄，则人会失去健康。哪些行为会导致五脏精气妄泄呢？一则，房事过度，最耗肾精，肾为先天之本，绝不可妄耗；二则，过度熬夜，耗损五脏之精，有人连续玩游戏七天而猝死；三则，过度运动，阳随汗脱，阴阳皆损，有人跑马拉松猝死；四则，五志过极，火气上攻，血瘀于脑窍而神明顿失。今时不少年轻人容易患上大病，多与五脏不藏精相关，当考虑以上四点原因。'},
				],
				title6:'五、饮食养生',
				neirong6:[
					{id:'1',text:'养生的最高境界：法于自然，顺乎自然。要把养生融会贯通到日常生活之中，这是天人合一理论的具体体现。以饮食养生为例，不一定要吃山珍海味，也不必追求各种昂贵的保健品，好好吃饭即是最好的养生。'},
					{id:'2',text:'如何好好吃饭呢？一则多素少肉；二则吃饭时不建议盯着手机，亦不要思考工作中的各种问题；三则勿过饱。'},
					{id:'3',text:'今时不少人重视饮食养生，但重视的不是调节饮食，而是补充营养——这就违反了中医理论。饮食入口，由脾胃来运化，化生气血，以濡养五脏六腑和四肢百骸。人不能吃太多，吃多伤脾，导致清阳不升，人就会没有精神。从中医来分析，过度关注营养，远不如调节饮食，使脾胃健旺，气化生血充足，人也会更健康。'},
					{id:'4',text:'饮食养生，重在调节五味。五味各入五脏，调节五味，即是调节五脏。作为中医人，不但要通中药五味，更要熟悉饮食五味，而且饮食五味更重要。一则，因为饮食五味是《内经》所重视的；二则，能用饮食来调理的，何必用中药呢？三则，饮食平和，不伤正气，适合于所有患者；四则，饮食调理将是未来治病的一个趋势，既有效又方便，而且广为人们所接受。'},
					{id:'5',text:'饮食养生的几个原则：不食非本季、非本地食物；不吃深加工食品；不食转基因食品；不吃添加防腐剂以及各种添加剂的食品；不吃过辣、过咸、过烫食品；不食烧烤肉类；不食打过农药以及催熟剂之类的蔬菜水果；不喝牛奶。'},
					],
				title7:'六、运动养生',
				neirong7:'预防疾病，养生非常重要。除按中医理念养生外，我推荐运动，最能宣畅阳气，阳旺则阴霾自散。对于我们每个人来说，为了健康，运动是必需的。尤其是久坐之人，一定要运动起来。况且，运动还能让人心情和畅，让人心气平和，让人五脏六腑皆归于平衡。',
			}
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
.baodian{
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
		// height: 6430rpx;
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
		.pic{
			padding-left: 25rpx;
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
		.neirong5{
			text-indent: 2em;
		}
		.neirong6{
			text-indent: 2em;
		}
		.neirong7{
			text-indent: 2em;
		}
	}
</style>
