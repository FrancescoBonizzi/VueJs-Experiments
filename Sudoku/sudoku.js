var Sudoku = ( function (){

    var _rows, _cols, _grid;

    // initialize the module with input data
    init = function(data){
        _reorganizeData(data);
        return this;
    };

    // return true if sudoku is valid
    isValid = function(){
        return (_validate(_rows) && _validate(_cols) && _validate(_grid));
    };

    // validate rows 
    _validate = function(data){

        for (var row = 0; row < 9; row++) {

            data[row].sort();
            
            for (var col = 0; col < 9; col++) {

                var value = data[row][col], next_value = data[row][col + 1];

                // check if value exists and is a valid number
                if (!(value && value > 0 && value < 10)){
                    return false;
                }

                // check if numbers are unique
                if (col !== 8 && value === next_value){
                    return false;
                }

            }
        }
        return true;
    };

    // reorganize data into three structures
    _reorganizeData = function(data){
        _rows = data;
        _cols = [];
        _grid = [];

        // Prefilling the structures with empty array objects
        for (var i = 0; i < 9; i++) {
            _cols.push([]);
            _grid.push([]);
        }
        
        for (var row = 0; row < 9; row++) {

            for (var col = 0; col < 9; col++) {

                // Save each column in a new row
                _cols[col][row] = data[row][col];

                // Calculate grid identifiers
                gridRow = Math.floor( row / 3 );
                gridCol = Math.floor( col / 3 );
                gridIndex = gridRow * 3 + gridCol;

                // Save each grid in a new row
                _grid[gridIndex].push(data[row][col]);
                
            }
        }

    };
 
    // make functions public
    return {
        init: init,
        isValid: isValid
    };
})();
