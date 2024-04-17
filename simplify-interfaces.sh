#!/bin/bash

# Function to process the file
process_file() {
    local file="src/apis/PlaidApi.ts"
    
    # Check if the file exists
    if [ ! -f "$file" ]; then
        echo "File '$file' does not exist."
        return 1
    fi
    
    # Create a temporary file for the modified content
    local temp_file="${file}.temp"
    
    # Initialize a flag to track if we are inside an interface block
    local inside_interface=false
    
    # Read the file line by line
    while IFS= read -r line; do
        # Check if the line matches the interface syntax
        if [[ $line =~ ^export\ interface\ ([^[:space:]]+)\ \{$ ]]; then
            local interface_name="${BASH_REMATCH[1]}"
            inside_interface=true
            
            # Read the next line to extract the property
            IFS= read -r next_line
            
            # Check if the next line matches the property syntax
            if [[ $next_line =~ ^[[:space:]]+([^:]+):[[:space:]]+([^;]+) ]]; then
                local property_name="${BASH_REMATCH[1]}"
                local property_type="${BASH_REMATCH[2]}"
                
                # Write the converted type syntax to the temporary file
                echo "export type $interface_name = $property_type;" >> "$temp_file"
            else
                # Write the original lines to the temporary file
                echo "$line" >> "$temp_file"
                echo "$next_line" >> "$temp_file"
            fi
        elif [[ $inside_interface == true && $line =~ ^\}$ ]]; then
            # Skip writing the closing brace if we are inside an interface block
            inside_interface=false
        else
            # Replace requestParameters\[.+\] with requestParameters if the line contains the pattern
            if [[ $line =~ requestParameters\[.+\] ]]; then
                line=$(echo "$line" | sed -E 's/requestParameters\[.+\]/requestParameters/g')
            fi
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace the original file with the modified content
    mv "$temp_file" "$file"
}

# Process the specific file
process_file