public class Solution 
{
    public int MySqrt(int x) 
    {
        if(x == 1) return 1;
        for(int sqrt = 0; sqrt <= x/2; sqrt ++)
        {
            if(sqrt * sqrt == x) return(sqrt);
            else if((sqrt * sqrt < x) && ((sqrt + 1) * (sqrt + 1) > x)) return(sqrt);
            else if(sqrt * sqrt > x) return(sqrt - 1);
        }
        return(0);
    }
}