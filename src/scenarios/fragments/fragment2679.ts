import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2677 } from "./fragment2677";
import type { FragmentToken2678 } from "./fragment2678";

export const FRAGMENT_2679 = gql(`
  fragment Fragment2679 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult2679 = ResultOf<typeof FRAGMENT_2679>;
type FragmentSelf2679 = NonNullable<FragmentResult2679>;

export type FragmentToken2679 =
  | FragmentSelf2679["__typename"]
  | FragmentSelf2679["typenameHint"] | FragmentToken2677 | FragmentToken2678;
