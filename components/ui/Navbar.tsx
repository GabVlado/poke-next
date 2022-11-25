import NextLink from 'next/link';
import Image from "next/image";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";


export const Navbar = () => {

    const { theme } = useTheme();
    //console.log(theme)

    return (

            <div style={{
                display: "flex",
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0x 20px',
                backgroundColor: theme?.colors.gray100.value
            }}>

                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                        alt="icono del pokemon"
                        width={70}
                        height={70}
                    />


                    <NextLink href='/' passHref legacyBehavior>
                        <a style={{display: 'flex'}}>


                                <Text color='white' h2>P</Text>
                                <Text color='white' h3>okemon</Text>


                        </a>

                    </NextLink>

                <Spacer css={{ flex: 1 }} />
                <NextLink href='/favorites'  legacyBehavior >


                        <Text color='white' css={{ marginRight: '2rem' }} >Favoritos</Text>



                </NextLink>
            </div>

    )
}
