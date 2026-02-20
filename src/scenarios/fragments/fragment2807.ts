import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2805 } from "./fragment2805";
import type { FragmentToken2806 } from "./fragment2806";

export const FRAGMENT_2807 = gql(`
  fragment Fragment2807 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult2807 = ResultOf<typeof FRAGMENT_2807>;
type FragmentSelf2807 = NonNullable<FragmentResult2807>;

export type FragmentToken2807 =
  | FragmentSelf2807["__typename"]
  | FragmentSelf2807["typenameHint"] | FragmentToken2805 | FragmentToken2806;
