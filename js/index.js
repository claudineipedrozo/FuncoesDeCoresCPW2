// Alias baseado no jQuery
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)


const onChangeRangesRGBA = () => {
    const red = $('#red').value
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $('#color-display-rgba').style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

// $('#red').oninput = onChangeRangesRGBA
// $('#green').oninput = onChangeRangesRGBA
// $('#blue').oninput = onChangeRangesRGBA
// $('#alpha').oninput = onChangeRangesRGBA

$all('#color-ranges-rgba input[type=range]').forEach((range) => (range.oninput = onChangeRangesRGBA))

const onChangeRangesHSL = () => {
    const hue = $('#hue').value
    const saturation = $('#saturation').value
    const lightness = $('#lightness').value
    
    $('#color-display-hsl').style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    
}

// $('#hue').oninput = onChangeRangesHSL
// $('#saturation').oninput = onChangeRangesHSL
// $('#lightness').oninput = onChangeRangesHSL

$all('#color-ranges-hsl input[type=range]').forEach((range) => (range.oninput = onChangeRangesHSL))
