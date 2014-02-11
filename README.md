# What Mac?

This module takes Apple serial numbers and returns hardware details of your Mac within JSON.

```json
{
    "serial": "XXXXXXXXXDV33",
    "year": "Mid 2012",
    "size": "15-inch",
    "name": "MacBook Pro",
    "_configCode": "MacBook Pro (15-inch, Mid 2012)"
}
```

## Usage

```
echo "XXXXXXXXXDV33" | bin/what-mac.js
```

The CLI accepts a stream of line-separated serial numbers. You can provide a list of any number of serial numbers to return a JSON object for each.

Credit to this [StackExchange](http://apple.stackexchange.com/questions/98080/can-a-macs-model-year-be-determined-via-terminal-command) question for putting me on the right track.

## Todo

- Convert bin/what-mac to support command line options rather than only stream data
- Browserify the module for front-end use
- Develop example HTML/JS webpage for demo/quick use purposes.
