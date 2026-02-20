import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2783 } from "./fragment2783";
import type { FragmentToken2784 } from "./fragment2784";

export const FRAGMENT_2785 = gql(`
  fragment Fragment2785 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult2785 = ResultOf<typeof FRAGMENT_2785>;
type FragmentSelf2785 = NonNullable<FragmentResult2785>;

export type FragmentToken2785 =
  | FragmentSelf2785["__typename"]
  | FragmentSelf2785["typenameHint"] | FragmentToken2783 | FragmentToken2784;
