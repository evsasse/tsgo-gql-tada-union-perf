import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2124 } from "./fragment2124";
import type { FragmentToken2125 } from "./fragment2125";

export const FRAGMENT_2126 = gql(`
  fragment Fragment2126 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult2126 = ResultOf<typeof FRAGMENT_2126>;
type FragmentSelf2126 = NonNullable<FragmentResult2126>;

export type FragmentToken2126 =
  | FragmentSelf2126["__typename"]
  | FragmentSelf2126["typenameHint"] | FragmentToken2124 | FragmentToken2125;
