# require 'hashie'
# require 'nokogiri'
# require 'restclient'


#ORIGINAL SOURCE BELONGS TO:
#https://github.com/intridea/opengraph

module OpenGraph
  # Fetch Open Graph data from the specified URI. Makes an
  # HTTP GET request and returns an OpenGraph::Object if there
  # is data to be found or <tt>false</tt> if there isn't.
  #
  # Pass <tt>false</tt> for the second argument if you want to
  # see invalid (i.e. missing a required attribute) data.
  def self.fetch(uri, strict = true)
    parse(RestClient.get(uri).body, strict)
  rescue RestClient::Exception, SocketError
    false
  end
  
  def fetch(uri, strict = true)
    parse(RestClient.get(uri).body, strict)
  rescue RestClient::Exception, SocketError
    false
  end
  
  def parse(html, strict = true)
    doc = Nokogiri::HTML.parse(html)
    page = OpenGraph::Object.new
    doc.css('meta').each do |m|
      if m.attribute('property') && m.attribute('property').to_s.match(/^og:(.+)$/i)
        page[$1.gsub('-','_')] = m.attribute('content').to_s
      end
    end
    return false if page.keys.empty?
    return false unless page.valid? if strict
    page
  end
  
  def self.parse(html, strict = true)
    doc = Nokogiri::HTML.parse(html)
    page = OpenGraph::Object.new
    doc.css('meta').each do |m|
      if m.attribute('property') && m.attribute('property').to_s.match(/^og:(.+)$/i)
        page[$1.gsub('-','_')] = m.attribute('content').to_s
      end
    end
    return false if page.keys.empty?
    return false unless page.valid? if strict
    page
  end
  
  # The OpenGraph::Object is a Hash with method accessors for
  # all detected Open Graph attributes.
  class Object < Hashie::Mash
    MANDATORY_ATTRIBUTES = %w(title type image url)
    
    # The object type.
    def type
      self['type']
    end
    
    # If the Open Graph information for this object doesn't contain
    # the mandatory attributes, this will be <tt>false</tt>.
    def valid?
      MANDATORY_ATTRIBUTES.each{|a| return false unless self[a]}
      true
    end
  end
end