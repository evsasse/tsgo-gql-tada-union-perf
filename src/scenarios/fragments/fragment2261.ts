import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2259 } from "./fragment2259";
import type { FragmentToken2260 } from "./fragment2260";

export const FRAGMENT_2261 = gql(`
  fragment Fragment2261 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult2261 = ResultOf<typeof FRAGMENT_2261>;
type FragmentSelf2261 = NonNullable<FragmentResult2261>;

export type FragmentToken2261 =
  | FragmentSelf2261["__typename"]
  | FragmentSelf2261["typenameHint"] | FragmentToken2259 | FragmentToken2260;
