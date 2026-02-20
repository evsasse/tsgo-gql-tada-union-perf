import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2888 } from "./fragment2888";
import type { FragmentToken2889 } from "./fragment2889";

export const FRAGMENT_2890 = gql(`
  fragment Fragment2890 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult2890 = ResultOf<typeof FRAGMENT_2890>;
type FragmentSelf2890 = NonNullable<FragmentResult2890>;

export type FragmentToken2890 =
  | FragmentSelf2890["__typename"]
  | FragmentSelf2890["typenameHint"] | FragmentToken2888 | FragmentToken2889;
