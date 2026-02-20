import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2074 } from "./fragment2074";
import type { FragmentToken2075 } from "./fragment2075";

export const FRAGMENT_2076 = gql(`
  fragment Fragment2076 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult2076 = ResultOf<typeof FRAGMENT_2076>;
type FragmentSelf2076 = NonNullable<FragmentResult2076>;

export type FragmentToken2076 =
  | FragmentSelf2076["__typename"]
  | FragmentSelf2076["typenameHint"] | FragmentToken2074 | FragmentToken2075;
