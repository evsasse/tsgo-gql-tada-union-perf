import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2125 } from "./fragment2125";
import type { FragmentToken2126 } from "./fragment2126";

export const FRAGMENT_2127 = gql(`
  fragment Fragment2127 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult2127 = ResultOf<typeof FRAGMENT_2127>;
type FragmentSelf2127 = NonNullable<FragmentResult2127>;

export type FragmentToken2127 =
  | FragmentSelf2127["__typename"]
  | FragmentSelf2127["typenameHint"] | FragmentToken2125 | FragmentToken2126;
