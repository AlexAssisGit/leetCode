public class Solution 
{
    public bool IsPalindrome(int x) 
    {
        var sx = x.ToString().ToCharArray();
        Array.Reverse(sx);
        return(x.ToString() == new string(sx));
    }
}