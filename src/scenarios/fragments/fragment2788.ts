import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2786 } from "./fragment2786";
import type { FragmentToken2787 } from "./fragment2787";

export const FRAGMENT_2788 = gql(`
  fragment Fragment2788 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult2788 = ResultOf<typeof FRAGMENT_2788>;
type FragmentSelf2788 = NonNullable<FragmentResult2788>;

export type FragmentToken2788 =
  | FragmentSelf2788["__typename"]
  | FragmentSelf2788["typenameHint"] | FragmentToken2786 | FragmentToken2787;
