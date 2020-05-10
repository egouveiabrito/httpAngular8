export class Card 
{
    "object": string;
    "total_cards": number;
    "has_more": boolean;
    "next_page": string;
    "data": [
        {
            "object": string;
            "id": string;
            "oracle_id": string;
            "multiverse_ids": number[];
            "mtgo_id": number;
            "tcgplayer_id": number;
            "name": string;
            "lang": string;
            "released_at": string;
            "uri": string;
            "scryfall_uri": string;
            "layout": string;
            "highres_image": string;
            "image_uris": {
                "small": string;
                "normal": string;
                "large": string;
                "png": string;
                "art_crop": string;
                "border_crop": string;
            },
            "mana_cost": string;
            "cmc": number,
            "type_line": string;
            "oracle_text": string;
            "colors": string[];
            "color_identity": string[];
        }
    ]
}        
        
