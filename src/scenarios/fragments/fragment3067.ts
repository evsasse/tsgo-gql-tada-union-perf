import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3065 } from "./fragment3065";
import type { FragmentToken3066 } from "./fragment3066";

export const FRAGMENT_3067 = gql(`
  fragment Fragment3067 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult3067 = ResultOf<typeof FRAGMENT_3067>;
type FragmentSelf3067 = NonNullable<FragmentResult3067>;

export type FragmentToken3067 =
  | FragmentSelf3067["__typename"]
  | FragmentSelf3067["typenameHint"] | FragmentToken3065 | FragmentToken3066;
