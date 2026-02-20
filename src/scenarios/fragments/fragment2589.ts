import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2587 } from "./fragment2587";
import type { FragmentToken2588 } from "./fragment2588";

export const FRAGMENT_2589 = gql(`
  fragment Fragment2589 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult2589 = ResultOf<typeof FRAGMENT_2589>;
type FragmentSelf2589 = NonNullable<FragmentResult2589>;

export type FragmentToken2589 =
  | FragmentSelf2589["__typename"]
  | FragmentSelf2589["typenameHint"] | FragmentToken2587 | FragmentToken2588;
