# Vue life cycle

1.beforeCreated

此时变量还未创建

2.created

变量已经创建,但还未渲染到Dom上

3.beforeMounted

变量创建完成并已经赋值

4.mounted

成功渲染到dom上,此时我们可以获取到真正的dom

5.beforeUpdated

变量准备更新

6.updated

完成更新

7.beforeDestroyed

销毁某个对象前

8.destroyed

成功销毁某个对象