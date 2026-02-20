import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2873 } from "./fragment2873";
import type { FragmentToken2874 } from "./fragment2874";

export const FRAGMENT_2875 = gql(`
  fragment Fragment2875 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult2875 = ResultOf<typeof FRAGMENT_2875>;
type FragmentSelf2875 = NonNullable<FragmentResult2875>;

export type FragmentToken2875 =
  | FragmentSelf2875["__typename"]
  | FragmentSelf2875["typenameHint"] | FragmentToken2873 | FragmentToken2874;
