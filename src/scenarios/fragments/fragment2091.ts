import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2089 } from "./fragment2089";
import type { FragmentToken2090 } from "./fragment2090";

export const FRAGMENT_2091 = gql(`
  fragment Fragment2091 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult2091 = ResultOf<typeof FRAGMENT_2091>;
type FragmentSelf2091 = NonNullable<FragmentResult2091>;

export type FragmentToken2091 =
  | FragmentSelf2091["__typename"]
  | FragmentSelf2091["typenameHint"] | FragmentToken2089 | FragmentToken2090;
