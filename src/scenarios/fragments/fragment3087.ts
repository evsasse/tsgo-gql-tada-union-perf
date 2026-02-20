import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3085 } from "./fragment3085";
import type { FragmentToken3086 } from "./fragment3086";

export const FRAGMENT_3087 = gql(`
  fragment Fragment3087 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult3087 = ResultOf<typeof FRAGMENT_3087>;
type FragmentSelf3087 = NonNullable<FragmentResult3087>;

export type FragmentToken3087 =
  | FragmentSelf3087["__typename"]
  | FragmentSelf3087["typenameHint"] | FragmentToken3085 | FragmentToken3086;
