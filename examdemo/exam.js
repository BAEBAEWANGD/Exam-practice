var count=document.getElementById("count");
count.onclick=function(){
	//点击计算分数的按钮，调用该函数
	var header=document.getElementById("header");
	var input=header.getElementsByTagName("input");
	var li=header.getElementsByTagName("li");
	var modal=document.getElementById("modal");
	var close=document.getElementById("close");
	var content=document.getElementById("content");
	var Input=content.getElementsByTagName("input");
	var text=document.getElementById("text");
	//表格变量
	var tr1=document.getElementById("tr1");
	var th1=tr1.getElementsByTagName("th");
	var tr2=document.getElementById("tr2");
	var th2=tr2.getElementsByTagName("th");
	var sum=0,sum1=0,sum2=0,sum3=0,sum4=0,sum5=0;
	//必填信息不能为空的警示框
	if(input[0].value == ""||input[1].value == ""||input[2].value == "")
	{
		modal.style.display="block";	
	}
	    //必填信息未填的提示
		if(input[0].value == "")
		{
	        input[0].style.border="1px solid red";
			li[3].style.color="red";
		}
		else{
			 input[0].style.border="";
			li[3].style.color="";
		}
		if(input[1].value == "")
		{
	        input[1].style.border="1px solid red";
			li[4].style.color="red";
		}
		else{
			 input[1].style.border="";
			li[4].style.color="";
		}
		if(input[2].value == "")
		{
	        input[2].style.border="1px solid red";
			li[5].style.color="red";
		}
		else{
			 input[2].style.border="";
			li[5].style.color="";
		}

//点击OK按钮，警示框消失
close.onclick=function(){
	modal.style.display="none";
}

//填空题
if(Input[0].value=="统一建模语言")
{
	sum1+=5;
}
if(Input[1].value=="封装性"||Input[2].value=="封装性"||Input[3].value=="封装性")
{
	sum1+=5;
}
if(Input[1].value=="继承性"||Input[2].value=="继承性"||Input[3].value=="继承性")
{
	sum1+=5;
}
if(Input[1].value=="多态性"||Input[2].value=="多态性"||Input[3].value=="多态性")
{
	sum1+=5;
}
th2[1].innerHTML=sum1;

//单选题
if(Input[5].checked)
{
	sum2+=10;
}
if(Input[8].checked)
{
	sum2+=10;
}
th2[2].innerHTML=sum2;
//多选题
if(Input[12].checked&&Input[14].checked&&Input[15].checked)
{
	sum3+=10;
}
if(Input[16].checked&&Input[17].checked&&Input[18].checked)
{
	sum3+=10;
}
th2[3].innerHTML=sum3;
//判断题
if(Input[21].checked)
{
	sum4+=10;
}
if(Input[22].checked)
{
	sum4+=10;
}
th2[4].innerHTML=sum4;
//简答题
if(text.value=="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式，可以是物理实体；可以是某种图形；或者是一种数学表达式。")
{
	sum5+=20;
}
th2[5].innerHTML=sum5;
sum+=sum1+sum2+sum3+sum4+sum5;
li[2].innerHTML=("得分："+sum);
li[2].style.color="red";
th1[6].innerHTML=sum;
};
