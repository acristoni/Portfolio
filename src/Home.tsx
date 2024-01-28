import FacebookLogin from 'react-facebook-login';

export default function Home() {
    const responseFacebook = (response: any) => {
        console.log(response);
    }

    return (
        <main>
          <FacebookLogin
            appId="2266610960223388"
            autoLoad
            callback={responseFacebook}
            fields="name,email,picture"
            scope='ads_management, pages_read_engagement, pages_show_list, ads_read, business_management, catalog_management, instagram_basic, instagram_content_publish, instagram_manage_events, instagram_manage_comments, instagram_manage_insights, instagram_manage_messages, instagram_shopping_tag_products, leads_retrieval, manage_fundraisers, page_events, pages_manage_ads, pages_manage_cta, pages_manage_engagement, pages_read_user_content, pages_manage_instant_articles, pages_manage_metadata, pages_manage_posts, pages_messaging, pages_messaging_subscriptions, read_insights, publish_video, read_page_mailboxes, whatsapp_business_management, whatsapp_business_messaging, instagram_graph_user_profile, instagram_graph_user_media'
            icon="fa-facebook"
            textButton="Entrar com o Facebook"
            size="small"
            authType="rerequest"
          />
        </main>
      )
}