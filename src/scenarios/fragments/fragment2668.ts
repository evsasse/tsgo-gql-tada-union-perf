import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2666 } from "./fragment2666";
import type { FragmentToken2667 } from "./fragment2667";

export const FRAGMENT_2668 = gql(`
  fragment Fragment2668 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult2668 = ResultOf<typeof FRAGMENT_2668>;
type FragmentSelf2668 = NonNullable<FragmentResult2668>;

export type FragmentToken2668 =
  | FragmentSelf2668["__typename"]
  | FragmentSelf2668["typenameHint"] | FragmentToken2666 | FragmentToken2667;
