PGDMP     )    1                y            JTesting    13.3    13.3 )    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    JTesting    DATABASE     g   CREATE DATABASE "JTesting" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "JTesting";
                JTest    false            ?           0    0    SCHEMA public    ACL     ?   REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO "JTest";
GRANT ALL ON SCHEMA public TO PUBLIC;
                   JTest    false    3            ?            1259    24846    customer    TABLE     ?   CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying NOT NULL,
    code character varying NOT NULL,
    address character varying,
    discount integer
);
    DROP TABLE public.customer;
       public         heap    JTest    false            ?            1259    24844    customer_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.customer_id_seq;
       public          JTest    false    201            ?           0    0    customer_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;
          public          JTest    false    200            ?            1259    24875    item    TABLE     ?   CREATE TABLE public.item (
    id integer NOT NULL,
    code character varying NOT NULL,
    name character varying,
    price numeric,
    category character varying(30)
);
    DROP TABLE public.item;
       public         heap    JTest    false            ?            1259    24873    item_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.item_id_seq;
       public          JTest    false    205            ?           0    0    item_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;
          public          JTest    false    204            ?            1259    24857    order    TABLE     ?   CREATE TABLE public."order" (
    customer_id integer NOT NULL,
    id integer NOT NULL,
    order_date date NOT NULL,
    order_number integer,
    shipment_date date,
    status character varying
);
    DROP TABLE public."order";
       public         heap    JTest    false            ?            1259    24855    order_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.order_id_seq;
       public          JTest    false    203            ?           0    0    order_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
          public          JTest    false    202            ?            1259    24908    ordered_item    TABLE     ?   CREATE TABLE public.ordered_item (
    id integer NOT NULL,
    order_id integer NOT NULL,
    item_id integer NOT NULL,
    items_count integer NOT NULL,
    item_price numeric NOT NULL
);
     DROP TABLE public.ordered_item;
       public         heap    JTest    false            ?            1259    24906    ordered_item_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.ordered_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ordered_item_id_seq;
       public          JTest    false    207            ?           0    0    ordered_item_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ordered_item_id_seq OWNED BY public.ordered_item.id;
          public          JTest    false    206            8           2604    24849    customer id    DEFAULT     j   ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);
 :   ALTER TABLE public.customer ALTER COLUMN id DROP DEFAULT;
       public          JTest    false    201    200    201            :           2604    24878    item id    DEFAULT     b   ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);
 6   ALTER TABLE public.item ALTER COLUMN id DROP DEFAULT;
       public          JTest    false    205    204    205            9           2604    24860    order id    DEFAULT     f   ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
 9   ALTER TABLE public."order" ALTER COLUMN id DROP DEFAULT;
       public          JTest    false    202    203    203            ;           2604    24911    ordered_item id    DEFAULT     r   ALTER TABLE ONLY public.ordered_item ALTER COLUMN id SET DEFAULT nextval('public.ordered_item_id_seq'::regclass);
 >   ALTER TABLE public.ordered_item ALTER COLUMN id DROP DEFAULT;
       public          JTest    false    207    206    207            ?          0    24846    customer 
   TABLE DATA           E   COPY public.customer (id, name, code, address, discount) FROM stdin;
    public          JTest    false    201   -       ?          0    24875    item 
   TABLE DATA           ?   COPY public.item (id, code, name, price, category) FROM stdin;
    public          JTest    false    205   (-       ?          0    24857    order 
   TABLE DATA           c   COPY public."order" (customer_id, id, order_date, order_number, shipment_date, status) FROM stdin;
    public          JTest    false    203   ?-       ?          0    24908    ordered_item 
   TABLE DATA           V   COPY public.ordered_item (id, order_id, item_id, items_count, item_price) FROM stdin;
    public          JTest    false    207   ?-       ?           0    0    customer_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.customer_id_seq', 1, false);
          public          JTest    false    200            ?           0    0    item_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.item_id_seq', 5, true);
          public          JTest    false    204            ?           0    0    order_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.order_id_seq', 1, false);
          public          JTest    false    202            ?           0    0    ordered_item_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ordered_item_id_seq', 1, false);
          public          JTest    false    206            =           2606    24943    customer customer_code_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_code_key UNIQUE (code);
 D   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_code_key;
       public            JTest    false    201            ?           2606    24920    customer customer_id_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_id_key UNIQUE (id);
 B   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_id_key;
       public            JTest    false    201            A           2606    24854    customer customer_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            JTest    false    201            G           2606    24929    item item_id_code_key 
   CONSTRAINT     T   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_id_code_key UNIQUE (id, code);
 ?   ALTER TABLE ONLY public.item DROP CONSTRAINT item_id_code_key;
       public            JTest    false    205    205            I           2606    24883    item item_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.item DROP CONSTRAINT item_pkey;
       public            JTest    false    205            C           2606    24918    order order_id_key 
   CONSTRAINT     M   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_id_key UNIQUE (id);
 >   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_id_key;
       public            JTest    false    203            E           2606    24872    order order_key 
   CONSTRAINT     \   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_key PRIMARY KEY (id, customer_id);
 ;   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_key;
       public            JTest    false    203    203            K           2606    24931     ordered_item ordered_item_id_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.ordered_item
    ADD CONSTRAINT ordered_item_id_key UNIQUE (id);
 J   ALTER TABLE ONLY public.ordered_item DROP CONSTRAINT ordered_item_id_key;
       public            JTest    false    207            M           2606    24916    ordered_item ordered_item_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.ordered_item
    ADD CONSTRAINT ordered_item_pkey PRIMARY KEY (id, order_id, item_id);
 H   ALTER TABLE ONLY public.ordered_item DROP CONSTRAINT ordered_item_pkey;
       public            JTest    false    207    207    207            N           2606    24866    order order_customer_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);
 H   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_customer_id_fkey;
       public          JTest    false    2881    201    203            O           2606    24932 &   ordered_item ordered_item_item_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.ordered_item
    ADD CONSTRAINT ordered_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) NOT VALID;
 P   ALTER TABLE ONLY public.ordered_item DROP CONSTRAINT ordered_item_item_id_fkey;
       public          JTest    false    2889    207    205            P           2606    24937 '   ordered_item ordered_item_order_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.ordered_item
    ADD CONSTRAINT ordered_item_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) NOT VALID;
 Q   ALTER TABLE ONLY public.ordered_item DROP CONSTRAINT ordered_item_order_id_fkey;
       public          JTest    false    2883    203    207            ?      x?????? ? ?      ?   M   x?3?47?5554ѭ,3???J,KT??4420?t????2?44?5157?-*2??t?IL?V(H??4?p??????? 8??      ?      x?????? ? ?      ?      x?????? ? ?     