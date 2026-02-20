import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3267 } from "./fragment3267";
import type { FragmentToken3268 } from "./fragment3268";

export const FRAGMENT_3269 = gql(`
  fragment Fragment3269 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult3269 = ResultOf<typeof FRAGMENT_3269>;
type FragmentSelf3269 = NonNullable<FragmentResult3269>;

export type FragmentToken3269 =
  | FragmentSelf3269["__typename"]
  | FragmentSelf3269["typenameHint"] | FragmentToken3267 | FragmentToken3268;
