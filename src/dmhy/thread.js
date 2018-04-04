const { Episode } = require('./episode');
const { print, l10n } = require('../utils');
const { ThreadError } = require('../errors');

/**
 * A thread contains 1 or more episodes depend on subtitle group.
 *
 * @class Thread
 */
class Thread {
  /**
   * Creates an instance of Thread.
   * @param {any} threadLike [{ title = 'no title', link = 'magnet:' }={}]
   * @param {?RegExp} [episodeParser=null]
   * @memberof Thread
   */
  constructor({ title = 'no title', link = 'magnet:' } = {}, episodeParser = null) {
    this.title = title;
    this.link = link;

    if (!episodeParser) {
      this.episode = Thread.parseEpisodeFromTitle(this.title);
    } else {
      const _title = this.title.replace(episodeParser, '$1');
      this.episode = Thread.parseEpisodeFromTitle(_title);
    }

    if (!this.isValid()) {
      throw new ThreadError('Fail to construct a Thread');
    }
  }

  /**
   * @return {boolean} boolean
   * @memberof Thread
   */
  isValid() {
    return this.episode &&
      this.episode.isValid() &&
      this.title !== 'no title' &&
      this.link.startsWith('magnet:');
  }

  /**
   * The most important function that can parse episode from title.
   *
   * @static
   * @param {any} title
   * @param {any} [userBlacklistPatterns=[]]
   * @return {Episode} Episode
   * @memberof Thread
   */
  static parseEpisodeFromTitle(title, userBlacklistPatterns = []) {
    const blacklistPatterns = [
      /x?(1080|720)p?/,
      /\d+\s*月新番/,
      /x26[45]/,
      /10bit/,
      /ma10p/,
      /\bv\d/,
      /big5/,
      /mp4/,
    ];

    const tokens = title
      .split(/[[\]【】_\s]/g)
      .map((x) => x.toLowerCase())
      .filter((x) => /\d/.test(x))
      .filter((x) => !blacklistPatterns.some((rule) => rule.test(x)))
      .filter((x) => !userBlacklistPatterns.some((rule) => rule.test(x)))
      .map((x) => x.trim());

    // input [\d.]+-[\d.]+
    const parseRangeEpisode = (tok, type) => {
      const str = tok.replace(/(?:\D*|^)([\d.]+)(-[\d.]+)?(?:\D*|$)/, '$1$2');
      const [from, to] = str.split('-').map((t) => parseFloat(t));
      if (to === undefined) {
        return new Episode({ ep: from, type });
      }
      return new Episode(Episode.rangify([from, to], type));
    };

    // Find episode from last is easier
    for (const token of tokens.reverse()) {
      const tok = token
        .replace(/\s*(end|完)$/, '') // [24 end], [06完]
        .replace(/\s*v\d+$/, ''); // [20v2]

      if (/[+]/.test(tok)) {
        const eps = tok
          .split('+')
          .map((t) => Thread.parseEpisodeFromTitle(t).data)
          .reduce((a, b) => a.concat(b), []);
        return new Episode(eps);
      }
      let type = '';
      if (tokens.some((tok) => /(ova|sp)/.test(tok))) {
        type = tok.match(/(ova|sp)/)[0];
      }

      if (/(?:\D*|^)([\d.]+)(-[\d.]+)?(?:\D*|$)/.test(tok)) {
        return parseRangeEpisode(tok, type);
      }
    }

    print.warn(l10n('THREAD_EP_PARSE_ERR'));
    print.log('title:', `"${title}"`);
    print.log('tokens:', tokens);
  }

  /**
   * Return the latest TheEpisode
   *
   * @readonly
   * @memberof Thread
   */
  get head() {
    return this.episode.data[0];
  }
}

exports.Thread = Thread;
