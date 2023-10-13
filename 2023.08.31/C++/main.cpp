#include <iostream>
#include <stdio.h>
#include <malloc.h>
#define MAX_SIZE 100
typedef char ElemType;
typedef struct BiTNode
{
    ElemType data;
    struct BiTNode *lchild, *rchild;
}BiTNode, *BiTree;

void preOrder(BiTree T)
{
    if (T != NULL)   //根节点不为空（子树根节点不为空）
    {
        printf("%c ", T->data);
        preOrder(T->lchild);   //遍历左子树
        preOrder(T->rchild);
    }
}

BiTNode *createBiTree(char levelOrderList[], int levelStartIndex, int levelEndIndex,
                      char inOrderList[], int inStartIndex, int inEndIndex)
{
    if (levelStartIndex > levelEndIndex)
    {
        return NULL;
    }

    BiTNode *t = (BiTNode *)malloc(sizeof(BiTNode));
    t->data = levelOrderList[levelStartIndex];

    int rIndex = inStartIndex;
    for ( rIndex ; rIndex <= inEndIndex; rIndex++)//中序遍历中找到根节点
    {
        if(t->data == inOrderList[rIndex])
            {
                break;
            }
    }


    char lftLevelOrderList[MAX_SIZE];
    int lftLevelOrderListLength = 0;
    for (int i = levelStartIndex + 1; i <= levelEndIndex; i++)
    {
        for (int j = inStartIndex; j <= rIndex - 1; j++)
        {
            if (levelOrderList[i] == inOrderList[j])
            {
                lftLevelOrderList[lftLevelOrderListLength++] = levelOrderList[i];
            }
        }
    }

    char rgtLevelOrderList[MAX_SIZE];
    int rgtLevelOrderListLength = 0;
    for (int i = levelStartIndex + 1; i <= levelEndIndex; i++)
    {
        for (int j = rIndex + 1; j <= inEndIndex; j++)
        {
            if (levelOrderList[i] == inOrderList[j])
            {
                rgtLevelOrderList[rgtLevelOrderListLength++] = levelOrderList[i];
            }
        }
    }



    t->lchild = createBiTree(lftLevelOrderList, 0, lftLevelOrderListLength - 1,
                             inOrderList, inStartIndex, rIndex - 1);

    t->rchild = createBiTree(lftLevelOrderList, 0, lftLevelOrderListLength - 1,
                             inOrderList, rIndex + 1, inEndIndex);
    return t;
}
int main()
{

     char levelOrderList[] = {'A', 'B', 'C', 'D', 'E', 'F', 'G'};
     int levelOrderListLength = 7;

     char inOrderList[] = {'D', 'B', 'E', 'A', 'F', 'C', 'G'};
     int inOrderListLength = 7;

     BiTree T = createBiTree(levelOrderList, 0, levelOrderListLength - 1,
                             inOrderList, 0, inOrderListLength - 1);

     preOrder(T);

}
