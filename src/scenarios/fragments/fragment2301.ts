import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2299 } from "./fragment2299";
import type { FragmentToken2300 } from "./fragment2300";

export const FRAGMENT_2301 = gql(`
  fragment Fragment2301 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult2301 = ResultOf<typeof FRAGMENT_2301>;
type FragmentSelf2301 = NonNullable<FragmentResult2301>;

export type FragmentToken2301 =
  | FragmentSelf2301["__typename"]
  | FragmentSelf2301["typenameHint"] | FragmentToken2299 | FragmentToken2300;
