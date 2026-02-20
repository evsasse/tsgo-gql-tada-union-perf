import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2290 } from "./fragment2290";
import type { FragmentToken2291 } from "./fragment2291";

export const FRAGMENT_2292 = gql(`
  fragment Fragment2292 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult2292 = ResultOf<typeof FRAGMENT_2292>;
type FragmentSelf2292 = NonNullable<FragmentResult2292>;

export type FragmentToken2292 =
  | FragmentSelf2292["__typename"]
  | FragmentSelf2292["typenameHint"] | FragmentToken2290 | FragmentToken2291;
