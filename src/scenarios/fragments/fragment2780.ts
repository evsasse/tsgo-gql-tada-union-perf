import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2778 } from "./fragment2778";
import type { FragmentToken2779 } from "./fragment2779";

export const FRAGMENT_2780 = gql(`
  fragment Fragment2780 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult2780 = ResultOf<typeof FRAGMENT_2780>;
type FragmentSelf2780 = NonNullable<FragmentResult2780>;

export type FragmentToken2780 =
  | FragmentSelf2780["__typename"]
  | FragmentSelf2780["typenameHint"] | FragmentToken2778 | FragmentToken2779;
