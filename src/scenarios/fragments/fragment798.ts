import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken796 } from "./fragment796";
import type { FragmentToken797 } from "./fragment797";

export const FRAGMENT_798 = gql(`
  fragment Fragment798 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult798 = ResultOf<typeof FRAGMENT_798>;
type FragmentSelf798 = NonNullable<FragmentResult798>;

export type FragmentToken798 =
  | FragmentSelf798["__typename"]
  | FragmentSelf798["typenameHint"] | FragmentToken796 | FragmentToken797;
