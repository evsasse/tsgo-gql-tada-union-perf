import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2549 } from "./fragment2549";
import type { FragmentToken2550 } from "./fragment2550";

export const FRAGMENT_2551 = gql(`
  fragment Fragment2551 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult2551 = ResultOf<typeof FRAGMENT_2551>;
type FragmentSelf2551 = NonNullable<FragmentResult2551>;

export type FragmentToken2551 =
  | FragmentSelf2551["__typename"]
  | FragmentSelf2551["typenameHint"] | FragmentToken2549 | FragmentToken2550;
