import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2806 } from "./fragment2806";
import type { FragmentToken2807 } from "./fragment2807";

export const FRAGMENT_2808 = gql(`
  fragment Fragment2808 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult2808 = ResultOf<typeof FRAGMENT_2808>;
type FragmentSelf2808 = NonNullable<FragmentResult2808>;

export type FragmentToken2808 =
  | FragmentSelf2808["__typename"]
  | FragmentSelf2808["typenameHint"] | FragmentToken2806 | FragmentToken2807;
