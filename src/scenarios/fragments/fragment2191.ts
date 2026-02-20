import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2189 } from "./fragment2189";
import type { FragmentToken2190 } from "./fragment2190";

export const FRAGMENT_2191 = gql(`
  fragment Fragment2191 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult2191 = ResultOf<typeof FRAGMENT_2191>;
type FragmentSelf2191 = NonNullable<FragmentResult2191>;

export type FragmentToken2191 =
  | FragmentSelf2191["__typename"]
  | FragmentSelf2191["typenameHint"] | FragmentToken2189 | FragmentToken2190;
