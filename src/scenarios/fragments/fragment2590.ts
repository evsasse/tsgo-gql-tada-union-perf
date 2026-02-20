import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2588 } from "./fragment2588";
import type { FragmentToken2589 } from "./fragment2589";

export const FRAGMENT_2590 = gql(`
  fragment Fragment2590 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult2590 = ResultOf<typeof FRAGMENT_2590>;
type FragmentSelf2590 = NonNullable<FragmentResult2590>;

export type FragmentToken2590 =
  | FragmentSelf2590["__typename"]
  | FragmentSelf2590["typenameHint"] | FragmentToken2588 | FragmentToken2589;
