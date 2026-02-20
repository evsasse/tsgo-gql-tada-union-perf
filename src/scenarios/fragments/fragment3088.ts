import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3086 } from "./fragment3086";
import type { FragmentToken3087 } from "./fragment3087";

export const FRAGMENT_3088 = gql(`
  fragment Fragment3088 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult3088 = ResultOf<typeof FRAGMENT_3088>;
type FragmentSelf3088 = NonNullable<FragmentResult3088>;

export type FragmentToken3088 =
  | FragmentSelf3088["__typename"]
  | FragmentSelf3088["typenameHint"] | FragmentToken3086 | FragmentToken3087;
