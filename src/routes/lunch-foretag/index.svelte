<script>
    import SubHeader from '../../components/SubHeader.svelte';
    import {
        Form,
        FormRow,
        InputContainer,
        autoresize,
    } from '@albinmedoc/svelte-form';

    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();

    let order,
        address,
        phonenumber,
        company_name = undefined;

    function handleSubmit() {
        fetch('lunch-foretag/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order: order,
                address: address,
                phonenumber: phonenumber,
                company_name: company_name,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                addNotification({
                    text: 'Tack för din beställning',
                    position: 'top-left',
                });
                // Reset form
                order = address = phonenumber = company_name = undefined;
            })
            .catch((error) => {
                addNotification({
                    text: 'Någonting gick fel, vänligen försök igen.',
                    position: 'top-left',
                    type: 'danger',
                });
            });
    }
</script>

<style>
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
    <title>Företagslunch - The Coffee Lounge</title>
</svelte:head>

<div>
    <SubHeader title="Lunch för företag" />
    <Form on:submit={handleSubmit}>
        <FormRow>
            <InputContainer>
                <p class="info">
                    Beställning måste ske senast kl 11 samma dag som önskad
                    leverans.
                </p>
                <p class="info">
                    Leverans kommer att ske mellan kl 11.30 & 12.15.
                </p>
                <p class="info">
                    Utkörning sker endast inom Staffanstorp (OBS, ingen extra
                    avgift).
                </p>
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Beställning">
                <textarea
                    use:autoresize
                    bind:value={order}
                    placeholder="
                    "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Adress">
                <input
                    bind:value={address}
                    type="text"
                    placeholder="
                    "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Telefonnummer">
                <input
                    bind:value={phonenumber}
                    type="tel"
                    placeholder="
                    "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Företagsnamn">
                <input
                    bind:value={company_name}
                    type="text"
                    placeholder="
                    "
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
