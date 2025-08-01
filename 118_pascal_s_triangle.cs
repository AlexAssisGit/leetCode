public class Solution {
    public IList<IList<int>> Generate(int numRows) 
    {
        var output = new List<IList<int>>();
        for(int i = 0; i < numRows; i++)
        {
            var row = new List<int>(new int[i + 1]);
            for(int j = 0; j <= i; j++)
            {
                if(j == 0 || j == i) row[j] = 1;
                else row[j] = output[i-1][j-1] + output [i-1][j];  
            }
            output.Add(row);
        }
        return output;
    }
}