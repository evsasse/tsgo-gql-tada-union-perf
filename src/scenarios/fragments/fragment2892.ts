import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2890 } from "./fragment2890";
import type { FragmentToken2891 } from "./fragment2891";

export const FRAGMENT_2892 = gql(`
  fragment Fragment2892 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult2892 = ResultOf<typeof FRAGMENT_2892>;
type FragmentSelf2892 = NonNullable<FragmentResult2892>;

export type FragmentToken2892 =
  | FragmentSelf2892["__typename"]
  | FragmentSelf2892["typenameHint"] | FragmentToken2890 | FragmentToken2891;
