import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2804 } from "./fragment2804";
import type { FragmentToken2805 } from "./fragment2805";

export const FRAGMENT_2806 = gql(`
  fragment Fragment2806 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult2806 = ResultOf<typeof FRAGMENT_2806>;
type FragmentSelf2806 = NonNullable<FragmentResult2806>;

export type FragmentToken2806 =
  | FragmentSelf2806["__typename"]
  | FragmentSelf2806["typenameHint"] | FragmentToken2804 | FragmentToken2805;
