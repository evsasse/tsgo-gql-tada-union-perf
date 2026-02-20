import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2033 } from "./fragment2033";
import type { FragmentToken2034 } from "./fragment2034";

export const FRAGMENT_2035 = gql(`
  fragment Fragment2035 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult2035 = ResultOf<typeof FRAGMENT_2035>;
type FragmentSelf2035 = NonNullable<FragmentResult2035>;

export type FragmentToken2035 =
  | FragmentSelf2035["__typename"]
  | FragmentSelf2035["typenameHint"] | FragmentToken2033 | FragmentToken2034;
