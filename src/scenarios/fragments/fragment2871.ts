import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2869 } from "./fragment2869";
import type { FragmentToken2870 } from "./fragment2870";

export const FRAGMENT_2871 = gql(`
  fragment Fragment2871 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult2871 = ResultOf<typeof FRAGMENT_2871>;
type FragmentSelf2871 = NonNullable<FragmentResult2871>;

export type FragmentToken2871 =
  | FragmentSelf2871["__typename"]
  | FragmentSelf2871["typenameHint"] | FragmentToken2869 | FragmentToken2870;
