<script>
    import SubHeader from '../../components/SubHeader.svelte';
    import {
        Form,
        FormRow,
        InputContainer,
        autoresize,
    } from 'svelte-responsive-form';

    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();

    let name,
        email,
        subject,
        message = undefined;

    function handleSubmit() {
        fetch('kontakt/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
            }),
        })
            .then((response) => response.json())
            .then(() => {
                addNotification({
                    text: 'Tack för ditt meddelande',
                    position: 'top-left',
                });
                // Reset form
                name = email = subject = message = undefined;
            })
            .catch(() => {
                addNotification({
                    text: 'Någonting gick fel, vänligen försök igen.',
                    position: 'top-left',
                    type: 'danger',
                });
            });
    }
</script>

<style>
    div :global(form) {
        margin-top: 0;
        padding-top: 0;
    }

    div :global(label) {
        color: #000;
    }
    div :global(input),
    div :global(textarea) {
        color: #000;
    }

    div :global(input:focus:not([type='checkbox']) + label),
    div :global(input:not(:placeholder-shown):not([type='checkbox']) + label),
    div :global(textarea:focus + label),
    div :global(textarea:not(:placeholder-shown) + label) {
        color: #fff;
    }
</style>

<svelte:head>
    <title>Kontakt - The Coffee Lounge</title>
</svelte:head>

<div>
    <SubHeader title="Kontakta oss" />
    <Form on:submit={handleSubmit}>
        <FormRow>
            <InputContainer>
                <p class="info">
                    Du kan ringa oss på
                    <a href="tel:076-0047267">076-0047267</a>.
                </p>
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <p class="info">
                    Du hittar oss även på
                    <a
                        href="https://www.facebook.com/thecoffeeloungese/">Facebook</a>
                    och
                    <a
                        href="https://www.instagram.com/thecoffeeloungese/">Instagram</a>
                    .
                </p>
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Namn">
                <input bind:value={name} type="text" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Mailadress">
                <input
                    bind:value={email}
                    type="email"
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Ämne">
                <input
                    bind:value={subject}
                    type="text"
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Meddelande">
                <textarea
                    use:autoresize
                    bind:value={message}
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <input type="submit" value="Skicka" />
            </InputContainer>
        </FormRow>
    </Form>
</div>
