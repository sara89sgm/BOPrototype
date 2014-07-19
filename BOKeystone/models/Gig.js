var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gig= new keystone.List('Gig', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gig.add({
	name: { type: String, required: true },
	description: {type: Types.Html, wysiwyg: true, height: 400 },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
});

Gig.register();